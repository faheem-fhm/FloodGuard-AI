#  FloodGuard AI • Urban Flood Risk & Early Warning Intelligence

> **Production-grade Machine Learning system and modern interactive GIS intelligence platform for urban flood risk estimation, terrain hydrological modeling, and SHAP explainability.**

---

##  1. Overview & Problem Statement
Urban flooding in coastal river deltas and metropolitan centers (such as the Chennai Basin during the 2015 extreme monsoon and 2023 Cyclone Michaung) presents an escalating hazard due to extreme cloudburst precipitation, low topography, concrete impervious surfaces, and restricted drainage outfalls.

**FloodGuard AI** implements an end-to-end Machine Learning pipeline that ingests rainfall observations, Digital Elevation Models (DEM), hydrological flow accumulation, and urban drainage factors to:
1. Deterministically predict the probability of positive inundation per municipal ward.
2. Classify risk into operational bands (**LOW**, **MODERATE**, **HIGH**).
3. Provide auditable **SHAP factor attributions** detailing *why* an area is threatened.
4. Present an ultra-polished, human-crafted modern UI inspired by curated Mobbin design standards, featuring interactive GIS maps, dynamic rain sliders, live radar feeds, and emergency directives.

---

##  2. System Architecture

```
                  ┌──────────────────────────────────────────────┐
                  │          External Observations               │
                  │   (IMD Radar, AWS Stations, USGS SRTM DEM)   │
                  └──────────────────────┬───────────────────────┘
                                         │
                                         ▼
                  ┌──────────────────────────────────────────────┐
                  │        Offline ML Training Pipeline          │
                  │ (Chronological Split: 2021-2023 / 2024 Hold) │
                  │  Dummy -> Logistic -> Random Forest -> XGB   │
                  └──────────────────────┬───────────────────────┘
                                         │  Model Artifacts & SHAP
                                         ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                          Online Inference & Product Stack                       │
│                                                                                 │
│   ┌─────────────────────┐      REST API       ┌─────────────────────────────┐   │
│   │ Modern Mobbin UI /  │ ──────────────────> │  FastAPI Backend Service    │   │
│   │ Streamlit Dashboard │ <────────────────── │  (Validation + Feature Eng) │   │
│   └─────────────────────┘    POST /v1/predict └──────────────┬──────────────┘   │
│                                                              │                  │
│                                                              ▼                  │
│                                                   ┌─────────────────────────┐   │
│                                                   │ XGBoost Engine + SHAP   │   │
│                                                   │ (Audit in DynamoDB Log) │   │
│                                                   └─────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

##  3. Key Features

- **Interactive Leaflet GIS Command Center:** Full-screen CartoDB DarkMatter map with 12 Chennai wards (Velachery, Adyar, T. Nagar, Madipakkam, Tambaram, etc.), pulsating risk hotspots, and relief shelter toggles.
- **Real-Time Hydrological Simulation Studio:** Live sliders for 24h accumulated rainfall (0–400mm), 1h cloudbursts, and 3-day history with instantaneous risk updates.
- **SHAP Explainability Drawer:** Clear factor contribution bars explaining whether risk is driven by rain intensity, low elevation, or blocked drainage outfalls.
- **Doppler Radar Feed & Water Reservoir Telemetry:** Simulated live readings from Chembarambakkam reservoir, Adyar river discharge, and Meenambakkam radar.
- **Civil Defense & SOS Directives:** Emergency call direct dialers (TN-SDMA 1070, GCC 1913, Fire 101) and designated high-ground relief centers.
- **Dual Dashboard Support:** Includes both the ultra-modern Mobbin-style responsive web application and the Streamlit data science console.
- **AWS Serverless Cloud-Ready:** Infrastructure-as-code (CloudFormation), Lambda inference wrapper, and DynamoDB audit schemas.

---

##  4. Machine Learning Evaluation (Holdout Split)

Evaluated on an untouched chronological holdout of **3,360 ward-day observations** across the Chennai metropolitan area:

| Metric | Random Forest Baseline | XGBoost Production Model |
| :--- | :--- | :--- |
| **PR-AUC (Precision-Recall)** | 0.9714 | **0.9730** |
| **ROC-AUC Score** | 0.9993 | **0.9994** |
| **Recall / Sensitivity** | 84.6% | **90.8% (Minimizes Missed Inundations)** |
| **Precision** | 96.5% | **90.8%** |
| **F1-Score** | 0.9016 | **0.9077** |
| **Brier Calibration Score** | 0.0029 | **0.0036** |
| **Operating Threshold** | 0.80 | **0.75** |

---

##  5. Quickstart & Local Execution

### 1. Installation
```bash
git clone https://github.com/your-username/FloodGuard-AI.git
cd FloodGuard-AI
pip install -r requirements.txt
```

### 2. Generate Data & Train Models
```bash
# 1. Generate realistic multi-year hydrological dataset for Chennai
python data/generate_data.py

# 2. Train baseline models & production XGBoost model
python src/train.py

# 3. Evaluate models and compute SHAP explanations
python src/evaluate.py
```

### 3. Run the Modern Web Dashboard & API (Pattern A)
```bash
python -m uvicorn api.main:app --host 127.0.0.1 --port 8000 --reload
```
Open your browser and navigate to:
👉 **`http://127.0.0.1:8000/`** — **Modern Mobbin-Style Web App**  
👉 **`http://127.0.0.1:8000/docs`** — Interactive Swagger API documentation

### 4. Run the Streamlit Dashboard (Alternative)
```bash
streamlit run dashboard/app.py
```

---

##  6. API Specification (Blueprint Section 8)

### `POST /v1/predict`
**Request Payload:**
```json
{
  "area_id": "CHN-001",
  "timestamp": "2026-11-26T12:00:00Z",
  "rain_1h_mm": 45.0,
  "rain_24h_mm": 180.0,
  "rain_3d_mm": 240.0,
  "temperature_c": 26.5,
  "humidity_pct": 92.0
}
```

**Response Payload:**
```json
{
  "prediction_id": "FG-20261126-7A9B",
  "area_id": "CHN-001",
  "area_name": "Velachery",
  "risk_probability": 0.9992,
  "risk_percentage": 99.9,
  "risk_band": "HIGH",
  "severity_description": "Severe flood threat - inundation probable",
  "badge_color": "#ef4444",
  "model_version": "floodguard-0.1.0",
  "data_timestamp": "2026-11-26T12:00:00Z",
  "top_factors": [
    "rain_24h_mm",
    "runoff_index",
    "elevation_m",
    "flow_accumulation"
  ],
  "notice": "Educational prototype estimate; not an official emergency warning."
}
```

---

##  7. Automated Testing
Run the comprehensive unit test suite:
```bash
python -m pytest tests -v
```
All 10 unit tests verify feature transformation, leakage quarantine, risk score bounds, and API schema validations.

---

##  8. AWS Cloud Architecture (Pattern B)
- **Infrastructure as Code:** `infrastructure/cloudformation_template.yaml`
- **Serverless Compute:** `infrastructure/lambda_handler.py`
- **SageMaker Inference Container:** `infrastructure/sagemaker_inference.py`
- **Audit Persistence:** `infrastructure/dynamodb_schema.json`

---

##  9. Limitations & Responsible Use Disclaimer
**Safety Note:** FloodGuard AI is an educational prototype and decision-support demonstration tool. Predictions are mathematical estimates grounded in Digital Elevation Models (DEM) and meteorological observations. They cannot account for sudden debris jams or localized pump outages. **Real-world life safety directives, warnings, and evacuations must strictly adhere to official advisories issued by the India Meteorological Department (IMD) and Tamil Nadu State Disaster Management Authority (TN-SDMA).**
