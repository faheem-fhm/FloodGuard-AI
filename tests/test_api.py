"""
Unit tests for FastAPI Endpoints and Validation.
Tests endpoint logic, status codes, and error cases.
"""

import pytest
import os
import sys
from fastapi import HTTPException

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
API_DIR = os.path.join(BASE_DIR, "api")
SRC_DIR = os.path.join(BASE_DIR, "src")
if API_DIR not in sys.path:
    sys.path.insert(0, API_DIR)
if SRC_DIR not in sys.path:
    sys.path.insert(0, SRC_DIR)

from main import get_health, get_regions, predict, predict_batch
from schemas import PredictionRequest, BatchPredictionRequest

def test_health_check_endpoint():
    res = get_health()
    assert res["status"] == "healthy"
    assert "floodguard" in res["model_version"]

def test_get_regions_endpoint():
    regions = get_regions()
    assert len(regions) >= 12
    assert any(r["area_id"] == "CHN-001" for r in regions)

def test_valid_prediction_endpoint():
    req = PredictionRequest(
        area_id="CHN-001",
        rain_1h_mm=25.0,
        rain_24h_mm=110.0,
        rain_3d_mm=180.0,
        temperature_c=28.0,
        humidity_pct=85.0
    )
    res = predict(req)
    assert res["risk_probability"] > 0
    assert res["risk_band"] in ["LOW", "MODERATE", "HIGH"]
    assert res["area_id"] == "CHN-001"
    assert "notice" in res

def test_batch_prediction_endpoint():
    req = BatchPredictionRequest(
        rain_1h_mm=20.0,
        rain_24h_mm=90.0,
        rain_3d_mm=130.0,
        temperature_c=27.0,
        humidity_pct=88.0
    )
    batch_res = predict_batch(req)
    assert len(batch_res) >= 12
    assert all("risk_probability" in b for b in batch_res)

def test_invalid_area_raises_400():
    req = PredictionRequest(
        area_id="UNKNOWN_ZONE_XYZ",
        rain_1h_mm=10.0,
        rain_24h_mm=50.0,
        rain_3d_mm=80.0
    )
    with pytest.raises(HTTPException) as excinfo:
        predict(req)
    assert excinfo.value.status_code == 400
