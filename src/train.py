"""
Model Training Script for FloodGuard AI.
Trains Dummy, Logistic Regression, Random Forest, and XGBoost models.
Saves model artifacts, scalers, and metadata to artifacts/ directory.
"""

import os
import json
import joblib
import numpy as np
import pandas as pd
from sklearn.dummy import DummyClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from xgboost import XGBClassifier

from features import FeaturePipeline, FEATURE_COLUMNS

def train_and_export():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    data_csv = os.path.join(base_dir, "data", "raw", "weather_flood_chennai.csv")
    zones_json = os.path.join(base_dir, "data", "raw", "chennai_zones.json")
    artifacts_dir = os.path.join(base_dir, "artifacts")
    os.makedirs(artifacts_dir, exist_ok=True)

    print("--- 1. Initializing Feature Pipeline & Loading Data ---")
    pipeline = FeaturePipeline(zones_meta_path=zones_json)
    X_train, y_train, X_test, y_test = pipeline.prepare_training_data(data_csv)
    print(f"Train samples: {len(X_train)} (Positive: {y_train.sum()} / {y_train.mean()*100:.2f}%)")
    print(f"Test samples:  {len(X_test)} (Positive: {y_test.sum()} / {y_test.mean()*100:.2f}%)")

    # Fit Scaler (for linear models)
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)
    joblib.dump(scaler, os.path.join(artifacts_dir, "scaler.pkl"))

    # Calculate class imbalance ratio for XGBoost
    neg_count = (y_train == 0).sum()
    pos_count = (y_train == 1).sum()
    scale_pos_weight = float(neg_count / max(1, pos_count))
    print(f"Class imbalance ratio (neg/pos): {scale_pos_weight:.2f}")

    # 1. Dummy Baseline
    print("\n--- 2. Training Dummy Baseline ---")
    dummy = DummyClassifier(strategy="stratified", random_state=42)
    dummy.fit(X_train, y_train)

    # 2. Logistic Regression
    print("--- 3. Training Logistic Regression ---")
    lr = LogisticRegression(class_weight="balanced", max_iter=1000, random_state=42)
    lr.fit(X_train_scaled, y_train)

    # 3. Random Forest
    print("--- 4. Training Random Forest Baseline ---")
    rf = RandomForestClassifier(
        n_estimators=120,
        max_depth=9,
        class_weight="balanced",
        random_state=42,
        n_jobs=-1
    )
    rf.fit(X_train, y_train)
    joblib.dump(rf, os.path.join(artifacts_dir, "model_rf.pkl"))

    # 4. XGBoost Production Model
    print("--- 5. Training Advanced XGBoost Classifier ---")
    xgb = XGBClassifier(
        n_estimators=160,
        max_depth=5,
        learning_rate=0.06,
        subsample=0.85,
        colsample_bytree=0.85,
        scale_pos_weight=scale_pos_weight,
        eval_metric="logloss",
        random_state=42
    )
    xgb.fit(X_train, y_train)
    joblib.dump(xgb, os.path.join(artifacts_dir, "model_xgboost.pkl"))

    # Save feature names list
    with open(os.path.join(artifacts_dir, "feature_columns.json"), "w") as f:
        json.dump(FEATURE_COLUMNS, f, indent=2)

    # Save processed test splits for evaluation module
    test_eval_df = X_test.copy()
    test_eval_df["flood_label"] = y_test
    test_eval_df.to_csv(os.path.join(base_dir, "data", "processed", "test_holdout.csv"), index=False)

    print("Model artifacts successfully saved to artifacts/")

if __name__ == "__main__":
    train_and_export()
