"""
Feature Engineering and Data Preprocessing Pipeline for FloodGuard AI.
Guarantees consistent feature names, order, scaling, and leakage prevention.
"""

import numpy as np
import pandas as pd
from typing import Dict, List, Tuple, Any
import os
import json

FEATURE_COLUMNS = [
    "rain_1h_mm",
    "rain_24h_mm",
    "rain_3d_mm",
    "temperature_c",
    "humidity_pct",
    "elevation_m",
    "slope_deg",
    "flow_accumulation",
    "distance_to_water_m",
    "impervious_surface_pct",
    "drainage_capacity_index",
    # Engineered physical risk features
    "runoff_index",
    "topographic_wetness_proxy",
    "depression_risk",
    "antecedent_rain_ratio"
]

def engineer_features(df: pd.DataFrame) -> pd.DataFrame:
    """
    Computes compound physical and hydrological features for flood susceptibility.
    """
    df = df.copy()

    # Runoff pressure index
    df["runoff_index"] = (df["rain_24h_mm"] * (df["impervious_surface_pct"] / 100.0)) / (
        df["drainage_capacity_index"] + 0.1
    )

    # Topographic wetness index proxy: ln(flow_acc) / (tan(slope) + epsilon)
    slope_rad = np.radians(np.clip(df["slope_deg"], 0.1, 45.0))
    df["topographic_wetness_proxy"] = np.log(df["flow_accumulation"] + 1.0) / (np.tan(slope_rad) + 0.05)

    # Low elevation depression risk
    df["depression_risk"] = 1.0 / (np.clip(df["elevation_m"], 0.5, 100.0))

    # Antecedent rainfall ratio (intensity of today's rain vs 3-day history)
    df["antecedent_rain_ratio"] = df["rain_24h_mm"] / (df["rain_3d_mm"] + 1.0)

    return df

class FeaturePipeline:
    def __init__(self, zones_meta_path: str = None):
        self.feature_columns = FEATURE_COLUMNS
        self.zones_metadata = {}
        
        # 1. Load legacy zones if present
        if zones_meta_path and os.path.exists(zones_meta_path):
            with open(zones_meta_path, "r", encoding="utf-8") as f:
                zones_list = json.load(f)
                self.zones_metadata = {z["area_id"]: z for z in zones_list}

        # 2. Load all India and Tamil Nadu geography metadata
        base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        india_path = os.path.join(base_dir, "data", "raw", "india_states_data.json")
        tn_path = os.path.join(base_dir, "data", "raw", "tamilnadu_districts.json")
        target_path = india_path if os.path.exists(india_path) else tn_path
        if os.path.exists(target_path):
            with open(target_path, "r", encoding="utf-8") as f:
                districts_data = json.load(f)
                for dist in districts_data:
                    for a in dist.get("areas", []):
                        a["district_id"] = dist["district_id"]
                        a["district_name"] = dist["district_name"]
                        a["state_name"] = dist.get("state_name", "Tamil Nadu")
                        self.zones_metadata[a["area_id"]] = a

    def prepare_training_data(self, csv_path: str) -> Tuple[pd.DataFrame, pd.Series, pd.DataFrame, pd.Series]:
        """
        Loads dataset and splits strictly chronologically to prevent temporal leakage.
        """
        df = pd.read_csv(csv_path)
        df["timestamp"] = pd.to_datetime(df["timestamp"])
        df = df.sort_values("timestamp").reset_index(drop=True)
        
        df = engineer_features(df)

        # Chronological split: 80% train, 20% holdout test
        split_date = df["timestamp"].quantile(0.80)
        train_mask = df["timestamp"] <= split_date
        test_mask = df["timestamp"] > split_date

        X_train = df.loc[train_mask, self.feature_columns]
        y_train = df.loc[train_mask, "flood_label"]
        X_test = df.loc[test_mask, self.feature_columns]
        y_test = df.loc[test_mask, "flood_label"]

        return X_train, y_train, X_test, y_test

    def transform_single_request(self, payload: Dict[str, Any]) -> pd.DataFrame:
        """
        Validates and merges live inference request with static GIS terrain metadata.
        """
        area_id = payload.get("area_id")
        if area_id not in self.zones_metadata:
            raise ValueError(f"Unknown area_id '{area_id}'. Available zones: {list(self.zones_metadata.keys())}")

        zone = self.zones_metadata[area_id]

        row = {
            "rain_1h_mm": float(payload.get("rain_1h_mm", 0.0)),
            "rain_24h_mm": float(payload.get("rain_24h_mm", 0.0)),
            "rain_3d_mm": float(payload.get("rain_3d_mm", payload.get("rain_24h_mm", 0.0))),
            "temperature_c": float(payload.get("temperature_c", 28.0)),
            "humidity_pct": float(payload.get("humidity_pct", 75.0)),
            "elevation_m": float(zone.get("elevation_m", 10.0)),
            "slope_deg": float(zone.get("slope_deg", 1.5)),
            "flow_accumulation": float(zone.get("flow_accumulation", zone.get("flow_acc", 1000.0))),
            "distance_to_water_m": float(zone.get("distance_to_water_m", zone.get("dist_water_m", 500.0))),
            "impervious_surface_pct": float(zone.get("impervious_surface_pct", zone.get("impervious_pct", 75.0))),
            "drainage_capacity_index": float(zone.get("drainage_capacity_index", zone.get("drainage_idx", 0.45)))
        }

        df_single = pd.DataFrame([row])
        df_single = engineer_features(df_single)
        return df_single[self.feature_columns]
