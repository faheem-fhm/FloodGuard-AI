"""
Pydantic Schemas for FloodGuard AI API.
Implements strict validation matching Section 8 of the blueprint.
"""

from pydantic import BaseModel, Field, field_validator
from typing import List, Dict, Any, Optional
from datetime import datetime

class PredictionRequest(BaseModel):
    area_id: str = Field(..., description="Administrative zone or ward identifier (e.g., 'CHN-001')")
    timestamp: Optional[str] = Field(None, description="ISO8601 UTC timestamp of prediction window")
    rain_1h_mm: float = Field(..., ge=0.0, le=500.0, description="Peak 1-hour rainfall observation/forecast in mm")
    rain_24h_mm: float = Field(..., ge=0.0, le=1000.0, description="24-hour accumulated rainfall in mm")
    rain_3d_mm: float = Field(..., ge=0.0, le=2500.0, description="3-day antecedent rainfall total in mm")
    temperature_c: float = Field(default=28.0, ge=-10.0, le=60.0, description="Ambient temperature in Celsius")
    humidity_pct: float = Field(default=80.0, ge=0.0, le=100.0, description="Relative humidity percentage")

    @field_validator("rain_3d_mm")
    @classmethod
    def validate_rainfall_consistency(cls, v, info):
        # 3d rainfall cannot be less than 24h rainfall
        rain_24h = info.data.get("rain_24h_mm")
        if rain_24h is not None and v < rain_24h:
            return rain_24h
        return v

class BatchPredictionRequest(BaseModel):
    timestamp: Optional[str] = None
    rain_1h_mm: float = Field(..., ge=0.0, le=500.0)
    rain_24h_mm: float = Field(..., ge=0.0, le=1000.0)
    rain_3d_mm: float = Field(..., ge=0.0, le=2500.0)
    temperature_c: float = 28.0
    humidity_pct: float = 80.0
    area_ids: Optional[List[str]] = None

class FactorContribution(BaseModel):
    feature: str
    label: str
    value: float
    impact_score: float

class PredictionResponse(BaseModel):
    prediction_id: str
    area_id: str
    area_name: str
    latitude: Optional[float]
    longitude: Optional[float]
    risk_probability: float
    risk_percentage: float
    risk_band: str
    severity_description: str
    badge_color: str
    model_version: str
    data_timestamp: Optional[str] = None
    top_factors: List[str]
    factor_contributions: List[FactorContribution]
    features_snapshot: Dict[str, Any]
    notice: str

class ZoneInfo(BaseModel):
    area_id: str
    name: str
    latitude: float
    longitude: float
    elevation_m: float
    slope_deg: float
    flow_accumulation: float
    distance_to_water_m: float
    impervious_surface_pct: float
    drainage_capacity_index: float
    base_flood_vulnerability: float

class HealthResponse(BaseModel):
    status: str
    service: str
    model_version: str
    timestamp: str
