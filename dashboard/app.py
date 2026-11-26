"""
Streamlit Operational Dashboard for FloodGuard AI.
Compliant with Blueprint Sections 6, 7, and 12.
"""

import os
import sys
import json
import streamlit as st
import pandas as pd
import numpy as np

# Set page configuration
st.set_page_config(
    page_title="FloodGuard AI • Urban Flood Intelligence",
    page_icon="🌊",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Link project modules
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_DIR = os.path.join(BASE_DIR, "src")
if SRC_DIR not in sys.path:
    sys.path.insert(0, SRC_DIR)

from predict import FloodPredictor

@st.cache_resource
def load_predictor():
    return FloodPredictor()

predictor = load_predictor()

# Custom CSS
st.markdown("""
<style>
    .main-header { font-size: 2.2rem; font-weight: 800; color: #38bdf8; margin-bottom: 0px; }
    .sub-header { font-size: 0.95rem; color: #94a3b8; margin-bottom: 20px; }
    .metric-card { background: #0f172a; border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 15px; }
    .risk-high { color: #ef4444; font-weight: bold; }
    .risk-mod { color: #f59e0b; font-weight: bold; }
    .risk-low { color: #10b981; font-weight: bold; }
</style>
""", unsafe_allow_html=True)

st.markdown('<div class="main-header">FLOODGUARD AI</div>', unsafe_allow_html=True)
st.markdown('<div class="sub-header">Urban Flood-Risk Estimation and Explainable Machine Learning Prototype (Chennai Basin)</div>', unsafe_allow_html=True)

# Blueprint safety disclaimer
st.info("⚠️ **Safety Notice:** This is an educational AI prototype, not an official emergency warning service. Real-world safety decisions must follow official IMD and TN-SDMA disaster-management advisories.")

# Sidebar Simulation Controls
st.sidebar.header("🕹️ Simulation Parameters")

preset = st.sidebar.selectbox(
    "Precipitation Scenario Preset",
    ["Cyclone Michaung (Extreme 280mm)", "Northeast Monsoon (Heavy 95mm)", "Localized Shower (25mm)", "Custom Slider Input"]
)

if preset == "Cyclone Michaung (Extreme 280mm)":
    default_r24, default_r1h, default_r3d = 280.0, 65.0, 390.0
elif preset == "Northeast Monsoon (Heavy 95mm)":
    default_r24, default_r1h, default_r3d = 95.0, 28.0, 140.0
elif preset == "Localized Shower (25mm)":
    default_r24, default_r1h, default_r3d = 25.0, 12.0, 35.0
else:
    default_r24, default_r1h, default_r3d = 120.0, 35.0, 180.0

rain_24h = st.sidebar.slider("24-Hour Accumulated Rainfall (mm)", 0.0, 400.0, default_r24, 5.0)
rain_1h = st.sidebar.slider("Peak 1-Hour Cloudburst (mm)", 0.0, 120.0, default_r1h, 2.0)
rain_3d = st.sidebar.slider("3-Day Antecedent Total (mm)", float(rain_24h), 600.0, max(float(rain_24h)*1.2, default_r3d), 10.0)

temp_c = st.sidebar.slider("Ambient Temperature (°C)", 15.0, 45.0, 26.5, 0.5)
hum_pct = st.sidebar.slider("Relative Humidity (%)", 30.0, 100.0, 92.0, 1.0)

# Batch evaluate all zones
zones = predictor.pipeline.zones_metadata
zone_options = [f"{z['area_id']} - {z['name']}" for z in zones.values()]
selected_zone_str = st.sidebar.selectbox("Inspect Target Ward", zone_options)
selected_zone_id = selected_zone_str.split(" - ")[0]

# Compute predictions across all 12 zones
all_predictions = []
for zid in zones.keys():
    req = {
        "area_id": zid,
        "rain_1h_mm": rain_1h,
        "rain_24h_mm": rain_24h,
        "rain_3d_mm": rain_3d,
        "temperature_c": temp_c,
        "humidity_pct": hum_pct
    }
    all_predictions.append(predictor.predict(req))

df_preds = pd.DataFrame(all_predictions)

# Top KPI row
c1, c2, c3, c4 = st.columns(4)
high_count = (df_preds["risk_band"] == "HIGH").sum()
mod_count = (df_preds["risk_band"] == "MODERATE").sum()
low_count = (df_preds["risk_band"] == "LOW").sum()

with c1:
    st.metric("Total Monitored Wards", len(zones))
with c2:
    st.metric("🔴 High Inundation Risk", f"{high_count} Wards")
with c3:
    st.metric("🟡 Moderate Watch", f"{mod_count} Wards")
with c4:
    st.metric("🟢 Low / Normal Runoff", f"{low_count} Wards")

# Tabs for Blueprint screens
tab_map, tab_detail, tab_metrics, tab_card = st.tabs(["🗺️ Regional Risk Map", "🔍 Ward SHAP Deep Dive", "📊 Evaluation Metrics", "📄 Model Card"])

with tab_map:
    col_map, col_table = st.columns([3, 2])

    with col_map:
        # Prepare geospatial display points
        map_df = df_preds[["latitude", "longitude", "area_name", "risk_probability", "risk_band"]].copy()
        map_df["color"] = map_df["risk_band"].map({"HIGH": "#ef4444", "MODERATE": "#f59e0b", "LOW": "#10b981"})
        st.subheader("Chennai Basin Threat Map")
        st.map(map_df, latitude="latitude", longitude="longitude", size="risk_probability", color="color")

    with col_table:
        st.subheader("Ward Summary Table")
        st.dataframe(
            df_preds[["area_id", "area_name", "risk_probability", "risk_band", "severity_description"]],
            use_container_width=True,
            hide_index=True
        )

with tab_detail:
    current_pred = next(p for p in all_predictions if p["area_id"] == selected_zone_id)
    z_info = zones[selected_zone_id]

    col_h1, col_h2 = st.columns([2, 3])
    with col_h1:
        st.subheader(f"{current_pred['area_name']} ({current_pred['area_id']})")
        prob_val = current_pred['risk_probability']
        band_class = "risk-high" if current_pred['risk_band'] == "HIGH" else ("risk-mod" if current_pred['risk_band'] == "MODERATE" else "risk-low")
        st.markdown(f"### Probability: <span class='{band_class}'>{prob_val * 100:.1f}%</span>", unsafe_allow_html=True)
        st.markdown(f"**Classification:** <span class='{band_class}'>{current_pred['risk_band']} RISK</span>", unsafe_allow_html=True)
        st.write(current_pred["severity_description"])

        st.markdown("#### Physical Attributes")
        st.write(f"- **Elevation (MSL):** {z_info['elevation_m']} m")
        st.write(f"- **Distance to Waterbody:** {z_info['distance_to_water_m']} m")
        st.write(f"- **Impervious Concrete Surface:** {z_info['impervious_surface_pct']}%")
        st.write(f"- **Drainage Capacity Index:** {z_info['drainage_capacity_index']}")

    with col_h2:
        st.subheader("🧠 SHAP Feature Importance Breakdown")
        factors = current_pred.get("factor_contributions", [])
        if factors:
            f_df = pd.DataFrame(factors)
            st.bar_chart(f_df.set_index("label")["impact_score"])
            st.table(f_df[["label", "value", "impact_score"]])

with tab_metrics:
    metrics_path = os.path.join(BASE_DIR, "artifacts", "metrics_report.json")
    if os.path.exists(metrics_path):
        with open(metrics_path, "r") as f:
            metrics_data = json.load(f)
        st.subheader("Model Validation Report (Chronological Holdout Split)")
        st.json(metrics_data)

with tab_card:
    st.subheader("Model Card: FloodGuard-AI v0.1.0")
    st.markdown("""
    - **Intended Use:** Scenario planning, civil defense preparation, and hydrological flood vulnerability modeling.
    - **Primary Estimator:** XGBoost Classifier with 160 estimators and class weight penalization (22.3x).
    - **Baseline Comparisons:** Random Forest, Logistic Regression, Dummy Prevalence.
    - **Data Sources:** Chennai Metropolitan Area terrain elevation models, historical monsoon precipitation records, and validated SDMA flood event registers.
    - **Limitations:** Does not account for localized structural blockages or sudden pump failures in real-time. Follow official advisories.
    """)
