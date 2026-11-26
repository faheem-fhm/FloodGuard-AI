"""
Unit tests for Machine Learning Inference and Threshold Calibration.
"""

import pytest
import os
import sys

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_DIR = os.path.join(BASE_DIR, "src")
if SRC_DIR not in sys.path:
    sys.path.insert(0, SRC_DIR)

from predict import FloodPredictor

@pytest.fixture
def predictor():
    return FloodPredictor()

def test_extreme_rain_produces_high_risk(predictor):
    # Extreme Cyclone event in low-lying Velachery
    req = {
        "area_id": "CHN-001",
        "rain_1h_mm": 70.0,
        "rain_24h_mm": 280.0,
        "rain_3d_mm": 400.0,
        "temperature_c": 25.0,
        "humidity_pct": 95.0
    }
    res = predictor.predict(req)
    assert res["risk_probability"] >= 0.65
    assert res["risk_band"] == "HIGH"
    assert "prediction_id" in res
    assert len(res["top_factors"]) > 0

def test_dry_weather_produces_low_risk(predictor):
    # Dry day in high ground Tambaram
    req = {
        "area_id": "CHN-005",
        "rain_1h_mm": 0.0,
        "rain_24h_mm": 0.0,
        "rain_3d_mm": 0.0,
        "temperature_c": 32.0,
        "humidity_pct": 60.0
    }
    res = predictor.predict(req)
    assert res["risk_probability"] < 0.25
    assert res["risk_band"] == "LOW"

def test_probability_bounded_zero_to_one(predictor):
    req = {
        "area_id": "CHN-003",
        "rain_1h_mm": 20.0,
        "rain_24h_mm": 60.0,
        "rain_3d_mm": 90.0
    }
    res = predictor.predict(req)
    assert 0.0 <= res["risk_probability"] <= 1.0
