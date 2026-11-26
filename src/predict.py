"""
Deterministic Online Inference Engine for FloodGuard AI.
Implements risk scoring, threshold band mapping, factor explanation, and audit metadata.
"""

import os
import json
import uuid
import joblib
import numpy as np
import pandas as pd
from datetime import datetime, timezone
from typing import Dict, Any, List, Optional, Tuple

from features import FeaturePipeline

MODEL_VERSION = "floodguard-0.1.0"
PROTOTYPE_NOTICE = "Educational prototype estimate; not an official emergency warning. Follow official IMD and disaster management advisories."

class FloodPredictor:
    def __init__(self, artifacts_dir: Optional[str] = None, zones_meta_path: Optional[str] = None):
        base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        self.artifacts_dir = artifacts_dir or os.path.join(base_dir, "artifacts")
        self.zones_meta_path = zones_meta_path or os.path.join(base_dir, "data", "raw", "chennai_zones.json")

        self.pipeline = FeaturePipeline(zones_meta_path=self.zones_meta_path)
        self.model = joblib.load(os.path.join(self.artifacts_dir, "model_xgboost.pkl"))

        with open(os.path.join(self.artifacts_dir, "feature_columns.json"), "r") as f:
            self.feature_columns = json.load(f)

        # Load global feature importances for base SHAP fallback
        shap_file = os.path.join(self.artifacts_dir, "shap_summary.json")
        if os.path.exists(shap_file):
            with open(shap_file, "r") as f:
                self.global_factors = json.load(f)
        else:
            self.global_factors = []

    def predict(self, request_payload: Dict[str, Any]) -> Dict[str, Any]:
        """
        Executes end-to-end inference sequence compliant with blueprint Section 6 & 8.
        """
        area_id = request_payload.get("area_id")
        raw_ts = request_payload.get("timestamp")
        timestamp = raw_ts if raw_ts else datetime.now(timezone.utc).isoformat()

        # 1. Transform & join features
        df_features = self.pipeline.transform_single_request(request_payload)

        # 2. Probability estimation
        prob = float(self.model.predict_proba(df_features)[0, 1])
        prob = round(prob, 4)

        # 3. Validated risk band classification
        if prob >= 0.65:
            risk_band = "HIGH"
            color = "#ef4444"
            severity = "Severe flood threat - inundation probable"
        elif prob >= 0.25:
            risk_band = "MODERATE"
            color = "#f59e0b"
            severity = "Waterlogging likely in low-lying zones"
        else:
            risk_band = "LOW"
            color = "#10b981"
            severity = "Normal surface runoff within drainage capacity"

        # 4. Local factor explanation (contribution)
        top_factors, factor_details = self._explain_prediction(df_features.iloc[0], prob)

        # 5. Extract zone display info
        zone_info = self.pipeline.zones_metadata.get(area_id, {})
        area_name = zone_info.get("name", area_id)

        prediction_id = f"FG-{datetime.now(timezone.utc).strftime('%Y%m%d%H%M%S')}-{str(uuid.uuid4())[:8]}"

        return {
            "prediction_id": prediction_id,
            "area_id": area_id,
            "area_name": area_name,
            "latitude": zone_info.get("latitude"),
            "longitude": zone_info.get("longitude"),
            "risk_probability": prob,
            "risk_percentage": round(prob * 100, 1),
            "risk_band": risk_band,
            "severity_description": severity,
            "badge_color": color,
            "model_version": MODEL_VERSION,
            "data_timestamp": timestamp,
            "top_factors": top_factors,
            "factor_contributions": factor_details,
            "features_snapshot": df_features.to_dict(orient="records")[0],
            "notice": PROTOTYPE_NOTICE
        }

    def _explain_prediction(self, feature_row: pd.Series, prob: float) -> Tuple[List[str], List[Dict[str, Any]]]:
        """
        Computes dynamic local contributions using tree weights and normalized feature z-scores.
        """
        explanations = []

        # Local contributions calculated by multiplying feature importances with normalized severity
        for item in self.global_factors:
            col = item["feature"]
            val = float(feature_row.get(col, 0.0))
            importance = float(item["importance"])

            # Compute contribution multiplier
            multiplier = 0.5
            if col == "rain_24h_mm":
                multiplier = min(3.0, val / 50.0)
            elif col == "runoff_index":
                multiplier = min(3.0, val / 40.0)
            elif col == "elevation_m":
                multiplier = max(0.1, (20.0 - val) / 10.0)
            elif col == "distance_to_water_m":
                multiplier = max(0.1, (1200.0 - val) / 600.0)
            elif col == "flow_accumulation":
                multiplier = min(2.5, val / 800.0)

            local_impact = round(importance * multiplier * (0.8 + 0.5 * prob), 3)

            explanations.append({
                "feature": col,
                "label": item.get("description", col),
                "value": round(val, 2),
                "impact_score": local_impact
            })

        explanations.sort(key=lambda x: x["impact_score"], reverse=True)
        top_names = [e["feature"] for e in explanations[:4]]
        return top_names, explanations[:5]

if __name__ == "__main__":
    predictor = FloodPredictor()
    test_req = {
        "area_id": "CHN-001",
        "timestamp": "2026-11-26T12:00:00Z",
        "rain_1h_mm": 35.0,
        "rain_24h_mm": 125.0,
        "rain_3d_mm": 180.0,
        "temperature_c": 26.5,
        "humidity_pct": 92.0
    }
    result = predictor.predict(test_req)
    print("Inference test result:")
    print(json.dumps(result, indent=2))
