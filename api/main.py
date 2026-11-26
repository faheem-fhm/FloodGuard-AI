"""
FastAPI Main Application for FloodGuard AI.
Implements Section 8 endpoints, CORS, static file mounting, and health checks.
"""

import os
from datetime import datetime, timezone
from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from typing import List, Dict, Any, Optional

from schemas import (
    PredictionRequest,
    BatchPredictionRequest,
    PredictionResponse,
    HealthResponse,
    ZoneInfo
)
from service import FloodService

app = FastAPI(
    title="FloodGuard AI API",
    description="Deterministic Urban Flood Risk Estimation and Explainable AI Service",
    version="0.1.0"
)

# Enable CORS for browser clients
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

service = FloodService()

# 1. Health check
@app.get("/health", response_model=HealthResponse, tags=["System"])
def get_health():
    return {
        "status": "healthy",
        "service": "FloodGuard-AI Inference Engine",
        "model_version": "floodguard-0.1.0",
        "timestamp": datetime.now(timezone.utc).isoformat()
    }

# 2. Predict endpoint per blueprint spec (Section 8: POST /v1/predict)
@app.post("/v1/predict", response_model=PredictionResponse, tags=["Inference"])
def predict(request: PredictionRequest):
    try:
        payload = request.model_dump()
        result = service.predict_single(payload)
        return result
    except ValueError as ve:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(ve)
        )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Inference error: {str(e)}"
        )

# 3. Batch prediction endpoint (for instant map simulation)
@app.post("/v1/predict/batch", response_model=List[PredictionResponse], tags=["Inference"])
def predict_batch(request: BatchPredictionRequest):
    try:
        payload = request.model_dump()
        return service.predict_batch_all(payload)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Batch inference error: {str(e)}"
        )

# 4. Regional metadata & Tamil Nadu Districts
@app.get("/v1/districts", tags=["Metadata"])
def get_districts():
    return service.get_districts()

@app.get("/v1/regions", tags=["Metadata"])
def get_regions(district_id: Optional[str] = None):
    return service.get_zones(district_id=district_id)

# 5. Prediction history (audit log)
@app.get("/v1/history", tags=["Audit & History"])
def get_prediction_history(limit: int = 30):
    return service.get_history(limit=limit)

# 6. Model card & explainability metadata
@app.get("/v1/model-info", tags=["Explainability"])
def get_model_info():
    return service.get_model_info()

# 7. Simulated live weather & Doppler radar feed
@app.get("/v1/weather/live", tags=["Real-time Feeds"])
def get_live_weather():
    return service.get_simulated_live_weather()

# Static UI files mounting
STATIC_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "static")
if os.path.exists(STATIC_DIR):
    app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")

    @app.get("/style.css", include_in_schema=False)
    def serve_css():
        css_file = os.path.join(STATIC_DIR, "style.css")
        return FileResponse(css_file, media_type="text/css")

    @app.get("/app.js", include_in_schema=False)
    def serve_js():
        js_file = os.path.join(STATIC_DIR, "app.js")
        return FileResponse(js_file, media_type="application/javascript")

    @app.get("/", include_in_schema=False)
    def serve_index():
        index_file = os.path.join(STATIC_DIR, "index.html")
        if os.path.exists(index_file):
            return FileResponse(index_file)
        return {"message": "FloodGuard AI API is active. UI index.html not yet built."}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
