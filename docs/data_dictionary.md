# FloodGuard AI • Data Dictionary

This document specifies the schema, data types, physical units, valid bounds, and handling rules for all features used in FloodGuard AI training and online inference.

| Field Name | Category | Type | Unit / Scale | Valid Range | Source / Origin | Description |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `area_id` | Metadata | String | Categorical | `CHN-001` - `CHN-012` | GCC / Administrative | Unique zone/ward code |
| `area_name` | Metadata | String | Text | N/A | GCC / Ward register | Common locality name (e.g., Velachery, Adyar) |
| `latitude` | Spatial | Float | Degrees | 12.85 to 13.25 | GPS / WGS84 | Zone centroid latitude |
| `longitude` | Spatial | Float | Degrees | 80.05 to 80.35 | GPS / WGS84 | Zone centroid longitude |
| `rain_1h_mm` | Weather | Float | Millimeters (mm) | 0.0 to 150.0 | IMD Doppler / AWS | Peak 1-hour cloudburst intensity |
| `rain_24h_mm` | Weather | Float | Millimeters (mm) | 0.0 to 500.0 | IMD Daily Obs / AWS | 24-hour accumulated precipitation |
| `rain_3d_mm` | Weather | Float | Millimeters (mm) | 0.0 to 1000.0 | IMD 72h rolling | 3-day antecedent total rainfall |
| `temperature_c`| Weather | Float | Celsius (°C) | 15.0 to 48.0 | IMD Surface Station | Ambient surface temperature |
| `humidity_pct` | Weather | Float | Percentage (%) | 20.0 to 100.0 | IMD Surface Station | Atmospheric relative humidity |
| `elevation_m` | Terrain | Float | Meters (MSL) | 1.0 to 80.0 | USGS SRTM / CartoDEM | Mean elevation above mean sea level |
| `slope_deg` | Terrain | Float | Degrees (°) | 0.2 to 25.0 | Computed from DEM | Topographic gradient inclination |
| `flow_accumulation`| Hydrology| Float | Cell count | 100 to 5000 | HydroSHEDS / GIS | Upstream catchment flow convergence |
| `distance_to_water_m`| Hydrology| Float | Meters (m) | 50.0 to 5000.0 | OpenStreetMap / PWD | Euclidean distance to river, canal, lake |
| `impervious_surface_pct`| Urban | Float | Percentage (%) | 40.0 to 98.0 | Sentinel-2 Land Cover | Concrete, asphalt, and built-up area % |
| `drainage_capacity_index`| Infra | Float | Index (0.0 to 1.0) | 0.1 to 0.95 | GCC Stormwater Audit | Relative drainage and pump efficiency |
| `flood_label` | Target | Integer | Binary (0 / 1) | 0 or 1 | TN-SDMA / Media Logs | 1 = Documented inundation; 0 = Normal |

## Leakage Prevention Rules
1. **Antecedent Exclusivity:** All meteorological features (`rain_1h`, `rain_24h`, `rain_3d`) are measured *prior* to or *at* the prediction window timestamp.
2. **Post-Event Quarantine:** Water rescue deployments, post-event pump logs, and damage assessments are strictly excluded from the feature store.
3. **Missing Value Protocol:** Missing weather readings are never silently imputed with zero. When sensor telemetry drops, regional spatial interpolation from adjacent observatories (Nungambakkam / Meenambakkam) is applied.
