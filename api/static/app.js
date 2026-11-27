/**
 * FLOODGUARD AI - All-India & Tamil Nadu Urban Flood Intelligence Platform
 * Supports:
 * - 🇮🇳 Overall India National Monitoring Grid
 * - 🌟 Tamil Nadu (All 38 Districts, 113 Places)
 * - Major States: Kerala, Karnataka, Maharashtra, Delhi NCR, West Bengal, Assam, Telangana, Andhra, Odisha, Gujarat, UP, Bihar, Uttarakhand/HP, J&K.
 * - Interactive Leaflet GIS, SHAP Explainability, Real-time Cloudburst Simulation.
 * - Full inspector panel toggle (click 'x' or delete to close completely and expand map).
 */

const INDIA_DATA = [
  {
    "district_id": "TN-CHN",
    "district_name": "Chennai",
    "region_type": "Coastal Metropolitan",
    "center_lat": 13.04,
    "center_lng": 80.22,
    "zoom": 12,
    "areas": [
      {
        "area_id": "CHN-001",
        "name": "Velachery",
        "latitude": 12.9756,
        "longitude": 80.2206,
        "elevation_m": 4.2,
        "slope_deg": 0.8,
        "flow_acc": 1420.0,
        "distance_to_water_m": 350.0,
        "impervious_surface_pct": 78.5,
        "drainage_capacity_index": 0.35,
        "water_body": "Pallikaranai Marsh & Velachery Lake",
        "base_flood_vulnerability": 0.88,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-CHN",
        "district_name": "Chennai"
      },
      {
        "area_id": "CHN-002",
        "name": "Madipakkam",
        "latitude": 12.9623,
        "longitude": 80.1986,
        "elevation_m": 5.1,
        "slope_deg": 0.9,
        "flow_acc": 1280.0,
        "distance_to_water_m": 420.0,
        "impervious_surface_pct": 82.0,
        "drainage_capacity_index": 0.3,
        "water_body": "Madipakkam Lake",
        "base_flood_vulnerability": 0.85,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-CHN",
        "district_name": "Chennai"
      },
      {
        "area_id": "CHN-003",
        "name": "T. Nagar",
        "latitude": 13.0418,
        "longitude": 80.2341,
        "elevation_m": 8.5,
        "slope_deg": 1.2,
        "flow_acc": 950.0,
        "distance_to_water_m": 1200.0,
        "impervious_surface_pct": 92.0,
        "drainage_capacity_index": 0.45,
        "water_body": "Mambalam Canal Outfall",
        "base_flood_vulnerability": 0.7,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-CHN",
        "district_name": "Chennai"
      },
      {
        "area_id": "CHN-004",
        "name": "Adyar",
        "latitude": 13.0012,
        "longitude": 80.2565,
        "elevation_m": 5.8,
        "slope_deg": 1.1,
        "flow_acc": 1850.0,
        "distance_to_water_m": 180.0,
        "impervious_surface_pct": 74.0,
        "drainage_capacity_index": 0.65,
        "water_body": "Adyar River Estuary",
        "base_flood_vulnerability": 0.75,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-CHN",
        "district_name": "Chennai"
      },
      {
        "area_id": "CHN-005",
        "name": "Tambaram",
        "latitude": 12.9249,
        "longitude": 80.1,
        "elevation_m": 22.0,
        "slope_deg": 3.4,
        "flow_acc": 620.0,
        "distance_to_water_m": 1500.0,
        "impervious_surface_pct": 65.0,
        "drainage_capacity_index": 0.55,
        "water_body": "Selaiyur Lake",
        "base_flood_vulnerability": 0.35,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-CHN",
        "district_name": "Chennai"
      },
      {
        "area_id": "CHN-006",
        "name": "Mylapore",
        "latitude": 13.0368,
        "longitude": 80.2676,
        "elevation_m": 7.4,
        "slope_deg": 1.3,
        "flow_acc": 710.0,
        "distance_to_water_m": 800.0,
        "impervious_surface_pct": 88.0,
        "drainage_capacity_index": 0.5,
        "water_body": "Buckingham Canal Cut",
        "base_flood_vulnerability": 0.48,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-CHN",
        "district_name": "Chennai"
      },
      {
        "area_id": "CHN-007",
        "name": "Saidapet",
        "latitude": 13.0213,
        "longitude": 80.2231,
        "elevation_m": 6.0,
        "slope_deg": 1.0,
        "flow_acc": 1650.0,
        "distance_to_water_m": 220.0,
        "impervious_surface_pct": 84.0,
        "drainage_capacity_index": 0.4,
        "water_body": "Adyar River Causeway",
        "base_flood_vulnerability": 0.82,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-CHN",
        "district_name": "Chennai"
      },
      {
        "area_id": "CHN-008",
        "name": "Sholinganallur",
        "latitude": 12.901,
        "longitude": 80.2279,
        "elevation_m": 4.8,
        "slope_deg": 0.7,
        "flow_acc": 1350.0,
        "distance_to_water_m": 450.0,
        "impervious_surface_pct": 76.0,
        "drainage_capacity_index": 0.48,
        "water_body": "Buckingham Canal & Okkiyam",
        "base_flood_vulnerability": 0.72,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-CHN",
        "district_name": "Chennai"
      },
      {
        "area_id": "CHN-009",
        "name": "Perambur",
        "latitude": 13.1075,
        "longitude": 80.2337,
        "elevation_m": 6.8,
        "slope_deg": 0.9,
        "flow_acc": 1100.0,
        "distance_to_water_m": 650.0,
        "impervious_surface_pct": 86.0,
        "drainage_capacity_index": 0.38,
        "water_body": "Otteri Nullah Catchment",
        "base_flood_vulnerability": 0.78,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-CHN",
        "district_name": "Chennai"
      },
      {
        "area_id": "CHN-010",
        "name": "Anna Nagar",
        "latitude": 13.085,
        "longitude": 80.2101,
        "elevation_m": 12.5,
        "slope_deg": 2.1,
        "flow_acc": 510.0,
        "distance_to_water_m": 1800.0,
        "impervious_surface_pct": 80.0,
        "drainage_capacity_index": 0.72,
        "water_body": "Cooum River Diversion",
        "base_flood_vulnerability": 0.28,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-CHN",
        "district_name": "Chennai"
      },
      {
        "area_id": "CHN-011",
        "name": "Ambattur",
        "latitude": 13.1143,
        "longitude": 80.1548,
        "elevation_m": 14.0,
        "slope_deg": 1.8,
        "flow_acc": 780.0,
        "distance_to_water_m": 900.0,
        "impervious_surface_pct": 75.0,
        "drainage_capacity_index": 0.52,
        "water_body": "Ambattur Lake",
        "base_flood_vulnerability": 0.42,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-CHN",
        "district_name": "Chennai"
      },
      {
        "area_id": "CHN-012",
        "name": "Kolathur",
        "latitude": 13.1242,
        "longitude": 80.2155,
        "elevation_m": 7.0,
        "slope_deg": 0.8,
        "flow_acc": 1240.0,
        "distance_to_water_m": 500.0,
        "impervious_surface_pct": 85.0,
        "drainage_capacity_index": 0.36,
        "water_body": "Retteri Lake & Thanikachalam Drain",
        "base_flood_vulnerability": 0.79,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-CHN",
        "district_name": "Chennai"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-CUD",
    "district_name": "Cuddalore",
    "region_type": "Coastal River Basin",
    "center_lat": 11.748,
    "center_lng": 79.7714,
    "zoom": 11,
    "areas": [
      {
        "area_id": "CUD-001",
        "name": "Cuddalore Port",
        "latitude": 11.712,
        "longitude": 79.775,
        "elevation_m": 3.2,
        "slope_deg": 0.5,
        "flow_acc": 1950.0,
        "distance_to_water_m": 120.0,
        "impervious_surface_pct": 68.0,
        "drainage_capacity_index": 0.32,
        "water_body": "Uppanar River & Bay of Bengal",
        "base_flood_vulnerability": 0.92,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-CUD",
        "district_name": "Cuddalore"
      },
      {
        "area_id": "CUD-002",
        "name": "Chidambaram",
        "latitude": 11.3992,
        "longitude": 79.6936,
        "elevation_m": 5.4,
        "slope_deg": 0.6,
        "flow_acc": 1820.0,
        "distance_to_water_m": 280.0,
        "impervious_surface_pct": 62.0,
        "drainage_capacity_index": 0.38,
        "water_body": "Coleroon River & Khan Sahib Canal",
        "base_flood_vulnerability": 0.88,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-CUD",
        "district_name": "Cuddalore"
      },
      {
        "area_id": "CUD-003",
        "name": "Panruti",
        "latitude": 11.77,
        "longitude": 79.55,
        "elevation_m": 32.0,
        "slope_deg": 2.2,
        "flow_acc": 850.0,
        "distance_to_water_m": 950.0,
        "impervious_surface_pct": 52.0,
        "drainage_capacity_index": 0.55,
        "water_body": "Gadilam River Upper Bank",
        "base_flood_vulnerability": 0.45,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-CUD",
        "district_name": "Cuddalore"
      },
      {
        "area_id": "CUD-004",
        "name": "Kurinjipadi",
        "latitude": 11.5667,
        "longitude": 79.6,
        "elevation_m": 8.1,
        "slope_deg": 0.9,
        "flow_acc": 1420.0,
        "distance_to_water_m": 390.0,
        "impervious_surface_pct": 58.0,
        "drainage_capacity_index": 0.35,
        "water_body": "Perumal Lake Catchment",
        "base_flood_vulnerability": 0.81,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-CUD",
        "district_name": "Cuddalore"
      },
      {
        "area_id": "CUD-005",
        "name": "Bhuvanagiri",
        "latitude": 11.4667,
        "longitude": 79.65,
        "elevation_m": 6.2,
        "slope_deg": 0.7,
        "flow_acc": 1780.0,
        "distance_to_water_m": 210.0,
        "impervious_surface_pct": 60.0,
        "drainage_capacity_index": 0.34,
        "water_body": "Vellar River Basin",
        "base_flood_vulnerability": 0.86,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-CUD",
        "district_name": "Cuddalore"
      },
      {
        "area_id": "CUD-006",
        "name": "Kattumannarkoil",
        "latitude": 11.274,
        "longitude": 79.555,
        "elevation_m": 7.5,
        "slope_deg": 0.8,
        "flow_acc": 1690.0,
        "distance_to_water_m": 320.0,
        "impervious_surface_pct": 55.0,
        "drainage_capacity_index": 0.36,
        "water_body": "Veeranam Lake Tail-End",
        "base_flood_vulnerability": 0.84,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-CUD",
        "district_name": "Cuddalore"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-TLR",
    "district_name": "Tiruvallur",
    "region_type": "Basin & Reservoir",
    "center_lat": 13.1437,
    "center_lng": 79.9079,
    "zoom": 11,
    "areas": [
      {
        "area_id": "TLR-001",
        "name": "Avadi",
        "latitude": 13.1147,
        "longitude": 80.1008,
        "elevation_m": 16.0,
        "slope_deg": 1.4,
        "flow_acc": 920.0,
        "distance_to_water_m": 600.0,
        "impervious_surface_pct": 74.0,
        "drainage_capacity_index": 0.48,
        "water_body": "Paruthipattu Lake",
        "base_flood_vulnerability": 0.58,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-TLR",
        "district_name": "Tiruvallur"
      },
      {
        "area_id": "TLR-002",
        "name": "Poonamallee",
        "latitude": 13.0489,
        "longitude": 80.0967,
        "elevation_m": 18.2,
        "slope_deg": 1.6,
        "flow_acc": 880.0,
        "distance_to_water_m": 750.0,
        "impervious_surface_pct": 76.0,
        "drainage_capacity_index": 0.5,
        "water_body": "Chembarambakkam Catchment",
        "base_flood_vulnerability": 0.54,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-TLR",
        "district_name": "Tiruvallur"
      },
      {
        "area_id": "TLR-003",
        "name": "Ponneri",
        "latitude": 13.3242,
        "longitude": 80.1983,
        "elevation_m": 7.8,
        "slope_deg": 0.7,
        "flow_acc": 1620.0,
        "distance_to_water_m": 290.0,
        "impervious_surface_pct": 62.0,
        "drainage_capacity_index": 0.38,
        "water_body": "Araniyar River Outfall",
        "base_flood_vulnerability": 0.83,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-TLR",
        "district_name": "Tiruvallur"
      },
      {
        "area_id": "TLR-004",
        "name": "Gummidipoondi",
        "latitude": 13.4067,
        "longitude": 80.1283,
        "elevation_m": 12.0,
        "slope_deg": 1.1,
        "flow_acc": 1150.0,
        "distance_to_water_m": 580.0,
        "impervious_surface_pct": 65.0,
        "drainage_capacity_index": 0.42,
        "water_body": "Pulicat Lake Catchment",
        "base_flood_vulnerability": 0.71,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-TLR",
        "district_name": "Tiruvallur"
      },
      {
        "area_id": "TLR-005",
        "name": "Tiruttani",
        "latitude": 13.18,
        "longitude": 79.63,
        "elevation_m": 76.0,
        "slope_deg": 4.8,
        "flow_acc": 420.0,
        "distance_to_water_m": 1800.0,
        "impervious_surface_pct": 45.0,
        "drainage_capacity_index": 0.65,
        "water_body": "Nandi River Tributary",
        "base_flood_vulnerability": 0.22,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-TLR",
        "district_name": "Tiruvallur"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-CGL",
    "district_name": "Chengalpattu",
    "region_type": "Coastal & Lake Belt",
    "center_lat": 12.6841,
    "center_lng": 79.9836,
    "zoom": 11,
    "areas": [
      {
        "area_id": "CGL-001",
        "name": "Pallavaram",
        "latitude": 12.9675,
        "longitude": 80.1491,
        "elevation_m": 15.0,
        "slope_deg": 1.5,
        "flow_acc": 980.0,
        "distance_to_water_m": 520.0,
        "impervious_surface_pct": 82.0,
        "drainage_capacity_index": 0.42,
        "water_body": "Pallavaram Periya Eri",
        "base_flood_vulnerability": 0.68,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-CGL",
        "district_name": "Chengalpattu"
      },
      {
        "area_id": "CGL-002",
        "name": "Vandalur",
        "latitude": 12.8914,
        "longitude": 80.0811,
        "elevation_m": 28.0,
        "slope_deg": 2.8,
        "flow_acc": 640.0,
        "distance_to_water_m": 880.0,
        "impervious_surface_pct": 58.0,
        "drainage_capacity_index": 0.58,
        "water_body": "Otteri Lake Vandalur",
        "base_flood_vulnerability": 0.38,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-CGL",
        "district_name": "Chengalpattu"
      },
      {
        "area_id": "CGL-003",
        "name": "Chengalpattu Town",
        "latitude": 12.6841,
        "longitude": 79.9836,
        "elevation_m": 36.0,
        "slope_deg": 2.1,
        "flow_acc": 790.0,
        "distance_to_water_m": 620.0,
        "impervious_surface_pct": 64.0,
        "drainage_capacity_index": 0.52,
        "water_body": "Kolavai Lake",
        "base_flood_vulnerability": 0.46,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-CGL",
        "district_name": "Chengalpattu"
      },
      {
        "area_id": "CGL-004",
        "name": "Maduranthakam",
        "latitude": 12.51,
        "longitude": 79.88,
        "elevation_m": 18.0,
        "slope_deg": 1.2,
        "flow_acc": 1450.0,
        "distance_to_water_m": 250.0,
        "impervious_surface_pct": 50.0,
        "drainage_capacity_index": 0.38,
        "water_body": "Maduranthakam Lake Surplus",
        "base_flood_vulnerability": 0.79,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-CGL",
        "district_name": "Chengalpattu"
      },
      {
        "area_id": "CGL-005",
        "name": "Thiruporur",
        "latitude": 12.72,
        "longitude": 80.19,
        "elevation_m": 9.2,
        "slope_deg": 0.9,
        "flow_acc": 1320.0,
        "distance_to_water_m": 410.0,
        "impervious_surface_pct": 68.0,
        "drainage_capacity_index": 0.44,
        "water_body": "Buckingham Canal Southern Stretch",
        "base_flood_vulnerability": 0.74,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-CGL",
        "district_name": "Chengalpattu"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-KNC",
    "district_name": "Kanchipuram",
    "region_type": "River Catchment",
    "center_lat": 12.8342,
    "center_lng": 79.7036,
    "zoom": 11,
    "areas": [
      {
        "area_id": "KNC-001",
        "name": "Kanchipuram City",
        "latitude": 12.8342,
        "longitude": 79.7036,
        "elevation_m": 82.0,
        "slope_deg": 1.6,
        "flow_acc": 980.0,
        "distance_to_water_m": 480.0,
        "impervious_surface_pct": 72.0,
        "drainage_capacity_index": 0.5,
        "water_body": "Vegavathi River",
        "base_flood_vulnerability": 0.52,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-KNC",
        "district_name": "Kanchipuram"
      },
      {
        "area_id": "KNC-002",
        "name": "Sriperumbudur",
        "latitude": 12.9667,
        "longitude": 79.95,
        "elevation_m": 37.0,
        "slope_deg": 1.8,
        "flow_acc": 850.0,
        "distance_to_water_m": 720.0,
        "impervious_surface_pct": 75.0,
        "drainage_capacity_index": 0.54,
        "water_body": "Sriperumbudur Lake",
        "base_flood_vulnerability": 0.44,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-KNC",
        "district_name": "Kanchipuram"
      },
      {
        "area_id": "KNC-003",
        "name": "Kundrathur",
        "latitude": 12.9972,
        "longitude": 80.0967,
        "elevation_m": 12.5,
        "slope_deg": 1.1,
        "flow_acc": 1520.0,
        "distance_to_water_m": 310.0,
        "impervious_surface_pct": 78.0,
        "drainage_capacity_index": 0.36,
        "water_body": "Chembarambakkam Adyar Canal",
        "base_flood_vulnerability": 0.84,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-KNC",
        "district_name": "Kanchipuram"
      },
      {
        "area_id": "KNC-004",
        "name": "Walajabad",
        "latitude": 12.8,
        "longitude": 79.82,
        "elevation_m": 58.0,
        "slope_deg": 1.4,
        "flow_acc": 1100.0,
        "distance_to_water_m": 420.0,
        "impervious_surface_pct": 52.0,
        "drainage_capacity_index": 0.48,
        "water_body": "Palar River North Bank",
        "base_flood_vulnerability": 0.62,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-KNC",
        "district_name": "Kanchipuram"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-NGP",
    "district_name": "Nagapattinam",
    "region_type": "Cauvery Delta Coast",
    "center_lat": 10.7672,
    "center_lng": 79.8424,
    "zoom": 11,
    "areas": [
      {
        "area_id": "NGP-001",
        "name": "Nagapattinam Port",
        "latitude": 10.7672,
        "longitude": 79.8424,
        "elevation_m": 2.8,
        "slope_deg": 0.4,
        "flow_acc": 2100.0,
        "distance_to_water_m": 90.0,
        "impervious_surface_pct": 65.0,
        "drainage_capacity_index": 0.3,
        "water_body": "Kaduvaiyaru River & Sea",
        "base_flood_vulnerability": 0.94,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-NGP",
        "district_name": "Nagapattinam"
      },
      {
        "area_id": "NGP-002",
        "name": "Velankanni",
        "latitude": 10.68,
        "longitude": 79.85,
        "elevation_m": 3.1,
        "slope_deg": 0.5,
        "flow_acc": 1890.0,
        "distance_to_water_m": 140.0,
        "impervious_surface_pct": 68.0,
        "drainage_capacity_index": 0.32,
        "water_body": "Vellayar River Outfall",
        "base_flood_vulnerability": 0.91,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-NGP",
        "district_name": "Nagapattinam"
      },
      {
        "area_id": "NGP-003",
        "name": "Vedaranyam",
        "latitude": 10.37,
        "longitude": 79.85,
        "elevation_m": 1.9,
        "slope_deg": 0.3,
        "flow_acc": 2200.0,
        "distance_to_water_m": 80.0,
        "impervious_surface_pct": 48.0,
        "drainage_capacity_index": 0.28,
        "water_body": "Muthupet Lagoon & Salt Swamps",
        "base_flood_vulnerability": 0.96,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-NGP",
        "district_name": "Nagapattinam"
      },
      {
        "area_id": "NGP-004",
        "name": "Kilvelur",
        "latitude": 10.71,
        "longitude": 79.75,
        "elevation_m": 6.0,
        "slope_deg": 0.6,
        "flow_acc": 1650.0,
        "distance_to_water_m": 340.0,
        "impervious_surface_pct": 52.0,
        "drainage_capacity_index": 0.36,
        "water_body": "Harischandra River Canal",
        "base_flood_vulnerability": 0.82,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-NGP",
        "district_name": "Nagapattinam"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-MYL",
    "district_name": "Mayiladuthurai",
    "region_type": "Cauvery Delta Estuary",
    "center_lat": 11.1075,
    "center_lng": 79.6522,
    "zoom": 11,
    "areas": [
      {
        "area_id": "MYL-001",
        "name": "Mayiladuthurai Town",
        "latitude": 11.1075,
        "longitude": 79.6522,
        "elevation_m": 18.0,
        "slope_deg": 0.9,
        "flow_acc": 1450.0,
        "distance_to_water_m": 220.0,
        "impervious_surface_pct": 68.0,
        "drainage_capacity_index": 0.42,
        "water_body": "Cauvery River Channel",
        "base_flood_vulnerability": 0.76,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-MYL",
        "district_name": "Mayiladuthurai"
      },
      {
        "area_id": "MYL-002",
        "name": "Sirkazhi",
        "latitude": 11.2367,
        "longitude": 79.7367,
        "elevation_m": 6.5,
        "slope_deg": 0.6,
        "flow_acc": 1850.0,
        "distance_to_water_m": 280.0,
        "impervious_surface_pct": 60.0,
        "drainage_capacity_index": 0.34,
        "water_body": "Kollidam River Tail-End",
        "base_flood_vulnerability": 0.89,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-MYL",
        "district_name": "Mayiladuthurai"
      },
      {
        "area_id": "MYL-003",
        "name": "Tharangambadi",
        "latitude": 11.0289,
        "longitude": 79.8517,
        "elevation_m": 2.5,
        "slope_deg": 0.4,
        "flow_acc": 1950.0,
        "distance_to_water_m": 110.0,
        "impervious_surface_pct": 55.0,
        "drainage_capacity_index": 0.31,
        "water_body": "Uppanar River Mouth",
        "base_flood_vulnerability": 0.93,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-MYL",
        "district_name": "Mayiladuthurai"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-TVR",
    "district_name": "Tiruvarur",
    "region_type": "Delta Irrigation Network",
    "center_lat": 10.77,
    "center_lng": 79.63,
    "zoom": 11,
    "areas": [
      {
        "area_id": "TVR-001",
        "name": "Tiruvarur Town",
        "latitude": 10.77,
        "longitude": 79.63,
        "elevation_m": 14.0,
        "slope_deg": 0.8,
        "flow_acc": 1540.0,
        "distance_to_water_m": 210.0,
        "impervious_surface_pct": 65.0,
        "drainage_capacity_index": 0.38,
        "water_body": "Odambokki River",
        "base_flood_vulnerability": 0.79,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-TVR",
        "district_name": "Tiruvarur"
      },
      {
        "area_id": "TVR-002",
        "name": "Mannargudi",
        "latitude": 10.6667,
        "longitude": 79.45,
        "elevation_m": 19.5,
        "slope_deg": 1.0,
        "flow_acc": 1280.0,
        "distance_to_water_m": 350.0,
        "impervious_surface_pct": 62.0,
        "drainage_capacity_index": 0.44,
        "water_body": "Pamaniyar River",
        "base_flood_vulnerability": 0.69,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-TVR",
        "district_name": "Tiruvarur"
      },
      {
        "area_id": "TVR-003",
        "name": "Thiruthuraipoondi",
        "latitude": 10.53,
        "longitude": 79.65,
        "elevation_m": 4.8,
        "slope_deg": 0.5,
        "flow_acc": 1920.0,
        "distance_to_water_m": 180.0,
        "impervious_surface_pct": 58.0,
        "drainage_capacity_index": 0.31,
        "water_body": "Mulliyar & Koraiyar",
        "base_flood_vulnerability": 0.9,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-TVR",
        "district_name": "Tiruvarur"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-TNJ",
    "district_name": "Thanjavur",
    "region_type": "Cauvery Delta Hub",
    "center_lat": 10.787,
    "center_lng": 79.1378,
    "zoom": 11,
    "areas": [
      {
        "area_id": "TNJ-001",
        "name": "Thanjavur City",
        "latitude": 10.787,
        "longitude": 79.1378,
        "elevation_m": 57.0,
        "slope_deg": 1.5,
        "flow_acc": 890.0,
        "distance_to_water_m": 540.0,
        "impervious_surface_pct": 74.0,
        "drainage_capacity_index": 0.52,
        "water_body": "Grand Anicut Canal",
        "base_flood_vulnerability": 0.48,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-TNJ",
        "district_name": "Thanjavur"
      },
      {
        "area_id": "TNJ-002",
        "name": "Kumbakonam",
        "latitude": 10.9602,
        "longitude": 79.3845,
        "elevation_m": 26.0,
        "slope_deg": 1.1,
        "flow_acc": 1390.0,
        "distance_to_water_m": 290.0,
        "impervious_surface_pct": 76.0,
        "drainage_capacity_index": 0.42,
        "water_body": "Cauvery & Arasalar",
        "base_flood_vulnerability": 0.74,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-TNJ",
        "district_name": "Thanjavur"
      },
      {
        "area_id": "TNJ-003",
        "name": "Thiruvaiyaru",
        "latitude": 10.88,
        "longitude": 79.1,
        "elevation_m": 42.0,
        "slope_deg": 1.3,
        "flow_acc": 1580.0,
        "distance_to_water_m": 190.0,
        "impervious_surface_pct": 55.0,
        "drainage_capacity_index": 0.46,
        "water_body": "Kollidam & Cauvery Confluence",
        "base_flood_vulnerability": 0.78,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-TNJ",
        "district_name": "Thanjavur"
      },
      {
        "area_id": "TNJ-004",
        "name": "Pattukkottai",
        "latitude": 10.42,
        "longitude": 79.32,
        "elevation_m": 22.0,
        "slope_deg": 0.9,
        "flow_acc": 1210.0,
        "distance_to_water_m": 460.0,
        "impervious_surface_pct": 58.0,
        "drainage_capacity_index": 0.45,
        "water_body": "Nasuvini River",
        "base_flood_vulnerability": 0.65,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-TNJ",
        "district_name": "Thanjavur"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-MDU",
    "district_name": "Madurai",
    "region_type": "River Valley",
    "center_lat": 9.9252,
    "center_lng": 78.1198,
    "zoom": 11,
    "areas": [
      {
        "area_id": "MDU-001",
        "name": "Madurai City Centre",
        "latitude": 9.9252,
        "longitude": 78.1198,
        "elevation_m": 136.0,
        "slope_deg": 2.1,
        "flow_acc": 1420.0,
        "distance_to_water_m": 310.0,
        "impervious_surface_pct": 84.0,
        "drainage_capacity_index": 0.46,
        "water_body": "Vaigai River Channel",
        "base_flood_vulnerability": 0.62,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-MDU",
        "district_name": "Madurai"
      },
      {
        "area_id": "MDU-002",
        "name": "Sellur",
        "latitude": 9.94,
        "longitude": 78.125,
        "elevation_m": 132.0,
        "slope_deg": 1.4,
        "flow_acc": 1680.0,
        "distance_to_water_m": 180.0,
        "impervious_surface_pct": 82.0,
        "drainage_capacity_index": 0.36,
        "water_body": "Sellur Kanmoi & Vaigai North",
        "base_flood_vulnerability": 0.84,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-MDU",
        "district_name": "Madurai"
      },
      {
        "area_id": "MDU-003",
        "name": "Thirumangalam",
        "latitude": 9.8242,
        "longitude": 77.9892,
        "elevation_m": 122.0,
        "slope_deg": 1.7,
        "flow_acc": 850.0,
        "distance_to_water_m": 680.0,
        "impervious_surface_pct": 60.0,
        "drainage_capacity_index": 0.5,
        "water_body": "Gundar River Tributary",
        "base_flood_vulnerability": 0.47,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-MDU",
        "district_name": "Madurai"
      },
      {
        "area_id": "MDU-004",
        "name": "Melur",
        "latitude": 10.03,
        "longitude": 78.33,
        "elevation_m": 145.0,
        "slope_deg": 2.4,
        "flow_acc": 740.0,
        "distance_to_water_m": 820.0,
        "impervious_surface_pct": 52.0,
        "drainage_capacity_index": 0.55,
        "water_body": "Periyar Main Canal",
        "base_flood_vulnerability": 0.39,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-MDU",
        "district_name": "Madurai"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-TNV",
    "district_name": "Tirunelveli",
    "region_type": "River Basin & Extreme Monsoon",
    "center_lat": 8.7139,
    "center_lng": 77.7567,
    "zoom": 11,
    "areas": [
      {
        "area_id": "TNV-001",
        "name": "Tirunelveli Town",
        "latitude": 8.7139,
        "longitude": 77.7567,
        "elevation_m": 47.0,
        "slope_deg": 1.8,
        "flow_acc": 2100.0,
        "distance_to_water_m": 190.0,
        "impervious_surface_pct": 76.0,
        "drainage_capacity_index": 0.4,
        "water_body": "Thamirabarani River",
        "base_flood_vulnerability": 0.88,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-TNV",
        "district_name": "Tirunelveli"
      },
      {
        "area_id": "TNV-002",
        "name": "Palayamkottai",
        "latitude": 8.717,
        "longitude": 77.74,
        "elevation_m": 49.0,
        "slope_deg": 1.6,
        "flow_acc": 1780.0,
        "distance_to_water_m": 340.0,
        "impervious_surface_pct": 74.0,
        "drainage_capacity_index": 0.44,
        "water_body": "Thamirabarani South Canal",
        "base_flood_vulnerability": 0.81,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-TNV",
        "district_name": "Tirunelveli"
      },
      {
        "area_id": "TNV-003",
        "name": "Ambasamudram",
        "latitude": 8.7,
        "longitude": 77.45,
        "elevation_m": 82.0,
        "slope_deg": 3.2,
        "flow_acc": 1950.0,
        "distance_to_water_m": 220.0,
        "impervious_surface_pct": 54.0,
        "drainage_capacity_index": 0.52,
        "water_body": "Manimuthar & Thamirabarani",
        "base_flood_vulnerability": 0.72,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-TNV",
        "district_name": "Tirunelveli"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-TUT",
    "district_name": "Thoothukudi",
    "region_type": "Coastal River Outfall",
    "center_lat": 8.7642,
    "center_lng": 78.1348,
    "zoom": 11,
    "areas": [
      {
        "area_id": "TUT-001",
        "name": "Thoothukudi Port City",
        "latitude": 8.7642,
        "longitude": 78.1348,
        "elevation_m": 4.5,
        "slope_deg": 0.6,
        "flow_acc": 1820.0,
        "distance_to_water_m": 150.0,
        "impervious_surface_pct": 78.0,
        "drainage_capacity_index": 0.32,
        "water_body": "Buckle Canal & Gulf of Mannar",
        "base_flood_vulnerability": 0.93,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-TUT",
        "district_name": "Thoothukudi"
      },
      {
        "area_id": "TUT-002",
        "name": "Srivaikuntam",
        "latitude": 8.6236,
        "longitude": 77.9258,
        "elevation_m": 18.0,
        "slope_deg": 0.9,
        "flow_acc": 2400.0,
        "distance_to_water_m": 110.0,
        "impervious_surface_pct": 58.0,
        "drainage_capacity_index": 0.3,
        "water_body": "Srivaikuntam Dam & Thamirabarani",
        "base_flood_vulnerability": 0.96,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-TUT",
        "district_name": "Thoothukudi"
      },
      {
        "area_id": "TUT-003",
        "name": "Tiruchendur",
        "latitude": 8.49,
        "longitude": 78.12,
        "elevation_m": 9.2,
        "slope_deg": 1.1,
        "flow_acc": 1250.0,
        "distance_to_water_m": 320.0,
        "impervious_surface_pct": 62.0,
        "drainage_capacity_index": 0.42,
        "water_body": "Gulf of Mannar Coast",
        "base_flood_vulnerability": 0.76,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-TUT",
        "district_name": "Thoothukudi"
      },
      {
        "area_id": "TUT-004",
        "name": "Kovilpatti",
        "latitude": 9.17,
        "longitude": 77.87,
        "elevation_m": 106.0,
        "slope_deg": 2.0,
        "flow_acc": 720.0,
        "distance_to_water_m": 950.0,
        "impervious_surface_pct": 64.0,
        "drainage_capacity_index": 0.52,
        "water_body": "Kovilpatti Lake",
        "base_flood_vulnerability": 0.41,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-TUT",
        "district_name": "Thoothukudi"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-KKI",
    "district_name": "Kanniyakumari",
    "region_type": "Coastal & Highland Monsoon",
    "center_lat": 8.0883,
    "center_lng": 77.5385,
    "zoom": 11,
    "areas": [
      {
        "area_id": "KKI-001",
        "name": "Nagercoil City",
        "latitude": 8.1833,
        "longitude": 77.4119,
        "elevation_m": 38.0,
        "slope_deg": 2.4,
        "flow_acc": 1450.0,
        "distance_to_water_m": 380.0,
        "impervious_surface_pct": 74.0,
        "drainage_capacity_index": 0.48,
        "water_body": "Pazhayar River Channel",
        "base_flood_vulnerability": 0.72,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-KKI",
        "district_name": "Kanniyakumari"
      },
      {
        "area_id": "KKI-002",
        "name": "Kuzhithurai",
        "latitude": 8.32,
        "longitude": 77.19,
        "elevation_m": 22.0,
        "slope_deg": 2.1,
        "flow_acc": 1950.0,
        "distance_to_water_m": 160.0,
        "impervious_surface_pct": 60.0,
        "drainage_capacity_index": 0.38,
        "water_body": "Kodayar & Pechiparai Surplus",
        "base_flood_vulnerability": 0.89,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-KKI",
        "district_name": "Kanniyakumari"
      },
      {
        "area_id": "KKI-003",
        "name": "Colachel",
        "latitude": 8.1764,
        "longitude": 77.2583,
        "elevation_m": 6.0,
        "slope_deg": 1.2,
        "flow_acc": 1620.0,
        "distance_to_water_m": 120.0,
        "impervious_surface_pct": 68.0,
        "drainage_capacity_index": 0.35,
        "water_body": "Arabian Sea Outfall",
        "base_flood_vulnerability": 0.87,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-KKI",
        "district_name": "Kanniyakumari"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-CBE",
    "district_name": "Coimbatore",
    "region_type": "Plateau & Western Ghats",
    "center_lat": 11.0168,
    "center_lng": 76.9558,
    "zoom": 11,
    "areas": [
      {
        "area_id": "CBE-001",
        "name": "Coimbatore City",
        "latitude": 11.0168,
        "longitude": 76.9558,
        "elevation_m": 411.0,
        "slope_deg": 2.8,
        "flow_acc": 1100.0,
        "distance_to_water_m": 480.0,
        "impervious_surface_pct": 82.0,
        "drainage_capacity_index": 0.54,
        "water_body": "Noyyal River & Valankulam Lake",
        "base_flood_vulnerability": 0.55,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-CBE",
        "district_name": "Coimbatore"
      },
      {
        "area_id": "CBE-002",
        "name": "Singanallur",
        "latitude": 10.9983,
        "longitude": 77.0267,
        "elevation_m": 398.0,
        "slope_deg": 1.9,
        "flow_acc": 1320.0,
        "distance_to_water_m": 260.0,
        "impervious_surface_pct": 80.0,
        "drainage_capacity_index": 0.44,
        "water_body": "Singanallur Lake",
        "base_flood_vulnerability": 0.72,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-CBE",
        "district_name": "Coimbatore"
      },
      {
        "area_id": "CBE-003",
        "name": "Mettupalayam",
        "latitude": 11.3,
        "longitude": 76.95,
        "elevation_m": 314.0,
        "slope_deg": 3.8,
        "flow_acc": 2200.0,
        "distance_to_water_m": 180.0,
        "impervious_surface_pct": 58.0,
        "drainage_capacity_index": 0.48,
        "water_body": "Bhavani River Foothills",
        "base_flood_vulnerability": 0.81,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-CBE",
        "district_name": "Coimbatore"
      },
      {
        "area_id": "CBE-004",
        "name": "Pollachi",
        "latitude": 10.66,
        "longitude": 77.01,
        "elevation_m": 293.0,
        "slope_deg": 2.5,
        "flow_acc": 880.0,
        "distance_to_water_m": 720.0,
        "impervious_surface_pct": 62.0,
        "drainage_capacity_index": 0.58,
        "water_body": "Aliyar Basin Tributary",
        "base_flood_vulnerability": 0.42,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-CBE",
        "district_name": "Coimbatore"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-NIL",
    "district_name": "Nilgiris",
    "region_type": "Mountain Slope",
    "center_lat": 11.4102,
    "center_lng": 76.695,
    "zoom": 11,
    "areas": [
      {
        "area_id": "NIL-001",
        "name": "Udhagamandalam (Ooty)",
        "latitude": 11.4102,
        "longitude": 76.695,
        "elevation_m": 2240.0,
        "slope_deg": 14.5,
        "flow_acc": 650.0,
        "distance_to_water_m": 320.0,
        "impervious_surface_pct": 52.0,
        "drainage_capacity_index": 0.5,
        "water_body": "Ooty Lake & Racecourse Nullah",
        "base_flood_vulnerability": 0.65,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-NIL",
        "district_name": "Nilgiris"
      },
      {
        "area_id": "NIL-002",
        "name": "Coonoor",
        "latitude": 11.353,
        "longitude": 76.7959,
        "elevation_m": 1850.0,
        "slope_deg": 18.2,
        "flow_acc": 890.0,
        "distance_to_water_m": 240.0,
        "impervious_surface_pct": 48.0,
        "drainage_capacity_index": 0.46,
        "water_body": "Coonoor River Gorge",
        "base_flood_vulnerability": 0.74,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-NIL",
        "district_name": "Nilgiris"
      },
      {
        "area_id": "NIL-003",
        "name": "Gudalur",
        "latitude": 11.5,
        "longitude": 76.5,
        "elevation_m": 1180.0,
        "slope_deg": 12.0,
        "flow_acc": 1250.0,
        "distance_to_water_m": 290.0,
        "impervious_surface_pct": 42.0,
        "drainage_capacity_index": 0.42,
        "water_body": "Pandarapuzha River",
        "base_flood_vulnerability": 0.79,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-NIL",
        "district_name": "Nilgiris"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-TRY",
    "district_name": "Tiruchirappalli",
    "region_type": "Cauvery Bifurcation",
    "center_lat": 10.7905,
    "center_lng": 78.7047,
    "zoom": 11,
    "areas": [
      {
        "area_id": "TRY-001",
        "name": "Trichy City Centre",
        "latitude": 10.7905,
        "longitude": 78.7047,
        "elevation_m": 88.0,
        "slope_deg": 1.4,
        "flow_acc": 1100.0,
        "distance_to_water_m": 420.0,
        "impervious_surface_pct": 82.0,
        "drainage_capacity_index": 0.48,
        "water_body": "Uyyakondan Canal",
        "base_flood_vulnerability": 0.58,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-TRY",
        "district_name": "Tiruchirappalli"
      },
      {
        "area_id": "TRY-002",
        "name": "Srirangam Island",
        "latitude": 10.8622,
        "longitude": 78.6922,
        "elevation_m": 79.0,
        "slope_deg": 0.8,
        "flow_acc": 2200.0,
        "distance_to_water_m": 140.0,
        "impervious_surface_pct": 70.0,
        "drainage_capacity_index": 0.38,
        "water_body": "Cauvery & Kollidam River Bifurcation",
        "base_flood_vulnerability": 0.89,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-TRY",
        "district_name": "Tiruchirappalli"
      },
      {
        "area_id": "TRY-003",
        "name": "Lalgudi",
        "latitude": 10.8667,
        "longitude": 78.8167,
        "elevation_m": 68.0,
        "slope_deg": 0.9,
        "flow_acc": 1750.0,
        "distance_to_water_m": 280.0,
        "impervious_surface_pct": 55.0,
        "drainage_capacity_index": 0.42,
        "water_body": "Kollidam North Bank",
        "base_flood_vulnerability": 0.82,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-TRY",
        "district_name": "Tiruchirappalli"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-SLM",
    "district_name": "Salem",
    "region_type": "Inland Basin",
    "center_lat": 11.6643,
    "center_lng": 78.146,
    "zoom": 11,
    "areas": [
      {
        "area_id": "SLM-001",
        "name": "Salem City",
        "latitude": 11.6643,
        "longitude": 78.146,
        "elevation_m": 278.0,
        "slope_deg": 2.2,
        "flow_acc": 980.0,
        "distance_to_water_m": 380.0,
        "impervious_surface_pct": 80.0,
        "drainage_capacity_index": 0.5,
        "water_body": "Thirumanimutharu River",
        "base_flood_vulnerability": 0.6,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-SLM",
        "district_name": "Salem"
      },
      {
        "area_id": "SLM-002",
        "name": "Mettur Dam Town",
        "latitude": 11.79,
        "longitude": 77.8,
        "elevation_m": 230.0,
        "slope_deg": 3.4,
        "flow_acc": 2600.0,
        "distance_to_water_m": 120.0,
        "impervious_surface_pct": 58.0,
        "drainage_capacity_index": 0.6,
        "water_body": "Mettur Reservoir Stanley Surplus",
        "base_flood_vulnerability": 0.78,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-SLM",
        "district_name": "Salem"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-ERD",
    "district_name": "Erode",
    "region_type": "Bhavani River Basin",
    "center_lat": 11.341,
    "center_lng": 77.7172,
    "zoom": 11,
    "areas": [
      {
        "area_id": "ERD-001",
        "name": "Erode City",
        "latitude": 11.341,
        "longitude": 77.7172,
        "elevation_m": 183.0,
        "slope_deg": 1.8,
        "flow_acc": 1820.0,
        "distance_to_water_m": 240.0,
        "impervious_surface_pct": 78.0,
        "drainage_capacity_index": 0.52,
        "water_body": "Cauvery & Perumpallam Odai",
        "base_flood_vulnerability": 0.66,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-ERD",
        "district_name": "Erode"
      },
      {
        "area_id": "ERD-002",
        "name": "Bhavani Town",
        "latitude": 11.45,
        "longitude": 77.68,
        "elevation_m": 172.0,
        "slope_deg": 1.4,
        "flow_acc": 2100.0,
        "distance_to_water_m": 150.0,
        "impervious_surface_pct": 68.0,
        "drainage_capacity_index": 0.45,
        "water_body": "Bhavani & Cauvery Confluence (Kooduthurai)",
        "base_flood_vulnerability": 0.85,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-ERD",
        "district_name": "Erode"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-TPR",
    "district_name": "Tiruppur",
    "region_type": "Industrial Catchment",
    "center_lat": 11.1085,
    "center_lng": 77.3411,
    "zoom": 11,
    "areas": [
      {
        "area_id": "TPR-001",
        "name": "Tiruppur Town",
        "latitude": 11.1085,
        "longitude": 77.3411,
        "elevation_m": 295.0,
        "slope_deg": 1.8,
        "flow_acc": 1280.0,
        "distance_to_water_m": 280.0,
        "impervious_surface_pct": 84.0,
        "drainage_capacity_index": 0.44,
        "water_body": "Noyyal River Urban Stretch",
        "base_flood_vulnerability": 0.7,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-TPR",
        "district_name": "Tiruppur"
      },
      {
        "area_id": "TPR-002",
        "name": "Dharapuram",
        "latitude": 10.73,
        "longitude": 77.52,
        "elevation_m": 245.0,
        "slope_deg": 1.5,
        "flow_acc": 1450.0,
        "distance_to_water_m": 320.0,
        "impervious_surface_pct": 58.0,
        "drainage_capacity_index": 0.5,
        "water_body": "Amaravathi River",
        "base_flood_vulnerability": 0.62,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-TPR",
        "district_name": "Tiruppur"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-VEL",
    "district_name": "Vellore",
    "region_type": "Palar River Basin",
    "center_lat": 12.9165,
    "center_lng": 79.1325,
    "zoom": 11,
    "areas": [
      {
        "area_id": "VEL-001",
        "name": "Vellore Fort City",
        "latitude": 12.9165,
        "longitude": 79.1325,
        "elevation_m": 216.0,
        "slope_deg": 2.2,
        "flow_acc": 1350.0,
        "distance_to_water_m": 290.0,
        "impervious_surface_pct": 78.0,
        "drainage_capacity_index": 0.46,
        "water_body": "Palar River & Otteri Lake",
        "base_flood_vulnerability": 0.64,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-VEL",
        "district_name": "Vellore"
      },
      {
        "area_id": "VEL-002",
        "name": "Katpadi",
        "latitude": 12.98,
        "longitude": 79.13,
        "elevation_m": 224.0,
        "slope_deg": 2.0,
        "flow_acc": 980.0,
        "distance_to_water_m": 580.0,
        "impervious_surface_pct": 72.0,
        "drainage_capacity_index": 0.52,
        "water_body": "Katpadi Lake Catchment",
        "base_flood_vulnerability": 0.48,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-VEL",
        "district_name": "Vellore"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-RPT",
    "district_name": "Ranipet",
    "region_type": "Palar Floodplain",
    "center_lat": 12.9272,
    "center_lng": 79.3331,
    "zoom": 11,
    "areas": [
      {
        "area_id": "RPT-001",
        "name": "Ranipet Town",
        "latitude": 12.9272,
        "longitude": 79.3331,
        "elevation_m": 160.0,
        "slope_deg": 1.5,
        "flow_acc": 1420.0,
        "distance_to_water_m": 280.0,
        "impervious_surface_pct": 74.0,
        "drainage_capacity_index": 0.48,
        "water_body": "Palar River Causeway",
        "base_flood_vulnerability": 0.66,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-RPT",
        "district_name": "Ranipet"
      },
      {
        "area_id": "RPT-002",
        "name": "Arakkonam",
        "latitude": 13.08,
        "longitude": 79.67,
        "elevation_m": 85.0,
        "slope_deg": 1.2,
        "flow_acc": 1150.0,
        "distance_to_water_m": 450.0,
        "impervious_surface_pct": 70.0,
        "drainage_capacity_index": 0.46,
        "water_body": "Kosasthalaiyar River Branch",
        "base_flood_vulnerability": 0.58,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-RPT",
        "district_name": "Ranipet"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-VLP",
    "district_name": "Viluppuram",
    "region_type": "Ponnaiyar Floodplain",
    "center_lat": 11.9401,
    "center_lng": 79.4861,
    "zoom": 11,
    "areas": [
      {
        "area_id": "VLP-001",
        "name": "Viluppuram City",
        "latitude": 11.9401,
        "longitude": 79.4861,
        "elevation_m": 42.0,
        "slope_deg": 1.2,
        "flow_acc": 1380.0,
        "distance_to_water_m": 350.0,
        "impervious_surface_pct": 68.0,
        "drainage_capacity_index": 0.46,
        "water_body": "Thenpennai (Ponnaiyar) River",
        "base_flood_vulnerability": 0.72,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-VLP",
        "district_name": "Viluppuram"
      },
      {
        "area_id": "VLP-002",
        "name": "Tindivanam",
        "latitude": 12.23,
        "longitude": 79.65,
        "elevation_m": 58.0,
        "slope_deg": 1.4,
        "flow_acc": 980.0,
        "distance_to_water_m": 620.0,
        "impervious_surface_pct": 62.0,
        "drainage_capacity_index": 0.5,
        "water_body": "Tindivanam Periya Eri",
        "base_flood_vulnerability": 0.54,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-VLP",
        "district_name": "Viluppuram"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-DGL",
    "district_name": "Dindigul",
    "region_type": "Valley Catchment",
    "center_lat": 10.3673,
    "center_lng": 77.9803,
    "zoom": 11,
    "areas": [
      {
        "area_id": "DGL-001",
        "name": "Dindigul Town",
        "latitude": 10.3673,
        "longitude": 77.9803,
        "elevation_m": 268.0,
        "slope_deg": 2.4,
        "flow_acc": 850.0,
        "distance_to_water_m": 720.0,
        "impervious_surface_pct": 72.0,
        "drainage_capacity_index": 0.52,
        "water_body": "Kudaganaru River",
        "base_flood_vulnerability": 0.44,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-DGL",
        "district_name": "Dindigul"
      },
      {
        "area_id": "DGL-002",
        "name": "Palani",
        "latitude": 10.45,
        "longitude": 77.52,
        "elevation_m": 310.0,
        "slope_deg": 3.1,
        "flow_acc": 1120.0,
        "distance_to_water_m": 420.0,
        "impervious_surface_pct": 64.0,
        "drainage_capacity_index": 0.48,
        "water_body": "Shanmuganadhi River",
        "base_flood_vulnerability": 0.56,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-DGL",
        "district_name": "Dindigul"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-THN",
    "district_name": "Theni",
    "region_type": "Vaigai Upper Basin",
    "center_lat": 10.0104,
    "center_lng": 77.4768,
    "zoom": 11,
    "areas": [
      {
        "area_id": "THN-001",
        "name": "Theni Allinagaram",
        "latitude": 10.0104,
        "longitude": 77.4768,
        "elevation_m": 298.0,
        "slope_deg": 2.8,
        "flow_acc": 1250.0,
        "distance_to_water_m": 320.0,
        "impervious_surface_pct": 68.0,
        "drainage_capacity_index": 0.48,
        "water_body": "Mullaperiyar & Vaigai",
        "base_flood_vulnerability": 0.62,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-THN",
        "district_name": "Theni"
      },
      {
        "area_id": "THN-002",
        "name": "Bodinayakanur",
        "latitude": 10.01,
        "longitude": 77.35,
        "elevation_m": 353.0,
        "slope_deg": 4.5,
        "flow_acc": 1420.0,
        "distance_to_water_m": 260.0,
        "impervious_surface_pct": 58.0,
        "drainage_capacity_index": 0.46,
        "water_body": "Kotagudi River Torrent",
        "base_flood_vulnerability": 0.68,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-THN",
        "district_name": "Theni"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-RMD",
    "district_name": "Ramanathapuram",
    "region_type": "Coastal Lagoon & Tail End",
    "center_lat": 9.3639,
    "center_lng": 78.8395,
    "zoom": 11,
    "areas": [
      {
        "area_id": "RMD-001",
        "name": "Ramanathapuram Town",
        "latitude": 9.3639,
        "longitude": 78.8395,
        "elevation_m": 10.0,
        "slope_deg": 0.6,
        "flow_acc": 1720.0,
        "distance_to_water_m": 380.0,
        "impervious_surface_pct": 60.0,
        "drainage_capacity_index": 0.36,
        "water_body": "Vaigai Delta Outfall & Big Tank",
        "base_flood_vulnerability": 0.82,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-RMD",
        "district_name": "Ramanathapuram"
      },
      {
        "area_id": "RMD-002",
        "name": "Rameswaram Island",
        "latitude": 9.2876,
        "longitude": 79.3129,
        "elevation_m": 5.2,
        "slope_deg": 0.5,
        "flow_acc": 1480.0,
        "distance_to_water_m": 120.0,
        "impervious_surface_pct": 52.0,
        "drainage_capacity_index": 0.38,
        "water_body": "Palk Strait & Gulf of Mannar",
        "base_flood_vulnerability": 0.86,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-RMD",
        "district_name": "Ramanathapuram"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-SVG",
    "district_name": "Sivaganga",
    "region_type": "Vaigai-Manimuthar Basin",
    "center_lat": 9.8433,
    "center_lng": 78.4809,
    "zoom": 11,
    "areas": [
      {
        "area_id": "SVG-001",
        "name": "Sivaganga Town",
        "latitude": 9.8433,
        "longitude": 78.4809,
        "elevation_m": 102.0,
        "slope_deg": 1.4,
        "flow_acc": 890.0,
        "distance_to_water_m": 620.0,
        "impervious_surface_pct": 62.0,
        "drainage_capacity_index": 0.48,
        "water_body": "Sasivarna Theertham Tank",
        "base_flood_vulnerability": 0.48,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-SVG",
        "district_name": "Sivaganga"
      },
      {
        "area_id": "SVG-002",
        "name": "Karaikudi",
        "latitude": 10.07,
        "longitude": 78.78,
        "elevation_m": 82.0,
        "slope_deg": 1.2,
        "flow_acc": 950.0,
        "distance_to_water_m": 540.0,
        "impervious_surface_pct": 70.0,
        "drainage_capacity_index": 0.5,
        "water_body": "Thennar River Tributary",
        "base_flood_vulnerability": 0.52,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-SVG",
        "district_name": "Sivaganga"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-VRD",
    "district_name": "Virudhunagar",
    "region_type": "Arid Floodplain",
    "center_lat": 9.5872,
    "center_lng": 77.9514,
    "zoom": 11,
    "areas": [
      {
        "area_id": "VRD-001",
        "name": "Virudhunagar City",
        "latitude": 9.5872,
        "longitude": 77.9514,
        "elevation_m": 117.0,
        "slope_deg": 1.6,
        "flow_acc": 1020.0,
        "distance_to_water_m": 480.0,
        "impervious_surface_pct": 74.0,
        "drainage_capacity_index": 0.48,
        "water_body": "Kousika River Stream",
        "base_flood_vulnerability": 0.56,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-VRD",
        "district_name": "Virudhunagar"
      },
      {
        "area_id": "VRD-002",
        "name": "Sivakasi",
        "latitude": 9.45,
        "longitude": 77.8,
        "elevation_m": 101.0,
        "slope_deg": 1.5,
        "flow_acc": 980.0,
        "distance_to_water_m": 650.0,
        "impervious_surface_pct": 78.0,
        "drainage_capacity_index": 0.46,
        "water_body": "Vaippar River Basin",
        "base_flood_vulnerability": 0.52,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-VRD",
        "district_name": "Virudhunagar"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-TKS",
    "district_name": "Tenkasi",
    "region_type": "Western Ghats Foothills",
    "center_lat": 8.9594,
    "center_lng": 77.315,
    "zoom": 11,
    "areas": [
      {
        "area_id": "TKS-001",
        "name": "Tenkasi Town",
        "latitude": 8.9594,
        "longitude": 77.315,
        "elevation_m": 143.0,
        "slope_deg": 3.2,
        "flow_acc": 1650.0,
        "distance_to_water_m": 220.0,
        "impervious_surface_pct": 64.0,
        "drainage_capacity_index": 0.46,
        "water_body": "Chittar River",
        "base_flood_vulnerability": 0.74,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-TKS",
        "district_name": "Tenkasi"
      },
      {
        "area_id": "TKS-002",
        "name": "Courtallam",
        "latitude": 8.93,
        "longitude": 77.27,
        "elevation_m": 160.0,
        "slope_deg": 6.8,
        "flow_acc": 1820.0,
        "distance_to_water_m": 150.0,
        "impervious_surface_pct": 52.0,
        "drainage_capacity_index": 0.44,
        "water_body": "Chittar Cascades & Main Falls",
        "base_flood_vulnerability": 0.82,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-TKS",
        "district_name": "Tenkasi"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-KRR",
    "district_name": "Karur",
    "region_type": "Cauvery-Amaravathi Confluence",
    "center_lat": 10.9577,
    "center_lng": 78.0809,
    "zoom": 11,
    "areas": [
      {
        "area_id": "KRR-001",
        "name": "Karur City",
        "latitude": 10.9577,
        "longitude": 78.0809,
        "elevation_m": 122.0,
        "slope_deg": 1.4,
        "flow_acc": 1890.0,
        "distance_to_water_m": 210.0,
        "impervious_surface_pct": 76.0,
        "drainage_capacity_index": 0.48,
        "water_body": "Amaravathi & Cauvery Confluence (Thirumukkudalur)",
        "base_flood_vulnerability": 0.75,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-KRR",
        "district_name": "Karur"
      },
      {
        "area_id": "KRR-002",
        "name": "Kulithalai",
        "latitude": 10.93,
        "longitude": 78.42,
        "elevation_m": 94.0,
        "slope_deg": 1.1,
        "flow_acc": 2100.0,
        "distance_to_water_m": 180.0,
        "impervious_surface_pct": 60.0,
        "drainage_capacity_index": 0.44,
        "water_body": "Cauvery River South Bund",
        "base_flood_vulnerability": 0.81,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-KRR",
        "district_name": "Karur"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-NKL",
    "district_name": "Namakkal",
    "region_type": "Cauvery Riparian Basin",
    "center_lat": 11.2189,
    "center_lng": 78.1674,
    "zoom": 11,
    "areas": [
      {
        "area_id": "NKL-001",
        "name": "Namakkal Town",
        "latitude": 11.2189,
        "longitude": 78.1674,
        "elevation_m": 218.0,
        "slope_deg": 2.1,
        "flow_acc": 820.0,
        "distance_to_water_m": 820.0,
        "impervious_surface_pct": 68.0,
        "drainage_capacity_index": 0.54,
        "water_body": "Kamalayam Tank",
        "base_flood_vulnerability": 0.42,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-NKL",
        "district_name": "Namakkal"
      },
      {
        "area_id": "NKL-002",
        "name": "Kumarapalayam",
        "latitude": 11.45,
        "longitude": 77.7,
        "elevation_m": 175.0,
        "slope_deg": 1.6,
        "flow_acc": 1980.0,
        "distance_to_water_m": 160.0,
        "impervious_surface_pct": 74.0,
        "drainage_capacity_index": 0.44,
        "water_body": "Cauvery River East Bank",
        "base_flood_vulnerability": 0.82,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-NKL",
        "district_name": "Namakkal"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-PDK",
    "district_name": "Pudukkottai",
    "region_type": "Tank & Vellar Basin",
    "center_lat": 10.3833,
    "center_lng": 78.8,
    "zoom": 11,
    "areas": [
      {
        "area_id": "PDK-001",
        "name": "Pudukkottai Town",
        "latitude": 10.3833,
        "longitude": 78.8,
        "elevation_m": 100.0,
        "slope_deg": 1.4,
        "flow_acc": 980.0,
        "distance_to_water_m": 520.0,
        "impervious_surface_pct": 68.0,
        "drainage_capacity_index": 0.5,
        "water_body": "Pallavan Kulam & Vellar Tributary",
        "base_flood_vulnerability": 0.54,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-PDK",
        "district_name": "Pudukkottai"
      },
      {
        "area_id": "PDK-002",
        "name": "Aranthangi",
        "latitude": 10.16,
        "longitude": 78.99,
        "elevation_m": 35.0,
        "slope_deg": 0.9,
        "flow_acc": 1480.0,
        "distance_to_water_m": 320.0,
        "impervious_surface_pct": 60.0,
        "drainage_capacity_index": 0.42,
        "water_body": "Agniyar River",
        "base_flood_vulnerability": 0.72,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-PDK",
        "district_name": "Pudukkottai"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-TVM",
    "district_name": "Tiruvannamalai",
    "region_type": "Ponnaiyar-Cheyyar Catchment",
    "center_lat": 12.2253,
    "center_lng": 79.0747,
    "zoom": 11,
    "areas": [
      {
        "area_id": "TVM-001",
        "name": "Tiruvannamalai Town",
        "latitude": 12.2253,
        "longitude": 79.0747,
        "elevation_m": 171.0,
        "slope_deg": 2.8,
        "flow_acc": 920.0,
        "distance_to_water_m": 650.0,
        "impervious_surface_pct": 68.0,
        "drainage_capacity_index": 0.52,
        "water_body": "Tamaraikulam & Annamalaiyar Foothills",
        "base_flood_vulnerability": 0.46,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-TVM",
        "district_name": "Tiruvannamalai"
      },
      {
        "area_id": "TVM-002",
        "name": "Cheyyar",
        "latitude": 12.66,
        "longitude": 79.54,
        "elevation_m": 92.0,
        "slope_deg": 1.3,
        "flow_acc": 1420.0,
        "distance_to_water_m": 240.0,
        "impervious_surface_pct": 58.0,
        "drainage_capacity_index": 0.45,
        "water_body": "Cheyyar River Basin",
        "base_flood_vulnerability": 0.71,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-TVM",
        "district_name": "Tiruvannamalai"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-DHP",
    "district_name": "Dharmapuri",
    "region_type": "Cauvery Falls & Plateau",
    "center_lat": 12.1211,
    "center_lng": 78.1582,
    "zoom": 11,
    "areas": [
      {
        "area_id": "DHP-001",
        "name": "Dharmapuri Town",
        "latitude": 12.1211,
        "longitude": 78.1582,
        "elevation_m": 468.0,
        "slope_deg": 2.2,
        "flow_acc": 820.0,
        "distance_to_water_m": 750.0,
        "impervious_surface_pct": 64.0,
        "drainage_capacity_index": 0.54,
        "water_body": "Sanatkumaranadhi River",
        "base_flood_vulnerability": 0.4,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-DHP",
        "district_name": "Dharmapuri"
      },
      {
        "area_id": "DHP-002",
        "name": "Hogenakkal",
        "latitude": 12.1167,
        "longitude": 77.7833,
        "elevation_m": 245.0,
        "slope_deg": 6.5,
        "flow_acc": 2800.0,
        "distance_to_water_m": 90.0,
        "impervious_surface_pct": 35.0,
        "drainage_capacity_index": 0.42,
        "water_body": "Cauvery River Gorge & Falls",
        "base_flood_vulnerability": 0.92,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-DHP",
        "district_name": "Dharmapuri"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-KRI",
    "district_name": "Krishnagiri",
    "region_type": "Ponnaiyar Dam Catchment",
    "center_lat": 12.5186,
    "center_lng": 78.2137,
    "zoom": 11,
    "areas": [
      {
        "area_id": "KRI-001",
        "name": "Krishnagiri Town",
        "latitude": 12.5186,
        "longitude": 78.2137,
        "elevation_m": 492.0,
        "slope_deg": 2.6,
        "flow_acc": 1250.0,
        "distance_to_water_m": 380.0,
        "impervious_surface_pct": 66.0,
        "drainage_capacity_index": 0.52,
        "water_body": "Thenpennai & Krishnagiri Reservoir Project",
        "base_flood_vulnerability": 0.58,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-KRI",
        "district_name": "Krishnagiri"
      },
      {
        "area_id": "KRI-002",
        "name": "Hosur City",
        "latitude": 12.7409,
        "longitude": 77.8253,
        "elevation_m": 882.0,
        "slope_deg": 2.4,
        "flow_acc": 980.0,
        "distance_to_water_m": 520.0,
        "impervious_surface_pct": 78.0,
        "drainage_capacity_index": 0.54,
        "water_body": "Kelavarapalli Dam Catchment",
        "base_flood_vulnerability": 0.48,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-KRI",
        "district_name": "Krishnagiri"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-KLK",
    "district_name": "Kallakurichi",
    "region_type": "Manimuktha River Basin",
    "center_lat": 11.7383,
    "center_lng": 78.9639,
    "zoom": 11,
    "areas": [
      {
        "area_id": "KLK-001",
        "name": "Kallakurichi Town",
        "latitude": 11.7383,
        "longitude": 78.9639,
        "elevation_m": 120.0,
        "slope_deg": 1.6,
        "flow_acc": 1150.0,
        "distance_to_water_m": 350.0,
        "impervious_surface_pct": 64.0,
        "drainage_capacity_index": 0.48,
        "water_body": "Manimuktha River",
        "base_flood_vulnerability": 0.62,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-KLK",
        "district_name": "Kallakurichi"
      },
      {
        "area_id": "KLK-002",
        "name": "Ulundurpet",
        "latitude": 11.69,
        "longitude": 79.29,
        "elevation_m": 74.0,
        "slope_deg": 1.2,
        "flow_acc": 1320.0,
        "distance_to_water_m": 420.0,
        "impervious_surface_pct": 60.0,
        "drainage_capacity_index": 0.46,
        "water_body": "Gedilam River Stream",
        "base_flood_vulnerability": 0.68,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-KLK",
        "district_name": "Kallakurichi"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-ARI",
    "district_name": "Ariyalur",
    "region_type": "Kollidam North Basin",
    "center_lat": 11.1401,
    "center_lng": 79.0786,
    "zoom": 11,
    "areas": [
      {
        "area_id": "ARI-001",
        "name": "Ariyalur Town",
        "latitude": 11.1401,
        "longitude": 79.0786,
        "elevation_m": 76.0,
        "slope_deg": 1.4,
        "flow_acc": 1180.0,
        "distance_to_water_m": 480.0,
        "impervious_surface_pct": 62.0,
        "drainage_capacity_index": 0.48,
        "water_body": "Marudaiyar River",
        "base_flood_vulnerability": 0.58,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-ARI",
        "district_name": "Ariyalur"
      },
      {
        "area_id": "ARI-002",
        "name": "Jayankondam",
        "latitude": 11.2167,
        "longitude": 79.35,
        "elevation_m": 55.0,
        "slope_deg": 1.1,
        "flow_acc": 1350.0,
        "distance_to_water_m": 360.0,
        "impervious_surface_pct": 58.0,
        "drainage_capacity_index": 0.46,
        "water_body": "Kollidam Canal Inundation",
        "base_flood_vulnerability": 0.72,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-ARI",
        "district_name": "Ariyalur"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-PER",
    "district_name": "Perambalur",
    "region_type": "Vellar Catchment",
    "center_lat": 11.2333,
    "center_lng": 78.8833,
    "zoom": 11,
    "areas": [
      {
        "area_id": "PER-001",
        "name": "Perambalur Town",
        "latitude": 11.2333,
        "longitude": 78.8833,
        "elevation_m": 142.0,
        "slope_deg": 2.1,
        "flow_acc": 920.0,
        "distance_to_water_m": 580.0,
        "impervious_surface_pct": 65.0,
        "drainage_capacity_index": 0.52,
        "water_body": "Konnaiyar & Perambalur Tank",
        "base_flood_vulnerability": 0.48,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-PER",
        "district_name": "Perambalur"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "TN-TPT",
    "district_name": "Tirupathur",
    "region_type": "Palar Foothills",
    "center_lat": 12.495,
    "center_lng": 78.5678,
    "zoom": 11,
    "areas": [
      {
        "area_id": "TPT-001",
        "name": "Tirupathur Town",
        "latitude": 12.495,
        "longitude": 78.5678,
        "elevation_m": 388.0,
        "slope_deg": 2.4,
        "flow_acc": 890.0,
        "distance_to_water_m": 520.0,
        "impervious_surface_pct": 65.0,
        "drainage_capacity_index": 0.52,
        "water_body": "Palar Basin Odai",
        "base_flood_vulnerability": 0.46,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-TPT",
        "district_name": "Tirupathur"
      },
      {
        "area_id": "TPT-002",
        "name": "Vaniyambadi",
        "latitude": 12.6833,
        "longitude": 78.6167,
        "elevation_m": 320.0,
        "slope_deg": 2.0,
        "flow_acc": 1650.0,
        "distance_to_water_m": 190.0,
        "impervious_surface_pct": 74.0,
        "drainage_capacity_index": 0.44,
        "water_body": "Palar River Low Causeways",
        "base_flood_vulnerability": 0.78,
        "state_code": "TN",
        "state_name": "Tamil Nadu",
        "district_id": "TN-TPT",
        "district_name": "Tirupathur"
      }
    ],
    "state_code": "TN",
    "state_name": "Tamil Nadu"
  },
  {
    "district_id": "KL-EKM",
    "district_name": "Ernakulam (Kochi)",
    "state_code": "KL",
    "state_name": "Kerala",
    "region_type": "Coastal Estuarine",
    "center_lat": 9.9816,
    "center_lng": 76.2999,
    "zoom": 12,
    "areas": [
      {
        "area_id": "KL-001",
        "name": "Kochi City (Marine Drive)",
        "latitude": 9.9816,
        "longitude": 76.2762,
        "elevation_m": 2.5,
        "slope_deg": 0.4,
        "flow_acc": 1600.0,
        "distance_to_water_m": 120.0,
        "impervious_surface_pct": 82.0,
        "drainage_capacity_index": 0.32,
        "water_body": "Vembanad Lake & Backwaters",
        "base_flood_vulnerability": 0.88
      },
      {
        "area_id": "KL-002",
        "name": "Aluva (Periyar Riverfront)",
        "latitude": 10.1076,
        "longitude": 76.3516,
        "elevation_m": 8.0,
        "slope_deg": 1.2,
        "flow_acc": 3200.0,
        "distance_to_water_m": 80.0,
        "impervious_surface_pct": 65.0,
        "drainage_capacity_index": 0.4,
        "water_body": "Periyar River",
        "base_flood_vulnerability": 0.92
      }
    ]
  },
  {
    "district_id": "KL-ALP",
    "district_name": "Alappuzha (Kuttanad)",
    "state_code": "KL",
    "state_name": "Kerala",
    "region_type": "Below Sea-Level Delta",
    "center_lat": 9.4981,
    "center_lng": 76.3388,
    "zoom": 11,
    "areas": [
      {
        "area_id": "KL-003",
        "name": "Kuttanad Delta (Below MSL)",
        "latitude": 9.4233,
        "longitude": 76.4533,
        "elevation_m": -1.5,
        "slope_deg": 0.2,
        "flow_acc": 2800.0,
        "distance_to_water_m": 40.0,
        "impervious_surface_pct": 45.0,
        "drainage_capacity_index": 0.25,
        "water_body": "Pamba & Vembanad System",
        "base_flood_vulnerability": 0.96
      }
    ]
  },
  {
    "district_id": "KL-WYD",
    "district_name": "Wayanad (Meppadi)",
    "state_code": "KL",
    "state_name": "Kerala",
    "region_type": "Western Ghats Highland",
    "center_lat": 11.6854,
    "center_lng": 76.132,
    "zoom": 11,
    "areas": [
      {
        "area_id": "KL-004",
        "name": "Meppadi & Chooralmala Valley",
        "latitude": 11.5516,
        "longitude": 76.1283,
        "elevation_m": 780.0,
        "slope_deg": 18.5,
        "flow_acc": 2200.0,
        "distance_to_water_m": 150.0,
        "impervious_surface_pct": 35.0,
        "drainage_capacity_index": 0.45,
        "water_body": "Iruvanjippuzha Tributary",
        "base_flood_vulnerability": 0.89
      }
    ]
  },
  {
    "district_id": "KL-TVM",
    "district_name": "Thiruvananthapuram",
    "state_code": "KL",
    "state_name": "Kerala",
    "region_type": "Coastal Urban",
    "center_lat": 8.5241,
    "center_lng": 76.9366,
    "zoom": 12,
    "areas": [
      {
        "area_id": "KL-005",
        "name": "Thampanoor & Thekkumoodu",
        "latitude": 8.4875,
        "longitude": 76.9525,
        "elevation_m": 6.0,
        "slope_deg": 0.9,
        "flow_acc": 1100.0,
        "distance_to_water_m": 210.0,
        "impervious_surface_pct": 84.0,
        "drainage_capacity_index": 0.35,
        "water_body": "Amayizhanjan Canal",
        "base_flood_vulnerability": 0.84
      }
    ]
  },
  {
    "district_id": "KA-BLR",
    "district_name": "Bengaluru Urban",
    "state_code": "KA",
    "state_name": "Karnataka",
    "region_type": "Plateau Urban Valley",
    "center_lat": 12.9716,
    "center_lng": 77.5946,
    "zoom": 12,
    "areas": [
      {
        "area_id": "KA-001",
        "name": "Bellandur & Rainbow Drive",
        "latitude": 12.926,
        "longitude": 77.6762,
        "elevation_m": 880.0,
        "slope_deg": 0.6,
        "flow_acc": 2400.0,
        "distance_to_water_m": 180.0,
        "impervious_surface_pct": 88.0,
        "drainage_capacity_index": 0.28,
        "water_body": "Bellandur Lake Overflow Corridor",
        "base_flood_vulnerability": 0.91
      },
      {
        "area_id": "KA-002",
        "name": "Koramangala 4th Block",
        "latitude": 12.9344,
        "longitude": 77.6258,
        "elevation_m": 892.0,
        "slope_deg": 0.8,
        "flow_acc": 1300.0,
        "distance_to_water_m": 310.0,
        "impervious_surface_pct": 91.0,
        "drainage_capacity_index": 0.3,
        "water_body": "Koramangala SWD Canal",
        "base_flood_vulnerability": 0.86
      },
      {
        "area_id": "KA-003",
        "name": "Mahadevapura & Manyata Tech",
        "latitude": 12.9912,
        "longitude": 77.6974,
        "elevation_m": 875.0,
        "slope_deg": 0.7,
        "flow_acc": 1800.0,
        "distance_to_water_m": 250.0,
        "impervious_surface_pct": 85.0,
        "drainage_capacity_index": 0.34,
        "water_body": "Dakshina Pinakini Basin",
        "base_flood_vulnerability": 0.87
      }
    ]
  },
  {
    "district_id": "KA-DKN",
    "district_name": "Dakshina Kannada (Mangaluru)",
    "state_code": "KA",
    "state_name": "Karnataka",
    "region_type": "Coastal River Confluence",
    "center_lat": 12.9141,
    "center_lng": 74.856,
    "zoom": 12,
    "areas": [
      {
        "area_id": "KA-004",
        "name": "Kodialbail & Pumpwell",
        "latitude": 12.8732,
        "longitude": 74.8624,
        "elevation_m": 8.5,
        "slope_deg": 1.1,
        "flow_acc": 1900.0,
        "distance_to_water_m": 350.0,
        "impervious_surface_pct": 74.0,
        "drainage_capacity_index": 0.42,
        "water_body": "Netravati River Confluence",
        "base_flood_vulnerability": 0.82
      }
    ]
  },
  {
    "district_id": "KA-KOD",
    "district_name": "Kodagu (Madikeri)",
    "state_code": "KA",
    "state_name": "Karnataka",
    "region_type": "Western Ghats Catchment",
    "center_lat": 12.4244,
    "center_lng": 75.7382,
    "zoom": 11,
    "areas": [
      {
        "area_id": "KA-005",
        "name": "Bhagamandala Triveni Sangam",
        "latitude": 12.3892,
        "longitude": 75.5312,
        "elevation_m": 870.0,
        "slope_deg": 9.5,
        "flow_acc": 3100.0,
        "distance_to_water_m": 50.0,
        "impervious_surface_pct": 32.0,
        "drainage_capacity_index": 0.5,
        "water_body": "Cauvery River Headwaters",
        "base_flood_vulnerability": 0.94
      }
    ]
  },
  {
    "district_id": "MH-MUM",
    "district_name": "Mumbai Metropolitan",
    "state_code": "MH",
    "state_name": "Maharashtra",
    "region_type": "Coastal Megacity & Mithi Estuary",
    "center_lat": 19.076,
    "center_lng": 72.8777,
    "zoom": 12,
    "areas": [
      {
        "area_id": "MH-001",
        "name": "Kurla & Kranti Nagar (Mithi)",
        "latitude": 19.0726,
        "longitude": 72.8845,
        "elevation_m": 4.0,
        "slope_deg": 0.3,
        "flow_acc": 2900.0,
        "distance_to_water_m": 60.0,
        "impervious_surface_pct": 94.0,
        "drainage_capacity_index": 0.22,
        "water_body": "Mithi River Corridor",
        "base_flood_vulnerability": 0.97
      },
      {
        "area_id": "MH-002",
        "name": "Hindmata & Dadar TT Circle",
        "latitude": 19.0178,
        "longitude": 72.8478,
        "elevation_m": 3.2,
        "slope_deg": 0.2,
        "flow_acc": 1400.0,
        "distance_to_water_m": 450.0,
        "impervious_surface_pct": 96.0,
        "drainage_capacity_index": 0.25,
        "water_body": "Britannia Storm Outfall",
        "base_flood_vulnerability": 0.93
      },
      {
        "area_id": "MH-003",
        "name": "Milan Subway & Andheri West",
        "latitude": 19.1197,
        "longitude": 72.8464,
        "elevation_m": 5.0,
        "slope_deg": 0.5,
        "flow_acc": 1600.0,
        "distance_to_water_m": 380.0,
        "impervious_surface_pct": 92.0,
        "drainage_capacity_index": 0.28,
        "water_body": "Oshiwara River Channel",
        "base_flood_vulnerability": 0.9
      }
    ]
  },
  {
    "district_id": "MH-PUN",
    "district_name": "Pune",
    "state_code": "MH",
    "state_name": "Maharashtra",
    "region_type": "River Confluence Urban",
    "center_lat": 18.5204,
    "center_lng": 73.8567,
    "zoom": 12,
    "areas": [
      {
        "area_id": "MH-004",
        "name": "Sinhagad Road & Ekta Nagari",
        "latitude": 18.4735,
        "longitude": 73.8242,
        "elevation_m": 558.0,
        "slope_deg": 1.4,
        "flow_acc": 2600.0,
        "distance_to_water_m": 90.0,
        "impervious_surface_pct": 78.0,
        "drainage_capacity_index": 0.38,
        "water_body": "Mutha River Discharge",
        "base_flood_vulnerability": 0.89
      }
    ]
  },
  {
    "district_id": "MH-KOP",
    "district_name": "Kolhapur",
    "state_code": "MH",
    "state_name": "Maharashtra",
    "region_type": "River Basin Lowland",
    "center_lat": 16.705,
    "center_lng": 74.2433,
    "zoom": 12,
    "areas": [
      {
        "area_id": "MH-005",
        "name": "Panchganga Ghat & Rajaram Weir",
        "latitude": 16.7112,
        "longitude": 74.2388,
        "elevation_m": 545.0,
        "slope_deg": 0.8,
        "flow_acc": 3400.0,
        "distance_to_water_m": 70.0,
        "impervious_surface_pct": 62.0,
        "drainage_capacity_index": 0.4,
        "water_body": "Panchganga River Basin",
        "base_flood_vulnerability": 0.94
      }
    ]
  },
  {
    "district_id": "DL-NCR",
    "district_name": "Delhi National Capital Region",
    "state_code": "DL",
    "state_name": "Delhi NCR",
    "region_type": "Riverine Floodplain Urban",
    "center_lat": 28.6139,
    "center_lng": 77.209,
    "zoom": 12,
    "areas": [
      {
        "area_id": "DL-001",
        "name": "Yamuna Bazar & Kashmere Gate",
        "latitude": 28.6653,
        "longitude": 77.2324,
        "elevation_m": 204.0,
        "slope_deg": 0.4,
        "flow_acc": 3600.0,
        "distance_to_water_m": 80.0,
        "impervious_surface_pct": 89.0,
        "drainage_capacity_index": 0.3,
        "water_body": "Yamuna River Floodplain",
        "base_flood_vulnerability": 0.95
      },
      {
        "area_id": "DL-002",
        "name": "Minto Bridge & Connaught Place",
        "latitude": 28.634,
        "longitude": 77.225,
        "elevation_m": 210.0,
        "slope_deg": 0.6,
        "flow_acc": 1200.0,
        "distance_to_water_m": 600.0,
        "impervious_surface_pct": 95.0,
        "drainage_capacity_index": 0.26,
        "water_body": "Barapullah Drain System",
        "base_flood_vulnerability": 0.88
      },
      {
        "area_id": "DL-003",
        "name": "Mayur Vihar & ITO Ring Road",
        "latitude": 28.6044,
        "longitude": 77.2954,
        "elevation_m": 205.5,
        "slope_deg": 0.5,
        "flow_acc": 2200.0,
        "distance_to_water_m": 210.0,
        "impervious_surface_pct": 86.0,
        "drainage_capacity_index": 0.32,
        "water_body": "Yamuna East Bank Bundh",
        "base_flood_vulnerability": 0.91
      }
    ]
  },
  {
    "district_id": "WB-KOL",
    "district_name": "Kolkata Metropolitan",
    "state_code": "WB",
    "state_name": "West Bengal",
    "region_type": "Tidal River Delta",
    "center_lat": 22.5726,
    "center_lng": 88.3639,
    "zoom": 12,
    "areas": [
      {
        "area_id": "WB-001",
        "name": "Thanthania & Central Avenue",
        "latitude": 22.583,
        "longitude": 88.3622,
        "elevation_m": 5.2,
        "slope_deg": 0.2,
        "flow_acc": 1700.0,
        "distance_to_water_m": 420.0,
        "impervious_surface_pct": 93.0,
        "drainage_capacity_index": 0.24,
        "water_body": "Circular Canal & Hooghly",
        "base_flood_vulnerability": 0.92
      },
      {
        "area_id": "WB-002",
        "name": "Behala & Taratala Lowlands",
        "latitude": 22.5012,
        "longitude": 88.3184,
        "elevation_m": 4.5,
        "slope_deg": 0.3,
        "flow_acc": 2100.0,
        "distance_to_water_m": 350.0,
        "impervious_surface_pct": 85.0,
        "drainage_capacity_index": 0.28,
        "water_body": "Adi Ganga & Keorapukur Khal",
        "base_flood_vulnerability": 0.89
      }
    ]
  },
  {
    "district_id": "WB-DAR",
    "district_name": "Darjeeling & Teesta Basin",
    "state_code": "WB",
    "state_name": "West Bengal",
    "region_type": "Himalayan Foothills",
    "center_lat": 26.9855,
    "center_lng": 88.452,
    "zoom": 11,
    "areas": [
      {
        "area_id": "WB-003",
        "name": "Kalimpong & Teesta Bazar",
        "latitude": 27.0583,
        "longitude": 88.4283,
        "elevation_m": 220.0,
        "slope_deg": 14.2,
        "flow_acc": 3800.0,
        "distance_to_water_m": 50.0,
        "impervious_surface_pct": 42.0,
        "drainage_capacity_index": 0.52,
        "water_body": "Teesta River Gorge",
        "base_flood_vulnerability": 0.95
      }
    ]
  },
  {
    "district_id": "AS-KAM",
    "district_name": "Kamrup (Guwahati)",
    "state_code": "AS",
    "state_name": "Assam",
    "region_type": "Brahmaputra Valley",
    "center_lat": 26.1445,
    "center_lng": 91.7362,
    "zoom": 12,
    "areas": [
      {
        "area_id": "AS-001",
        "name": "Anil Nagar & Nabin Nagar (Bharalu)",
        "latitude": 26.172,
        "longitude": 91.764,
        "elevation_m": 51.0,
        "slope_deg": 0.5,
        "flow_acc": 2800.0,
        "distance_to_water_m": 60.0,
        "impervious_surface_pct": 86.0,
        "drainage_capacity_index": 0.25,
        "water_body": "Bharalu River Channel",
        "base_flood_vulnerability": 0.96
      },
      {
        "area_id": "AS-002",
        "name": "Rukminigaon & VIP Road",
        "latitude": 26.1285,
        "longitude": 91.7952,
        "elevation_m": 53.5,
        "slope_deg": 0.8,
        "flow_acc": 1900.0,
        "distance_to_water_m": 240.0,
        "impervious_surface_pct": 79.0,
        "drainage_capacity_index": 0.32,
        "water_body": "Bahini River Spill",
        "base_flood_vulnerability": 0.88
      }
    ]
  },
  {
    "district_id": "AS-DIB",
    "district_name": "Dibrugarh",
    "state_code": "AS",
    "state_name": "Assam",
    "region_type": "Major River Dyke",
    "center_lat": 27.4728,
    "center_lng": 94.912,
    "zoom": 12,
    "areas": [
      {
        "area_id": "AS-003",
        "name": "Dibrugarh Town Dyke & Mohanaghat",
        "latitude": 27.485,
        "longitude": 94.908,
        "elevation_m": 105.0,
        "slope_deg": 0.3,
        "flow_acc": 4200.0,
        "distance_to_water_m": 70.0,
        "impervious_surface_pct": 68.0,
        "drainage_capacity_index": 0.35,
        "water_body": "Brahmaputra Mainstem",
        "base_flood_vulnerability": 0.94
      }
    ]
  },
  {
    "district_id": "TG-HYD",
    "district_name": "Hyderabad",
    "state_code": "TG",
    "state_name": "Telangana",
    "region_type": "Deccan Urban Catchment",
    "center_lat": 17.385,
    "center_lng": 78.4867,
    "zoom": 12,
    "areas": [
      {
        "area_id": "TG-001",
        "name": "Begumpet & Rasoolpura",
        "latitude": 17.4448,
        "longitude": 78.4723,
        "elevation_m": 515.0,
        "slope_deg": 0.9,
        "flow_acc": 1800.0,
        "distance_to_water_m": 140.0,
        "impervious_surface_pct": 89.0,
        "drainage_capacity_index": 0.3,
        "water_body": "Hussain Sagar Outflow Nala",
        "base_flood_vulnerability": 0.9
      },
      {
        "area_id": "TG-002",
        "name": "Tolichowki & Nadeem Colony",
        "latitude": 17.3996,
        "longitude": 78.4118,
        "elevation_m": 508.0,
        "slope_deg": 0.7,
        "flow_acc": 2200.0,
        "distance_to_water_m": 110.0,
        "impervious_surface_pct": 87.0,
        "drainage_capacity_index": 0.28,
        "water_body": "Shah Hatim Lake Basin",
        "base_flood_vulnerability": 0.93
      },
      {
        "area_id": "TG-003",
        "name": "Malakpet & Chaderghat Causeway",
        "latitude": 17.3752,
        "longitude": 78.4965,
        "elevation_m": 498.0,
        "slope_deg": 0.6,
        "flow_acc": 3100.0,
        "distance_to_water_m": 70.0,
        "impervious_surface_pct": 91.0,
        "drainage_capacity_index": 0.26,
        "water_body": "Musi River Channel",
        "base_flood_vulnerability": 0.95
      }
    ]
  },
  {
    "district_id": "AP-VSP",
    "district_name": "Visakhapatnam",
    "state_code": "AP",
    "state_name": "Andhra Pradesh",
    "region_type": "Bay of Bengal Coastal Lowland",
    "center_lat": 17.6868,
    "center_lng": 83.2185,
    "zoom": 12,
    "areas": [
      {
        "area_id": "AP-001",
        "name": "Gajuwaka & Scindia Corridor",
        "latitude": 17.6912,
        "longitude": 83.1856,
        "elevation_m": 6.8,
        "slope_deg": 1.2,
        "flow_acc": 1600.0,
        "distance_to_water_m": 350.0,
        "impervious_surface_pct": 79.0,
        "drainage_capacity_index": 0.38,
        "water_body": "Meghadrigedda Reservoir Runoff",
        "base_flood_vulnerability": 0.85
      }
    ]
  },
  {
    "district_id": "AP-VJA",
    "district_name": "Vijayawada & Krishna Basin",
    "state_code": "AP",
    "state_name": "Andhra Pradesh",
    "region_type": "River Confluence & Canal Delta",
    "center_lat": 16.5062,
    "center_lng": 80.648,
    "zoom": 12,
    "areas": [
      {
        "area_id": "AP-002",
        "name": "Singhnagar & Budameru Canal Zone",
        "latitude": 16.5385,
        "longitude": 80.6415,
        "elevation_m": 18.0,
        "slope_deg": 0.5,
        "flow_acc": 3300.0,
        "distance_to_water_m": 50.0,
        "impervious_surface_pct": 82.0,
        "drainage_capacity_index": 0.28,
        "water_body": "Budameru Rivulet & Krishna Spill",
        "base_flood_vulnerability": 0.96
      }
    ]
  },
  {
    "district_id": "OD-BBS",
    "district_name": "Bhubaneswar & Cuttack",
    "state_code": "OD",
    "state_name": "Odisha",
    "region_type": "Mahanadi Delta Urban",
    "center_lat": 20.2961,
    "center_lng": 85.8245,
    "zoom": 12,
    "areas": [
      {
        "area_id": "OD-001",
        "name": "Bhubaneswar (Jayadev Vihar & Acharya Vihar)",
        "latitude": 20.3025,
        "longitude": 85.8285,
        "elevation_m": 38.0,
        "slope_deg": 0.8,
        "flow_acc": 1700.0,
        "distance_to_water_m": 220.0,
        "impervious_surface_pct": 81.0,
        "drainage_capacity_index": 0.35,
        "water_body": "Gangua Nala Discharge",
        "base_flood_vulnerability": 0.87
      },
      {
        "area_id": "OD-002",
        "name": "Cuttack Ring Road & Kathajodi Spills",
        "latitude": 20.4625,
        "longitude": 85.8828,
        "elevation_m": 28.0,
        "slope_deg": 0.4,
        "flow_acc": 3900.0,
        "distance_to_water_m": 60.0,
        "impervious_surface_pct": 84.0,
        "drainage_capacity_index": 0.29,
        "water_body": "Mahanadi & Kathajodi Fork",
        "base_flood_vulnerability": 0.94
      }
    ]
  },
  {
    "district_id": "GJ-AMD",
    "district_name": "Ahmedabad",
    "state_code": "GJ",
    "state_name": "Gujarat",
    "region_type": "Sabarmati Basin Urban",
    "center_lat": 23.0225,
    "center_lng": 72.5714,
    "zoom": 12,
    "areas": [
      {
        "area_id": "GJ-001",
        "name": "Sabarmati Riverfront & Usmanpura",
        "latitude": 23.0482,
        "longitude": 72.5721,
        "elevation_m": 48.0,
        "slope_deg": 0.6,
        "flow_acc": 2200.0,
        "distance_to_water_m": 90.0,
        "impervious_surface_pct": 88.0,
        "drainage_capacity_index": 0.36,
        "water_body": "Sabarmati River Channel",
        "base_flood_vulnerability": 0.86
      }
    ]
  },
  {
    "district_id": "GJ-SUR",
    "district_name": "Surat",
    "state_code": "GJ",
    "state_name": "Gujarat",
    "region_type": "Tapi Estuary & Tidal Surge",
    "center_lat": 21.1702,
    "center_lng": 72.8311,
    "zoom": 12,
    "areas": [
      {
        "area_id": "GJ-002",
        "name": "Adajan & Rander Lowlands",
        "latitude": 21.1985,
        "longitude": 72.7952,
        "elevation_m": 12.0,
        "slope_deg": 0.3,
        "flow_acc": 3600.0,
        "distance_to_water_m": 110.0,
        "impervious_surface_pct": 85.0,
        "drainage_capacity_index": 0.3,
        "water_body": "Tapi River Mouth & Ukai Dam Release",
        "base_flood_vulnerability": 0.94
      }
    ]
  },
  {
    "district_id": "UP-LKO",
    "district_name": "Lucknow",
    "state_code": "UP",
    "state_name": "Uttar Pradesh",
    "region_type": "Gomti Basin Plains",
    "center_lat": 26.8467,
    "center_lng": 80.9462,
    "zoom": 12,
    "areas": [
      {
        "area_id": "UP-001",
        "name": "Gomti Barrage & Daliganj Ghats",
        "latitude": 26.8625,
        "longitude": 80.932,
        "elevation_m": 121.0,
        "slope_deg": 0.5,
        "flow_acc": 2100.0,
        "distance_to_water_m": 120.0,
        "impervious_surface_pct": 84.0,
        "drainage_capacity_index": 0.38,
        "water_body": "Gomti River Lowland",
        "base_flood_vulnerability": 0.86
      }
    ]
  },
  {
    "district_id": "UP-VNS",
    "district_name": "Varanasi & Prayagraj",
    "state_code": "UP",
    "state_name": "Uttar Pradesh",
    "region_type": "Ganga & Yamuna Sangam",
    "center_lat": 25.3176,
    "center_lng": 82.9739,
    "zoom": 12,
    "areas": [
      {
        "area_id": "UP-002",
        "name": "Assi Ghat & Varuna Confluence",
        "latitude": 25.2882,
        "longitude": 83.0062,
        "elevation_m": 76.0,
        "slope_deg": 0.7,
        "flow_acc": 3800.0,
        "distance_to_water_m": 60.0,
        "impervious_surface_pct": 82.0,
        "drainage_capacity_index": 0.32,
        "water_body": "Ganga Mainstream & Varuna River",
        "base_flood_vulnerability": 0.93
      }
    ]
  },
  {
    "district_id": "BR-PAT",
    "district_name": "Patna & Ganga-Punpun Confluence",
    "state_code": "BR",
    "state_name": "Bihar",
    "region_type": "Gangetic Flood Basin",
    "center_lat": 25.5941,
    "center_lng": 85.1376,
    "zoom": 12,
    "areas": [
      {
        "area_id": "BR-001",
        "name": "Kankarbagh & Rajendra Nagar",
        "latitude": 25.5912,
        "longitude": 85.1584,
        "elevation_m": 51.5,
        "slope_deg": 0.3,
        "flow_acc": 3400.0,
        "distance_to_water_m": 150.0,
        "impervious_surface_pct": 88.0,
        "drainage_capacity_index": 0.24,
        "water_body": "Punpun & Ganga Backflow",
        "base_flood_vulnerability": 0.95
      }
    ]
  },
  {
    "district_id": "UK-DED",
    "district_name": "Dehradun & Haridwar",
    "state_code": "UK",
    "state_name": "Uttarakhand",
    "region_type": "Sub-Himalayan Flash Flood Corridor",
    "center_lat": 30.3165,
    "center_lng": 78.0322,
    "zoom": 11,
    "areas": [
      {
        "area_id": "UK-001",
        "name": "Rispana & Bindal River Beds",
        "latitude": 30.3015,
        "longitude": 78.0485,
        "elevation_m": 640.0,
        "slope_deg": 7.5,
        "flow_acc": 2600.0,
        "distance_to_water_m": 80.0,
        "impervious_surface_pct": 72.0,
        "drainage_capacity_index": 0.45,
        "water_body": "Song & Rispana Torrent",
        "base_flood_vulnerability": 0.91
      }
    ]
  },
  {
    "district_id": "HP-KLU",
    "district_name": "Kullu & Beas Valley",
    "state_code": "HP",
    "state_name": "Himachal Pradesh",
    "region_type": "Himalayan Torrential Basin",
    "center_lat": 31.9579,
    "center_lng": 77.1095,
    "zoom": 11,
    "areas": [
      {
        "area_id": "HP-001",
        "name": "Manali Old Town & Beas Bank",
        "latitude": 32.2432,
        "longitude": 77.1892,
        "elevation_m": 2050.0,
        "slope_deg": 16.0,
        "flow_acc": 3100.0,
        "distance_to_water_m": 50.0,
        "impervious_surface_pct": 48.0,
        "drainage_capacity_index": 0.48,
        "water_body": "Beas River Flood Channel",
        "base_flood_vulnerability": 0.94
      }
    ]
  },
  {
    "district_id": "JK-SRN",
    "district_name": "Srinagar & Jhelum Basin",
    "state_code": "JK",
    "state_name": "Jammu & Kashmir",
    "region_type": "Kashmir Valley Lake & River",
    "center_lat": 34.0837,
    "center_lng": 74.7973,
    "zoom": 12,
    "areas": [
      {
        "area_id": "JK-001",
        "name": "Rajbagh & Lal Chowk (Jhelum Bund)",
        "latitude": 34.0682,
        "longitude": 74.8192,
        "elevation_m": 1585.0,
        "slope_deg": 0.4,
        "flow_acc": 3500.0,
        "distance_to_water_m": 70.0,
        "impervious_surface_pct": 82.0,
        "drainage_capacity_index": 0.28,
        "water_body": "Jhelum River & Dal Lake Overflow",
        "base_flood_vulnerability": 0.95
      }
    ]
  }
];

class FloodGuardApp {
  constructor() {
    this.map = null;
    this.markers = {};
    this.polygons = {};
    this.currentDistrictId = "ALL_INDIA"; // Start with Overall India view
    this.currentAreaId = null; // No place force-selected on overall view
    this.currentPredictions = {};

    // Hydrological Simulation Defaults
    this.rain24h = 120.0;
    this.rain1h = 35.0;
    this.rain3d = 180.0;
    this.temperature = 26.5;
    this.humidity = 88.0;

    this.activeLayers = {
      heat: true,
      waterways: true,
      shelters: true
    };
  }

  async init() {
    this.initMap();
    this.populateDistrictDropdown();
    this.bindEvents();
    this.initModals();
    
    // Initially close the inspector panel so the overall India map is clean and wide
    this.closeInspector();

    // Trigger initial statewide/national inference
    await this.onDistrictChanged("ALL_INDIA");
  }

  initMap() {
    // Center of India
    this.map = L.map("leaflet-map", {
      center: [22.8, 79.5],
      zoom: 5,
      zoomControl: false,
      attributionControl: false
    });

    L.control.zoom({ position: "bottomright" }).addTo(this.map);

    // Tactical dark basemap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      className: "tactical-dark-tile"
    }).addTo(this.map);
  }

  populateDistrictDropdown() {
    const distSelect = document.getElementById("select-district");
    if (!distSelect) return;

    distSelect.innerHTML = "";

    // 1. National Overview
    const optIndia = document.createElement("option");
    optIndia.value = "ALL_INDIA";
    optIndia.textContent = "🇮🇳 Overall India (All States & UTs)";
    optIndia.selected = true;
    distSelect.appendChild(optIndia);

    // 2. Tamil Nadu Statewide
    const optTN = document.createElement("option");
    optTN.value = "ALL_TN";
    optTN.textContent = "🌟 All Tamil Nadu (38 Districts Grid)";
    distSelect.appendChild(optTN);

    // 3. Indian State Regional Groups
    const stateGroups = [
      { code: "STATE_MH", name: "🏙️ Maharashtra & Mumbai Metros", state: "Maharashtra" },
      { code: "STATE_DL", name: "🏛️ Delhi NCR & Yamuna Basin", state: "Delhi NCR" },
      { code: "STATE_KL", name: "🌴 Kerala (14 Districts Grid)", state: "Kerala" },
      { code: "STATE_KA", name: "🏛️ Karnataka & Bengaluru", state: "Karnataka" },
      { code: "STATE_WB", name: "🌊 West Bengal & Kolkata", state: "West Bengal" },
      { code: "STATE_AS", name: "🏞️ Assam & Northeast Basin", state: "Assam" },
      { code: "STATE_TG", name: "⚡ Telangana & Hyderabad", state: "Telangana" },
      { code: "STATE_AP", name: "🌊 Andhra Pradesh (Coastal)", state: "Andhra Pradesh" },
      { code: "STATE_OD", name: "🌊 Odisha (Mahanadi Basin)", state: "Odisha" },
      { code: "STATE_GJ", name: "🏭 Gujarat (Surat & Ahmedabad)", state: "Gujarat" },
      { code: "STATE_UP", name: "🌾 Uttar Pradesh (Ganga & Gomti)", state: "Uttar Pradesh" },
      { code: "STATE_BR", name: "🌊 Bihar (Gangetic Confluence)", state: "Bihar" },
      { code: "STATE_HIM", name: "⛰️ Uttarakhand & Himachal (Flash Flood)", state: ["Uttarakhand", "Himachal Pradesh"] },
      { code: "STATE_JK", name: "🏔️ Jammu & Kashmir (Jhelum Basin)", state: "Jammu & Kashmir" }
    ];

    const groupStates = document.createElement("optgroup");
    groupStates.label = "── Indian States & River Basins ──";
    stateGroups.forEach(sg => {
      const opt = document.createElement("option");
      opt.value = sg.code;
      opt.textContent = sg.name;
      groupStates.appendChild(opt);
    });
    distSelect.appendChild(groupStates);

    // 4. Tamil Nadu Individual 38 Districts
    const groupTN = document.createElement("optgroup");
    groupTN.label = "── Tamil Nadu Districts (38) ──";
    INDIA_DATA.filter(d => d.state_code === "TN").forEach(d => {
      const opt = document.createElement("option");
      opt.value = d.district_id;
      opt.textContent = `📍 ${d.district_name} (${d.areas.length} Places)`;
      groupTN.appendChild(opt);
    });
    distSelect.appendChild(groupTN);

    distSelect.addEventListener("change", (e) => {
      this.onDistrictChanged(e.target.value);
    });
  }

  populateAreaDropdown(areas, groupTitle = "All Areas in District") {
    const areaSelect = document.getElementById("select-area");
    if (!areaSelect) return;

    areaSelect.innerHTML = "";

    const allAreaOpt = document.createElement("option");
    allAreaOpt.value = "ALL";
    allAreaOpt.textContent = `⚡ ${groupTitle} (${areas.length} Places Monitored)`;
    allAreaOpt.selected = true;
    areaSelect.appendChild(allAreaOpt);

    areas.forEach(a => {
      const opt = document.createElement("option");
      opt.value = a.area_id;
      const stTag = a.state_name ? ` [${a.state_name}]` : "";
      opt.textContent = `🏢 ${a.name}${stTag} (${a.elevation_m}m MSL)`;
      areaSelect.appendChild(opt);
    });

    areaSelect.addEventListener("change", (e) => {
      this.onAreaChanged(e.target.value);
    });
  }

  closeInspector() {
    const workspace = document.querySelector(".app-workspace");
    if (workspace) {
      workspace.classList.add("inspector-hidden");
    }
    const panel = document.getElementById("inspector-panel");
    if (panel) {
      panel.classList.remove("active");
      panel.style.display = "none";
    }
    this.currentAreaId = null;
    if (this.map) {
      setTimeout(() => this.map.invalidateSize(), 150);
    }
  }

  openInspector(areaId) {
    const workspace = document.querySelector(".app-workspace");
    if (workspace) {
      workspace.classList.remove("inspector-hidden");
    }
    const panel = document.getElementById("inspector-panel");
    if (panel) {
      panel.classList.add("active");
      panel.style.display = "flex";
    }
    this.renderZoneDetails(areaId);
    if (this.map) {
      setTimeout(() => this.map.invalidateSize(), 150);
    }
  }

  async onDistrictChanged(selectionKey) {
    this.currentDistrictId = selectionKey;

    let activeAreas = [];
    let groupTitle = "All Areas";
    let targetZoom = 11;
    let targetCenter = [13.04, 80.22];

    if (selectionKey === "ALL_INDIA") {
      // Include representative hotspots from across every state in India
      INDIA_DATA.forEach(d => activeAreas.push(...d.areas));
      groupTitle = "All India National Hotspots";
      targetCenter = [22.8, 79.5];
      targetZoom = 5;
      this.closeInspector(); // DO NOT force open any single place on overall India
    } else if (selectionKey === "ALL_TN") {
      INDIA_DATA.filter(d => d.state_code === "TN").forEach(d => activeAreas.push(...d.areas));
      groupTitle = "All Tamil Nadu Places";
      targetCenter = [11.1271, 78.6569];
      targetZoom = 7;
      this.closeInspector();
    } else if (selectionKey.startsWith("STATE_")) {
      const stateMap = {
        "STATE_MH": "Maharashtra",
        "STATE_DL": "Delhi NCR",
        "STATE_KL": "Kerala",
        "STATE_KA": "Karnataka",
        "STATE_WB": "West Bengal",
        "STATE_AS": "Assam",
        "STATE_TG": "Telangana",
        "STATE_AP": "Andhra Pradesh",
        "STATE_OD": "Odisha",
        "STATE_GJ": "Gujarat",
        "STATE_UP": "Uttar Pradesh",
        "STATE_BR": "Bihar",
        "STATE_HIM": ["Uttarakhand", "Himachal Pradesh"],
        "STATE_JK": "Jammu & Kashmir"
      };
      const targetState = stateMap[selectionKey];
      const matched = INDIA_DATA.filter(d => {
        if (Array.isArray(targetState)) return targetState.includes(d.state_name);
        return d.state_name === targetState;
      });
      matched.forEach(d => activeAreas.push(...d.areas));
      groupTitle = `All ${Array.isArray(targetState) ? 'Himalayan' : targetState} Nodes`;
      if (matched.length > 0) {
        targetCenter = [matched[0].center_lat, matched[0].center_lng];
        targetZoom = matched[0].zoom ? Math.max(7, matched[0].zoom - 2) : 7;
      }
      this.closeInspector();
    } else {
      const district = INDIA_DATA.find(d => d.district_id === selectionKey);
      if (district) {
        activeAreas = district.areas;
        groupTitle = `${district.district_name} Areas`;
        targetCenter = [district.center_lat, district.center_lng];
        targetZoom = district.zoom || 11;
      }
      // If a single district with 1-3 places is picked, open inspector on the 1st place
      if (activeAreas.length > 0 && activeAreas.length <= 4) {
        this.openInspector(activeAreas[0].area_id);
      } else {
        this.closeInspector();
      }
    }

    this.map.flyTo(targetCenter, targetZoom, { duration: 0.9 });
    this.populateAreaDropdown(activeAreas, groupTitle);

    // Clear old map layers
    Object.values(this.markers).forEach(m => m.remove());
    Object.values(this.polygons).forEach(p => p.remove());
    this.markers = {};
    this.polygons = {};

    // Render area markers
    activeAreas.forEach(a => {
      const circleRadius = (selectionKey === "ALL_INDIA" || selectionKey === "ALL_TN") ? 3500 : 1400;
      const circle = L.circle([a.latitude, a.longitude], {
        radius: circleRadius,
        color: "#ef4444",
        weight: 1.5,
        fillColor: "#ef4444",
        fillOpacity: 0.3
      }).addTo(this.map);

      circle.on("click", () => {
        this.selectZone(a.area_id);
      });
      this.polygons[a.area_id] = circle;

      const pinLabel = a.name.replace(/[^a-zA-Z]/g, "").substring(0, 3).toUpperCase();
      const pinIcon = L.divIcon({
        className: "custom-zone-marker",
        html: `<div class="zone-marker-pin pin-danger" id="marker-pin-${a.area_id}">${pinLabel}</div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      });

      const marker = L.marker([a.latitude, a.longitude], { icon: pinIcon }).addTo(this.map);
      marker.on("click", () => {
        this.selectZone(a.area_id);
      });
      this.markers[a.area_id] = marker;
    });

    await this.calculatePredictions(activeAreas);
  }

  onAreaChanged(areaId) {
    if (areaId === "ALL") {
      this.closeInspector();
      const group = new L.featureGroup(Object.values(this.markers));
      if (group.getLayers().length > 0) {
        this.map.fitBounds(group.getBounds().pad(0.12));
      }
    } else {
      this.selectZone(areaId);
    }
  }

  getActiveAreas() {
    if (this.currentDistrictId === "ALL_INDIA") {
      const all = [];
      INDIA_DATA.forEach(d => all.push(...d.areas));
      return all;
    } else if (this.currentDistrictId === "ALL_TN") {
      const all = [];
      INDIA_DATA.filter(d => d.state_code === "TN").forEach(d => all.push(...d.areas));
      return all;
    } else if (this.currentDistrictId.startsWith("STATE_")) {
      const all = [];
      INDIA_DATA.forEach(d => {
        all.push(...d.areas);
      });
      return all;
    } else {
      const d = INDIA_DATA.find(x => x.district_id === this.currentDistrictId);
      return d ? d.areas : [];
    }
  }

  async calculatePredictions(areas) {
    let results = [];
    try {
      const response = await fetch("/v1/predict/batch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rain_1h_mm: parseFloat(this.rain1h),
          rain_24h_mm: parseFloat(this.rain24h),
          rain_3d_mm: parseFloat(this.rain3d),
          temperature_c: parseFloat(this.temperature),
          humidity_pct: parseFloat(this.humidity)
        })
      });

      if (response.ok) {
        const jsonRes = await response.json();
        const resMap = {};
        (jsonRes.predictions || []).forEach(p => { resMap[p.area_id] = p; });
        results = areas.map(a => resMap[a.area_id] || this.simulateSingleClient(a));
      }
    } catch (e) {
      console.warn("Using client-side fallback simulation:", e);
    }

    if (!results || results.length === 0) {
      results = areas.map(a => this.simulateSingleClient(a));
    }

    let highCount = 0;
    let modCount = 0;
    let lowCount = 0;

    results.forEach(pred => {
      this.currentPredictions[pred.area_id] = pred;

      if (pred.risk_band === "HIGH") highCount++;
      else if (pred.risk_band === "MODERATE") modCount++;
      else lowCount++;

      const poly = this.polygons[pred.area_id];
      const pin = document.getElementById(`marker-pin-${pred.area_id}`);

      let color = "#10b981";
      let fillOp = 0.25;
      let pinClass = "pin-safe";

      if (pred.risk_probability >= 0.65) {
        color = "#ef4444";
        fillOp = 0.45;
        pinClass = "pin-danger";
      } else if (pred.risk_probability >= 0.25) {
        color = "#f59e0b";
        fillOp = 0.32;
        pinClass = "pin-warning";
      }

      if (poly) {
        poly.setStyle({ color: color, fillColor: color, fillOpacity: fillOp });
      }
      if (pin) {
        pin.className = `zone-marker-pin ${pinClass}`;
      }
    });

    document.getElementById("kpi-high-count").textContent = highCount;
    document.getElementById("kpi-mod-count").textContent = modCount;
    document.getElementById("kpi-low-count").textContent = lowCount;

    // Update Threat Overview Title
    const kpiHeader = document.getElementById("kpi-header-title");
    if (kpiHeader) {
      let dName = "National";
      if (this.currentDistrictId === "ALL_INDIA") dName = "India National";
      else if (this.currentDistrictId === "ALL_TN") dName = "Tamil Nadu Statewide";
      else {
        const matched = INDIA_DATA.find(d => d.district_id === this.currentDistrictId);
        dName = matched ? matched.district_name : "Regional";
      }
      kpiHeader.textContent = `${dName} Threat Overview (${results.length} Nodes)`;
    }

    // Update Banner Tag
    const bannerTag = document.getElementById("banner-region-tag");
    if (bannerTag) {
      let bLabel = "India National Grid";
      if (this.currentDistrictId === "ALL_TN") bLabel = "Tamil Nadu Grid";
      else if (this.currentDistrictId !== "ALL_INDIA") {
        const matched = INDIA_DATA.find(d => d.district_id === this.currentDistrictId);
        bLabel = matched ? `${matched.district_name} Region` : "Regional Grid";
      }
      bannerTag.textContent = bLabel;
    }

    if (this.currentAreaId && this.currentAreaId !== "ALL") {
      this.renderZoneDetails(this.currentAreaId);
    }
  }

  simulateSingleClient(zone) {
    const rainPressure = (this.rain24h * 0.45) + (this.rain1h * 0.35) + (this.rain3d * 0.20);
    const elev = zone.elevation_m || 10.0;
    const terrainFactor = (35.0 - Math.min(35.0, elev)) / 35.0;
    const distWater = zone.distance_to_water_m || 400.0;
    const proximityFactor = Math.max(0.0, (1500.0 - distWater) / 1500.0);
    const impervious = (zone.impervious_surface_pct || 60.0) / 100.0;
    const drainage = zone.drainage_capacity_index || 0.4;
    const baseVuln = zone.base_flood_vulnerability || 0.8;

    let score = (rainPressure / 320.0) * 0.48 +
                (terrainFactor * 0.18) +
                (proximityFactor * 0.12) +
                (impervious * 0.12) +
                ((1.0 - drainage) * 0.10);

    score = score * (baseVuln / 0.85);
    const prob = Math.min(1.0, Math.max(0.0, score));

    let band = "LOW";
    let badgeColor = "#10b981";
    let severity = "Normal surface runoff within drainage capacity";

    if (prob >= 0.65) {
      band = "HIGH";
      badgeColor = "#ef4444";
      severity = "Severe flood threat - inundation probable";
    } else if (prob >= 0.25) {
      band = "MODERATE";
      badgeColor = "#f59e0b";
      severity = "Waterlogging likely in low-lying corridors";
    }

    return {
      area_id: zone.area_id,
      area_name: zone.name,
      district_name: zone.district_name || "Regional",
      state_name: zone.state_name || "Tamil Nadu",
      risk_probability: prob,
      risk_band: band,
      badge_color: badgeColor,
      severity_description: severity,
      factor_contributions: [
        { feature: "rain_24h_mm", label: "24-hour rainfall total", value: `${this.rain24h} mm`, impact_score: (this.rain24h * 0.0105).toFixed(3) },
        { feature: "runoff_index", label: "Surface runoff potential", value: `${(this.rain24h * (impervious / (drainage + 0.1))).toFixed(1)}`, impact_score: "0.553" },
        { feature: "rain_3d_mm", label: "3-day antecedent rainfall", value: `${this.rain3d} mm`, impact_score: "0.035" },
        { feature: "flow_accumulation", label: "Catchment flow convergence", value: `${zone.flow_acc || 1200}`, impact_score: "0.009" },
        { feature: "rain_1h_mm", label: "1-hour cloudburst intensity", value: `${this.rain1h} mm`, impact_score: "0.007" }
      ]
    };
  }

  selectZone(areaId) {
    this.currentAreaId = areaId;

    let targetZone = null;
    INDIA_DATA.forEach(d => {
      const f = d.areas.find(a => a.area_id === areaId);
      if (f) targetZone = f;
    });

    if (!targetZone) return;

    this.map.flyTo([targetZone.latitude, targetZone.longitude], 13, { duration: 0.6 });

    const areaSelect = document.getElementById("select-area");
    if (areaSelect && areaSelect.value !== areaId) {
      areaSelect.value = areaId;
    }

    this.openInspector(areaId);
  }

  renderZoneDetails(areaId) {
    let zone = null;
    INDIA_DATA.forEach(d => {
      const f = d.areas.find(a => a.area_id === areaId);
      if (f) zone = f;
    });
    if (!zone) return;

    const pred = this.currentPredictions[areaId] || this.simulateSingleClient(zone);

    // Safe update of zone card elements matching index.html IDs
    const elId = document.getElementById("detail-zone-id") || document.getElementById("detail-zone-badge");
    if (elId) elId.textContent = zone.area_id;

    const elName = document.getElementById("detail-zone-name");
    if (elName) elName.textContent = zone.name;

    const elGeo = document.getElementById("detail-zone-geo");
    if (elGeo) {
      const stLabel = zone.state_name ? ` • ${zone.state_name}` : "";
      elGeo.textContent = `Lat: ${zone.latitude.toFixed(4)} • Lng: ${zone.longitude.toFixed(4)} • Elevation: ${zone.elevation_m}m MSL${stLabel}`;
    }

    const probPct = Math.round(pred.risk_probability * 100);
    const elPct = document.getElementById("detail-risk-percent") || document.getElementById("detail-prob-val");
    if (elPct) elPct.textContent = `${probPct}%`;

    const circle = document.getElementById("risk-gauge-circle") || document.getElementById("detail-gauge-circle");
    if (circle) {
      const circumference = 2 * Math.PI * 46;
      circle.style.strokeDashoffset = circumference - (pred.risk_probability * circumference);
      circle.style.stroke = pred.badge_color;
    }

    const badge = document.getElementById("detail-risk-badge");
    if (badge) {
      badge.textContent = `${pred.risk_band} RISK`;
      badge.className = `risk-status-badge ${pred.risk_band.toLowerCase()}`;
    }

    const elDesc = document.getElementById("detail-severity-desc");
    if (elDesc) elDesc.textContent = pred.severity_description;

    const factorsContainer = document.getElementById("factor-bars-container") || document.getElementById("detail-shap-factors");
    if (factorsContainer) {
      factorsContainer.innerHTML = "";
      const factors = pred.factor_contributions || [];
      factors.forEach(f => {
        const item = document.createElement("div");
        item.className = "factor-item";
        item.innerHTML = `
          <div class="factor-header">
            <span class="f-label">${f.label}</span>
            <span class="f-val">${f.value} <span class="f-impact">(${f.impact_score} impact)</span></span>
          </div>
          <div class="factor-bar-track">
            <div class="factor-bar-fill" style="width: ${Math.min(100, Math.max(8, Math.abs(parseFloat(f.impact_score || 0.1)) * 34))}%"></div>
          </div>
        `;
        factorsContainer.appendChild(item);
      });
    }

    // Terrain & Drainage attributes
    const elElev = document.getElementById("detail-elevation") || document.getElementById("attr-elev-val");
    if (elElev) elElev.textContent = `${zone.elevation_m} meters`;

    const elWater = document.getElementById("detail-dist-water") || document.getElementById("attr-water-val");
    if (elWater) elWater.textContent = `${zone.distance_to_water_m || 350}m (${zone.water_body || 'Major Drain'})`;

    const elImp = document.getElementById("detail-impervious") || document.getElementById("attr-impervious-val");
    if (elImp) elImp.textContent = `${zone.impervious_surface_pct || 75}%`;

    const elDrain = document.getElementById("detail-drainage") || document.getElementById("attr-drainage-val");
    if (elDrain) elDrain.textContent = `${zone.drainage_capacity_index || 0.4} (Restricted)`;
  }

  bindEvents() {
    const sliderR24 = document.getElementById("input-rain-24h");
    const sliderR1h = document.getElementById("input-rain-1h");
    const sliderR3d = document.getElementById("input-rain-3d");

    sliderR24.addEventListener("input", (e) => {
      this.rain24h = parseFloat(e.target.value);
      document.getElementById("val-rain-24h").textContent = `${this.rain24h} mm`;
      if (this.rain3d < this.rain24h) {
        this.rain3d = this.rain24h;
        sliderR3d.value = this.rain3d;
        document.getElementById("val-rain-3d").textContent = `${this.rain3d} mm`;
      }
      this.debouncedRecalculate();
    });

    sliderR1h.addEventListener("input", (e) => {
      this.rain1h = parseFloat(e.target.value);
      document.getElementById("val-rain-1h").textContent = `${this.rain1h} mm`;
      this.debouncedRecalculate();
    });

    sliderR3d.addEventListener("input", (e) => {
      this.rain3d = parseFloat(e.target.value);
      document.getElementById("val-rain-3d").textContent = `${this.rain3d} mm`;
      this.debouncedRecalculate();
    });

    // Preset buttons
    document.querySelectorAll(".preset-pill").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".preset-pill").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const preset = btn.dataset.preset;
        if (preset === "cyclone_michaung") {
          this.setPrecipitation(280.0, 65.0, 390.0, 25.5, 94);
        } else if (preset === "northeast_monsoon") {
          this.setPrecipitation(95.0, 28.0, 140.0, 26.0, 88);
        } else if (preset === "localized_cloudburst") {
          this.setPrecipitation(25.0, 12.0, 35.0, 28.0, 75);
        } else if (preset === "dry_baseline") {
          this.setPrecipitation(0, 0, 0, 31.0, 65);
        }
      });
    });

    document.getElementById("btn-recalculate").addEventListener("click", () => {
      const areas = this.getActiveAreas();
      this.calculatePredictions(areas);
    });

    // Close / Delete Inspector Button
    const btnClose = document.getElementById("btn-close-inspector");
    if (btnClose) {
      btnClose.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.closeInspector();
      });
    }

    // Global Search across India
    const searchInput = document.getElementById("input-zone-search");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        const q = e.target.value.toLowerCase().trim();
        if (q.length < 2) return;

        for (const d of INDIA_DATA) {
          // If search matches area
          const found = d.areas.find(z => z.name.toLowerCase().includes(q) || z.area_id.toLowerCase().includes(q));
          if (found) {
            const distSelect = document.getElementById("select-district");
            if (distSelect && distSelect.value !== d.district_id) {
              distSelect.value = d.district_id;
              this.onDistrictChanged(d.district_id).then(() => {
                this.selectZone(found.area_id);
              });
            } else {
              this.selectZone(found.area_id);
            }
            return;
          }
          // If search matches district name
          if (d.district_name.toLowerCase().includes(q)) {
            const distSelect = document.getElementById("select-district");
            if (distSelect && distSelect.value !== d.district_id) {
              distSelect.value = d.district_id;
              this.onDistrictChanged(d.district_id);
              return;
            }
          }
        }
      });
    }
  }

  setPrecipitation(r24, r1h, r3d, temp, hum) {
    this.rain24h = r24;
    this.rain1h = r1h;
    this.rain3d = r3d;
    this.temperature = temp;
    this.humidity = hum;

    document.getElementById("input-rain-24h").value = r24;
    document.getElementById("val-rain-24h").textContent = `${r24} mm`;
    document.getElementById("input-rain-1h").value = r1h;
    document.getElementById("val-rain-1h").textContent = `${r1h} mm`;
    document.getElementById("input-rain-3d").value = r3d;
    document.getElementById("val-rain-3d").textContent = `${r3d} mm`;
    document.getElementById("val-temp").textContent = `${temp.toFixed(1)}°C`;
    document.getElementById("val-humidity").textContent = `${Math.round(hum)}%`;

    const areas = this.getActiveAreas();
    this.calculatePredictions(areas);
  }

  debouncedRecalculate() {
    clearTimeout(this.recalcTimeout);
    this.recalcTimeout = setTimeout(() => {
      const areas = this.getActiveAreas();
      this.calculatePredictions(areas);
    }, 200);
  }

  initModals() {
    const setupModal = (btnId, modalId, closeBtnId) => {
      const btn = document.getElementById(btnId);
      const modal = document.getElementById(modalId);
      const closeBtn = document.getElementById(closeBtnId);

      if (btn && modal) {
        btn.addEventListener("click", () => modal.classList.add("active"));
      }
      if (closeBtn && modal) {
        closeBtn.addEventListener("click", () => modal.classList.remove("active"));
      }
      if (modal) {
        modal.addEventListener("click", (e) => {
          if (e.target === modal) modal.classList.remove("active");
        });
      }
    };

    setupModal("btn-model-card", "modal-model-card", "btn-close-model-card");
    setupModal("btn-live-weather", "modal-weather-feed", "btn-close-weather");
    setupModal("btn-emergency", "modal-emergency", "btn-close-emergency");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.floodApp = new FloodGuardApp();
  window.floodApp.init();
});
