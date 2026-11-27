"""
Service Layer for FloodGuard AI API.
Coordinates prediction, history storage (DynamoDB-compatible schema), and simulated live sensor data.
"""

import os
import sys
import json
from datetime import datetime, timezone
from typing import List, Dict, Any, Optional

# Ensure src is in python path
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_DIR = os.path.join(BASE_DIR, "src")
if SRC_DIR not in sys.path:
    sys.path.insert(0, SRC_DIR)

from predict import FloodPredictor

class FloodService:
    def __init__(self):
        self.predictor = FloodPredictor()
        self.history_file = os.path.join(BASE_DIR, "artifacts", "prediction_history.json")
        self.history: List[Dict[str, Any]] = self._load_history()

    def _load_history(self) -> List[Dict[str, Any]]:
        if os.path.exists(self.history_file):
            try:
                with open(self.history_file, "r") as f:
                    return json.load(f)
            except Exception:
                return []
        return []

    def _save_history(self):
        try:
            # Keep latest 100 predictions
            to_save = self.history[-100:]
            with open(self.history_file, "w") as f:
                json.dump(to_save, f, indent=2)
        except Exception as e:
            print(f"Error saving history: {e}")

    def predict_single(self, request_data: Dict[str, Any]) -> Dict[str, Any]:
        result = self.predictor.predict(request_data)

        # Store in history (DynamoDB partition key: area_id, sort key: prediction_timestamp#prediction_id)
        record = {
            "partition_key": result["area_id"],
            "sort_key": f"{result['data_timestamp']}#{result['prediction_id']}",
            "prediction_id": result["prediction_id"],
            "area_id": result["area_id"],
            "area_name": result["area_name"],
            "risk_probability": result["risk_probability"],
            "risk_band": result["risk_band"],
            "model_version": result["model_version"],
            "timestamp": result["data_timestamp"],
            "rain_24h_mm": result["features_snapshot"].get("rain_24h_mm", 0.0),
            "top_factors": result["top_factors"]
        }
        self.history.append(record)
        self._save_history()

        return result

    def predict_batch_all(self, batch_data: Dict[str, Any]) -> List[Dict[str, Any]]:
        results = []
        zones = self.predictor.pipeline.zones_metadata
        target_ids = batch_data.get("area_ids") or list(zones.keys())

        batch_ts = batch_data.get("timestamp") or datetime.now(timezone.utc).isoformat()
        for area_id in target_ids:
            req = {
                "area_id": area_id,
                "timestamp": batch_ts,
                "rain_1h_mm": batch_data["rain_1h_mm"],
                "rain_24h_mm": batch_data["rain_24h_mm"],
                "rain_3d_mm": batch_data["rain_3d_mm"],
                "temperature_c": batch_data.get("temperature_c", 28.0),
                "humidity_pct": batch_data.get("humidity_pct", 80.0)
            }
            res = self.predict_single(req)
            results.append(res)
        return results

    def get_districts(self) -> List[Dict[str, Any]]:
        india_path = os.path.join(BASE_DIR, "data", "raw", "india_states_data.json")
        tn_path = os.path.join(BASE_DIR, "data", "raw", "tamilnadu_districts.json")
        target_path = india_path if os.path.exists(india_path) else tn_path
        if os.path.exists(target_path):
            with open(target_path, "r", encoding="utf-8") as f:
                return json.load(f)
        return []

    def get_zones(self, district_id: Optional[str] = None) -> List[Dict[str, Any]]:
        all_zones = list(self.predictor.pipeline.zones_metadata.values())
        if district_id and district_id != "ALL":
            return [z for z in all_zones if z.get("district_id") == district_id]
        return all_zones

    def get_history(self, limit: int = 25) -> List[Dict[str, Any]]:
        return list(reversed(self.history[-limit:]))

    def get_model_info(self) -> Dict[str, Any]:
        metrics_file = os.path.join(BASE_DIR, "artifacts", "metrics_report.json")
        shap_file = os.path.join(BASE_DIR, "artifacts", "shap_summary.json")

        metrics = {}
        factors = []
        if os.path.exists(metrics_file):
            with open(metrics_file, "r") as f:
                metrics = json.load(f)
        if os.path.exists(shap_file):
            with open(shap_file, "r") as f:
                factors = json.load(f)

        return {
            "model_name": "FloodGuard AI Urban Flood Estimator",
            "version": "floodguard-0.1.0",
            "framework": "XGBoost 3.4.1 + scikit-learn",
            "region": "Chennai Metropolitan Area, Tamil Nadu, India",
            "spatial_units": "12 Urban Administrative & Drainage Zones",
            "training_period": "2021-01-01 to 2023-09-30 (Chronological split)",
            "holdout_test_period": "2023-10-01 to 2024-11-01",
            "metrics": metrics,
            "feature_importance": factors,
            "intended_use": "Urban flood risk estimation, early hazard mitigation planning, and scenario testing",
            "disclaimer": "Educational and research prototype. Real-world emergency response must adhere to IMD and TN-SDMA bulletins."
        }

    def get_simulated_live_weather(self) -> Dict[str, Any]:
        return {
            "source": "Regional Meteorological Centre (IMD Chennai Doppler Radar Feed)",
            "radar_station": "Chennai (Meenambakkam)",
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "station_data": {
                "nungambakkam": {"rain_24h_mm": 18.4, "temp_c": 29.2, "humidity_pct": 82},
                "meenambakkam": {"rain_24h_mm": 24.1, "temp_c": 28.6, "humidity_pct": 86},
                "chembarambakkam_lake_level_ft": 21.4,
                "chembarambakkam_capacity_ft": 24.0,
                "adyar_river_discharge_cusecs": 1250,
                "cooum_river_discharge_cusecs": 850
            },
            "alerts": [
                {
                    "severity": "YELLOW",
                    "title": "Moderate Rain with Thunderstorm Alert",
                    "description": "Scattered moderate thunderstorms predicted across coastal Chennai and Chengalpattu.",
                    "valid_until": "24 Hours"
                }
            ]
        }
