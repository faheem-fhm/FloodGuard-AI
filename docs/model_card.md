# Model Card: FloodGuard AI Urban Flood Estimator

## 1. Model Details
- **Model Name:** FloodGuard-AI Inundation Probability Classifier
- **Model Version:** `floodguard-0.1.0`
- **Model Architecture:** Gradient Boosted Decision Trees (XGBoost 3.4.1)
- **Frameworks:** Python 3.12, scikit-learn 1.6.1, XGBoost 3.4.1, SHAP 0.52.0
- **Developers:** DeepMind Assistant & FloodGuard Research Team
- **Release Date:** November 2026

## 2. Intended Use
- **Primary Use Case:** Estimating probabilistic urban flood risk and surface waterlogging across bounded municipal zones (Chennai Metropolitan Area) during heavy monsoon and cyclonic depressions.
- **Intended Users:** Municipal emergency response coordinators, disaster management analysts, urban planning officers, and research personnel.
- **Out-of-Scope Uses:** Autonomous evacuation routing without emergency personnel authorization, dam water release decision-making, or real-time life-safety triage.

## 3. Training & Validation Strategy
- **Chronological Holdout Split:**
  - Training Period: 2021-01-01 to 2023-09-30 (13,440 ward-day observations)
  - Validation / Test Period: 2023-10-01 to 2024-11-01 (3,360 untouched holdout observations)
- **Class Imbalance Handling:**
  - Positive flood prevalence: ~3.8% across historical records.
  - Penalization factor: `scale_pos_weight = 22.33` inside training folds to penalize false negatives severely.

## 4. Performance Metrics (Holdout Evaluation)
| Metric | Baseline Random Forest | Production XGBoost | Target Threshold |
| :--- | :--- | :--- | :--- |
| **PR-AUC (Precision-Recall)** | 0.9714 | **0.9730** | > 0.85 |
| **ROC-AUC** | 0.9993 | **0.9994** | > 0.90 |
| **Recall (Sensitivity)** | 0.8462 | **0.9077** | > 0.85 (minimize missed floods) |
| **Precision** | 0.9649 | **0.9077** | > 0.80 |
| **F1-Score** | 0.9016 | **0.9077** | > 0.85 |
| **Brier Score (Calibration)** | 0.0029 | **0.0036** | < 0.05 |
| **Operating Threshold** | 0.80 | **0.75** | Selected via Validation Curve |

### Holdout Confusion Matrix (3,360 cases)
- **True Positives (TP):** 59 flood events detected correctly.
- **True Negatives (TN):** 3,289 safe days correctly cleared.
- **False Positives (FP):** 6 precautionary false alarms.
- **False Negatives (FN):** Only 6 missed edge cases.

## 5. Explainability (SHAP Rankings)
1. `rain_24h_mm` (Accumulated 24-hour precipitation) - ~48% relative importance
2. `runoff_index` (Impervious surface * rain / drainage capacity) - ~26% relative importance
3. `elevation_m` (Digital Elevation Model height above MSL) - ~12% relative importance
4. `flow_accumulation` (Upstream catchment basin drainage convergence) - ~8% relative importance
5. `distance_to_water_m` (Proximity to Adyar, Cooum, or canals) - ~6% relative importance

## 6. Responsible Use & Limitations
> **Educational Prototype Notice:** This system is an engineering and AI prototype. Predictions depend on spatial resolution, digital elevation models, and weather station coverage. Real-world civil protection directives must follow official bulletins issued by the India Meteorological Department (IMD) and Tamil Nadu State Disaster Management Authority (TN-SDMA).
