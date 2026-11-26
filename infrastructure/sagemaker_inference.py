"""
SageMaker Serverless Inference Script for FloodGuard AI.
Compliant with AWS SageMaker AI Python SDK endpoint specification.
"""

import os
import json
import joblib
import pandas as pd
import numpy as np

def model_fn(model_dir):
    """
    Loads XGBoost model artifact from SageMaker container directory.
    """
    model_path = os.path.join(model_dir, "model_xgboost.pkl")
    model = joblib.load(model_path)
    return model

def input_fn(request_body, request_content_type):
    """
    Deserializes incoming request JSON payload.
    """
    if request_content_type == "application/json":
        data = json.loads(request_body)
        return data
    else:
        raise ValueError(f"Unsupported content type: {request_content_type}")

def predict_fn(input_data, model):
    """
    Executes model inference on input features.
    """
    features = input_data.get("features", [])
    df = pd.DataFrame([features])
    probabilities = model.predict_proba(df)[:, 1]
    return float(probabilities[0])

def output_fn(prediction, accept):
    """
    Serializes model probability to JSON response.
    """
    if accept == "application/json":
        band = "HIGH" if prediction >= 0.65 else ("MODERATE" if prediction >= 0.25 else "LOW")
        return json.dumps({
            "risk_probability": round(prediction, 4),
            "risk_band": band,
            "status": "success"
        }), accept
    raise ValueError(f"Unsupported accept type: {accept}")
