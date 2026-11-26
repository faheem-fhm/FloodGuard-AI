"""
Unit tests for Feature Pipeline and Leakage Prevention.
"""

import pytest
import os
import sys
import pandas as pd
import numpy as np

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_DIR = os.path.join(BASE_DIR, "src")
if SRC_DIR not in sys.path:
    sys.path.insert(0, SRC_DIR)

from features import engineer_features, FeaturePipeline, FEATURE_COLUMNS

def test_engineer_features_creates_required_columns():
    df = pd.DataFrame([{
        "rain_1h_mm": 25.0,
        "rain_24h_mm": 110.0,
        "rain_3d_mm": 150.0,
        "temperature_c": 28.0,
        "humidity_pct": 85.0,
        "elevation_m": 4.5,
        "slope_deg": 1.2,
        "flow_accumulation": 1200.0,
        "distance_to_water_m": 400.0,
        "impervious_surface_pct": 80.0,
        "drainage_capacity_index": 0.35
    }])

    res = engineer_features(df)

    assert "runoff_index" in res.columns
    assert "topographic_wetness_proxy" in res.columns
    assert "depression_risk" in res.columns
    assert "antecedent_rain_ratio" in res.columns
    assert res["runoff_index"].iloc[0] > 0
    assert not np.isnan(res["topographic_wetness_proxy"].iloc[0])

def test_pipeline_single_request_validation():
    zones_json = os.path.join(BASE_DIR, "data", "raw", "chennai_zones.json")
    pipeline = FeaturePipeline(zones_meta_path=zones_json)

    valid_req = {
        "area_id": "CHN-001",
        "rain_1h_mm": 30.0,
        "rain_24h_mm": 120.0,
        "rain_3d_mm": 160.0
    }
    df_out = pipeline.transform_single_request(valid_req)
    assert df_out.shape == (1, len(FEATURE_COLUMNS))

    # Test invalid area_id rejection
    with pytest.raises(ValueError):
        pipeline.transform_single_request({"area_id": "INVALID-ZONE-999"})
