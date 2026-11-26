/**
 * FLOODGUARD AI • Tamil Nadu 38-District Early Warning Platform
 * Real-time simulation, SHAP explainability, and multi-district place selection.
 */

const TN_DISTRICTS = [
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
        "base_flood_vulnerability": 0.58
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
        "base_flood_vulnerability": 0.72
      }
    ]
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
        "base_flood_vulnerability": 0.68
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
        "base_flood_vulnerability": 0.38
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
        "base_flood_vulnerability": 0.46
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
        "base_flood_vulnerability": 0.79
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
        "base_flood_vulnerability": 0.74
      }
    ]
  },
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
        "base_flood_vulnerability": 0.88
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
        "base_flood_vulnerability": 0.85
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
        "base_flood_vulnerability": 0.7
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
        "base_flood_vulnerability": 0.75
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
        "base_flood_vulnerability": 0.35
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
        "base_flood_vulnerability": 0.48
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
        "base_flood_vulnerability": 0.82
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
        "base_flood_vulnerability": 0.72
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
        "base_flood_vulnerability": 0.78
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
        "base_flood_vulnerability": 0.28
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
        "base_flood_vulnerability": 0.42
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
        "base_flood_vulnerability": 0.79
      }
    ]
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
        "base_flood_vulnerability": 0.55
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
        "base_flood_vulnerability": 0.72
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
        "base_flood_vulnerability": 0.81
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
        "base_flood_vulnerability": 0.42
      }
    ]
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
        "base_flood_vulnerability": 0.92
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
        "base_flood_vulnerability": 0.88
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
        "base_flood_vulnerability": 0.45
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
        "base_flood_vulnerability": 0.81
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
        "base_flood_vulnerability": 0.86
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
        "base_flood_vulnerability": 0.84
      }
    ]
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
        "base_flood_vulnerability": 0.4
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
        "base_flood_vulnerability": 0.92
      }
    ]
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
        "base_flood_vulnerability": 0.44
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
        "base_flood_vulnerability": 0.56
      }
    ]
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
        "base_flood_vulnerability": 0.66
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
        "base_flood_vulnerability": 0.85
      }
    ]
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
        "base_flood_vulnerability": 0.62
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
        "base_flood_vulnerability": 0.68
      }
    ]
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
        "base_flood_vulnerability": 0.52
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
        "base_flood_vulnerability": 0.44
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
        "base_flood_vulnerability": 0.84
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
        "base_flood_vulnerability": 0.62
      }
    ]
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
        "base_flood_vulnerability": 0.72
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
        "base_flood_vulnerability": 0.89
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
        "base_flood_vulnerability": 0.87
      }
    ]
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
        "base_flood_vulnerability": 0.75
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
        "base_flood_vulnerability": 0.81
      }
    ]
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
        "base_flood_vulnerability": 0.58
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
        "base_flood_vulnerability": 0.48
      }
    ]
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
        "base_flood_vulnerability": 0.62
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
        "base_flood_vulnerability": 0.84
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
        "base_flood_vulnerability": 0.47
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
        "base_flood_vulnerability": 0.39
      }
    ]
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
        "base_flood_vulnerability": 0.76
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
        "base_flood_vulnerability": 0.89
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
        "base_flood_vulnerability": 0.93
      }
    ]
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
        "base_flood_vulnerability": 0.94
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
        "base_flood_vulnerability": 0.91
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
        "base_flood_vulnerability": 0.96
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
        "base_flood_vulnerability": 0.82
      }
    ]
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
        "base_flood_vulnerability": 0.42
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
        "base_flood_vulnerability": 0.82
      }
    ]
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
        "base_flood_vulnerability": 0.65
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
        "base_flood_vulnerability": 0.74
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
        "base_flood_vulnerability": 0.79
      }
    ]
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
        "base_flood_vulnerability": 0.48
      }
    ]
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
        "base_flood_vulnerability": 0.54
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
        "base_flood_vulnerability": 0.72
      }
    ]
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
        "base_flood_vulnerability": 0.82
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
        "base_flood_vulnerability": 0.86
      }
    ]
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
        "base_flood_vulnerability": 0.66
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
        "base_flood_vulnerability": 0.58
      }
    ]
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
        "base_flood_vulnerability": 0.6
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
        "base_flood_vulnerability": 0.78
      }
    ]
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
        "base_flood_vulnerability": 0.48
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
        "base_flood_vulnerability": 0.52
      }
    ]
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
        "base_flood_vulnerability": 0.74
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
        "base_flood_vulnerability": 0.82
      }
    ]
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
        "base_flood_vulnerability": 0.48
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
        "base_flood_vulnerability": 0.74
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
        "base_flood_vulnerability": 0.78
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
        "base_flood_vulnerability": 0.65
      }
    ]
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
        "base_flood_vulnerability": 0.62
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
        "base_flood_vulnerability": 0.68
      }
    ]
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
        "base_flood_vulnerability": 0.93
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
        "base_flood_vulnerability": 0.96
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
        "base_flood_vulnerability": 0.76
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
        "base_flood_vulnerability": 0.41
      }
    ]
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
        "base_flood_vulnerability": 0.58
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
        "base_flood_vulnerability": 0.89
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
        "base_flood_vulnerability": 0.82
      }
    ]
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
        "base_flood_vulnerability": 0.88
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
        "base_flood_vulnerability": 0.81
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
        "base_flood_vulnerability": 0.72
      }
    ]
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
        "base_flood_vulnerability": 0.46
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
        "base_flood_vulnerability": 0.78
      }
    ]
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
        "base_flood_vulnerability": 0.7
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
        "base_flood_vulnerability": 0.62
      }
    ]
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
        "base_flood_vulnerability": 0.58
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
        "base_flood_vulnerability": 0.54
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
        "base_flood_vulnerability": 0.83
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
        "base_flood_vulnerability": 0.71
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
        "base_flood_vulnerability": 0.22
      }
    ]
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
        "base_flood_vulnerability": 0.46
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
        "base_flood_vulnerability": 0.71
      }
    ]
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
        "base_flood_vulnerability": 0.79
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
        "base_flood_vulnerability": 0.69
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
        "base_flood_vulnerability": 0.9
      }
    ]
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
        "base_flood_vulnerability": 0.64
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
        "base_flood_vulnerability": 0.48
      }
    ]
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
        "base_flood_vulnerability": 0.72
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
        "base_flood_vulnerability": 0.54
      }
    ]
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
        "base_flood_vulnerability": 0.56
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
        "base_flood_vulnerability": 0.52
      }
    ]
  }
];

class FloodGuardApp {
  constructor() {
    this.map = null;
    this.markers = {};
    this.polygons = {};
    this.currentDistrictId = "TN-CHN";
    this.currentAreaId = "ALL";
    this.currentPredictions = {};

    this.rain24h = 180;
    this.rain1h = 45;
    this.rain3d = 260;
    this.temperature = 26.5;
    this.humidity = 88;

    this.apiBase = window.location.origin;

    this.init();
  }

  async init() {
    this.initMap();
    this.populateDistrictDropdown();
    this.initControls();
    this.initModals();
    this.initSearch();
    this.initMobileNav();

    await this.onDistrictChanged(this.currentDistrictId);
  }

  initMap() {
    this.map = L.map("gis-map", {
      zoomControl: false,
      attributionControl: false
    }).setView([13.04, 80.22], 12);

    L.control.zoom({ position: "bottomright" }).addTo(this.map);

    // Free OpenStreetMap with tactical dark styling (Zero watermark, zero API key)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      subdomains: ["a", "b", "c"]
    }).addTo(this.map);
  }

  populateDistrictDropdown() {
    const distSelect = document.getElementById("select-district");
    if (!distSelect) return;

    distSelect.innerHTML = "";

    // Statewide view option
    const allOpt = document.createElement("option");
    allOpt.value = "ALL_TN";
    allOpt.textContent = "🌟 All Tamil Nadu (38 Districts)";
    distSelect.appendChild(allOpt);

    // 38 Districts of Tamil Nadu
    TN_DISTRICTS.forEach(d => {
      const opt = document.createElement("option");
      opt.value = d.district_id;
      opt.textContent = `📍 ${d.district_name} (${d.areas.length} Places)`;
      if (d.district_id === "TN-CHN") opt.selected = true;
      distSelect.appendChild(opt);
    });

    distSelect.addEventListener("change", (e) => {
      this.onDistrictChanged(e.target.value);
    });
  }

  populateAreaDropdown(areas) {
    const areaSelect = document.getElementById("select-area");
    if (!areaSelect) return;

    areaSelect.innerHTML = "";

    // "Select All Areas" option
    const allAreaOpt = document.createElement("option");
    allAreaOpt.value = "ALL";
    allAreaOpt.textContent = `⚡ All Areas in District (${areas.length} Places Selected)`;
    allAreaOpt.selected = true;
    areaSelect.appendChild(allAreaOpt);

    areas.forEach(a => {
      const opt = document.createElement("option");
      opt.value = a.area_id;
      opt.textContent = `🏢 ${a.name} (${a.elevation_m}m MSL)`;
      areaSelect.appendChild(opt);
    });

    areaSelect.addEventListener("change", (e) => {
      this.onAreaChanged(e.target.value);
    });
  }

  async onDistrictChanged(districtId) {
    this.currentDistrictId = districtId;

    let activeAreas = [];
    if (districtId === "ALL_TN") {
      TN_DISTRICTS.forEach(d => activeAreas.push(...d.areas));
      this.map.flyTo([11.1271, 78.6569], 7, { duration: 1.0 });
    } else {
      const district = TN_DISTRICTS.find(d => d.district_id === districtId);
      if (district) {
        activeAreas = district.areas;
        this.map.flyTo([district.center_lat, district.center_lng], district.zoom || 11, { duration: 0.8 });
      }
    }

    this.populateAreaDropdown(activeAreas);
    this.currentAreaId = "ALL";

    // Clear old layers
    Object.values(this.markers).forEach(m => m.remove());
    Object.values(this.polygons).forEach(p => p.remove());
    this.markers = {};
    this.polygons = {};

    // Render district area markers
    activeAreas.forEach(a => {
      const circle = L.circle([a.latitude, a.longitude], {
        radius: 1400,
        color: "#ef4444",
        weight: 1.5,
        fillColor: "#ef4444",
        fillOpacity: 0.3
      }).addTo(this.map);

      circle.on("click", () => this.selectZone(a.area_id));
      this.polygons[a.area_id] = circle;

      const pinLabel = a.name.replace(/[^a-zA-Z]/g, "").substring(0, 3).toUpperCase();
      const pinIcon = L.divIcon({
        className: "custom-zone-marker",
        html: `<div class="zone-marker-pin pin-danger" id="marker-pin-${a.area_id}">${pinLabel}</div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      });

      const marker = L.marker([a.latitude, a.longitude], { icon: pinIcon }).addTo(this.map);
      marker.on("click", () => this.selectZone(a.area_id));
      this.markers[a.area_id] = marker;
    });

    await this.calculatePredictions(activeAreas);

    if (activeAreas.length > 0) {
      this.renderZoneDetails(activeAreas[0].area_id);
    }
  }

  onAreaChanged(areaId) {
    this.currentAreaId = areaId;
    if (areaId === "ALL") {
      const group = new L.featureGroup(Object.values(this.markers));
      if (group.getLayers().length > 0) {
        this.map.fitBounds(group.getBounds().pad(0.15));
      }
    } else {
      this.selectZone(areaId);
    }
  }

  getActiveAreas() {
    if (this.currentDistrictId === "ALL_TN") {
      const all = [];
      TN_DISTRICTS.forEach(d => all.push(...d.areas));
      return all;
    }
    const d = TN_DISTRICTS.find(x => x.district_id === this.currentDistrictId);
    return d ? d.areas : [];
  }

  initControls() {
    const s24h = document.getElementById("input-rain-24h");
    const s1h = document.getElementById("input-rain-1h");
    const s3d = document.getElementById("input-rain-3d");

    const v24h = document.getElementById("val-rain-24h");
    const v1h = document.getElementById("val-rain-1h");
    const v3d = document.getElementById("val-rain-3d");

    let debounceTimer = null;
    const triggerRecalc = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const areas = this.getActiveAreas();
        this.calculatePredictions(areas);
      }, 80);
    };

    s24h.addEventListener("input", (e) => {
      this.rain24h = parseFloat(e.target.value);
      v24h.textContent = `${this.rain24h} mm`;
      if (this.rain3d < this.rain24h) {
        this.rain3d = this.rain24h * 1.3;
        s3d.value = this.rain3d;
        v3d.textContent = `${Math.round(this.rain3d)} mm`;
      }
      triggerRecalc();
    });

    s1h.addEventListener("input", (e) => {
      this.rain1h = parseFloat(e.target.value);
      v1h.textContent = `${this.rain1h} mm`;
      triggerRecalc();
    });

    s3d.addEventListener("input", (e) => {
      this.rain3d = parseFloat(e.target.value);
      v3d.textContent = `${this.rain3d} mm`;
      triggerRecalc();
    });

    document.querySelectorAll(".preset-chip").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".preset-chip").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const preset = btn.dataset.preset;
        if (preset === "cyclone_michaung") {
          this.setPrecipitation(280, 65, 390, 25.5, 94);
        } else if (preset === "heavy_monsoon") {
          this.setPrecipitation(95, 28, 140, 26.5, 88);
        } else if (preset === "isolated_shower") {
          this.setPrecipitation(25, 12, 35, 29.0, 78);
        } else if (preset === "dry_baseline") {
          this.setPrecipitation(0, 0, 0, 31.0, 65);
        }
      });
    });

    document.getElementById("btn-recalculate").addEventListener("click", () => {
      const areas = this.getActiveAreas();
      this.calculatePredictions(areas);
    });

    document.getElementById("btn-close-inspector").addEventListener("click", () => {
      document.getElementById("inspector-panel").classList.remove("active");
    });
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

    document.getElementById("val-temp").textContent = `${temp}°C`;
    document.getElementById("val-humidity").textContent = `${hum}%`;

    const areas = this.getActiveAreas();
    this.calculatePredictions(areas);
  }

  async calculatePredictions(areas) {
    let results = [];
    const targetIds = areas.map(a => a.area_id);

    try {
      const res = await fetch(`${this.apiBase}/v1/predict/batch`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rain_1h_mm: this.rain1h,
          rain_24h_mm: this.rain24h,
          rain_3d_mm: this.rain3d,
          temperature_c: this.temperature,
          humidity_pct: this.humidity,
          area_ids: targetIds
        })
      });

      if (res.ok) {
        results = await res.json();
      }
    } catch (e) {
      results = this.simulateInferenceClientSide(areas);
    }

    if (!results || results.length === 0) {
      results = this.simulateInferenceClientSide(areas);
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

    const kpiHeader = document.getElementById("kpi-header-title");
    if (kpiHeader) {
      const dName = (this.currentDistrictId === "ALL_TN") ? "All Tamil Nadu" : (TN_DISTRICTS.find(d => d.district_id === this.currentDistrictId)?.district_name || "Regional");
      kpiHeader.textContent = `${dName} Threat Overview (${results.length} Places)`;
    }
    const bannerTag = document.getElementById("banner-region-tag");
    if (bannerTag) {
      const dName = (this.currentDistrictId === "ALL_TN") ? "Tamil Nadu Statewide" : (TN_DISTRICTS.find(d => d.district_id === this.currentDistrictId)?.district_name || "Tamil Nadu");
      bannerTag.textContent = `${dName} Region`;
    }

    if (this.currentAreaId && this.currentAreaId !== "ALL") {
      this.renderZoneDetails(this.currentAreaId);
    }
  }

  simulateInferenceClientSide(areas) {
    return areas.map(zone => {
      const rainPressure = (this.rain24h * 0.45) + (this.rain1h * 0.35) + (this.rain3d * 0.20);
      const terrainFactor = (35.0 - Math.min(35.0, zone.elevation_m)) / 35.0;
      const proximityFactor = Math.max(0.0, (1500.0 - (zone.distance_to_water_m || 500)) / 1500.0);
      const runoffIndex = (this.rain24h * ((zone.impervious_surface_pct || 70) / 100.0)) / ((zone.drainage_capacity_index || 0.4) + 0.1);

      const rawIndex = ((rainPressure / 120.0) * 0.55) + (terrainFactor * 0.20) + (proximityFactor * 0.15) + ((runoffIndex / 40.0) * 0.10);
      let prob = 1.0 / (1.0 + Math.exp(-12.0 * (rawIndex - 0.48)));
      prob = Math.min(0.999, Math.max(0.001, prob));
      prob = Math.round(prob * 1000) / 1000;

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
        prediction_id: `FG-${Date.now().toString(36).toUpperCase()}`,
        area_id: zone.area_id,
        area_name: zone.name,
        latitude: zone.latitude,
        longitude: zone.longitude,
        risk_probability: prob,
        risk_percentage: Math.round(prob * 100),
        risk_band: band,
        severity_description: severity,
        badge_color: badgeColor,
        model_version: "floodguard-0.1.0",
        data_timestamp: new Date().toISOString(),
        top_factors: ["rain_24h_mm", "runoff_index", "elevation_m", "flow_accumulation"],
        factor_contributions: [
          { feature: "rain_24h_mm", label: "24h Accumulated Rainfall", value: this.rain24h, impact_score: (this.rain24h / 120.0).toFixed(2) },
          { feature: "runoff_index", label: "Surface Runoff Potential", value: Math.round(runoffIndex), impact_score: (runoffIndex / 40.0).toFixed(2) },
          { feature: "elevation_m", label: "Elevation Above Sea Level", value: zone.elevation_m, impact_score: ((15 - Math.min(15, zone.elevation_m)) / 10).toFixed(2) },
          { feature: "distance_to_water_m", label: "Proximity to Waterbody", value: zone.distance_to_water_m || 400, impact_score: ((1000 - Math.min(1000, zone.distance_to_water_m || 400)) / 1000).toFixed(2) }
        ],
        notice: "Educational prototype estimate; not an official emergency warning."
      };
    });
  }

  selectZone(areaId) {
    this.currentAreaId = areaId;
    const areas = this.getActiveAreas();
    const zone = areas.find(a => a.area_id === areaId);
    if (!zone) return;

    this.map.flyTo([zone.latitude, zone.longitude], 13, { duration: 0.8 });
    this.renderZoneDetails(areaId);

    const areaSelect = document.getElementById("select-area");
    if (areaSelect) areaSelect.value = areaId;

    document.getElementById("inspector-panel").classList.add("active");
  }

  renderZoneDetails(areaId) {
    const areas = this.getActiveAreas();
    const zone = areas.find(a => a.area_id === areaId);
    const pred = this.currentPredictions[areaId];
    if (!zone || !pred) return;

    document.getElementById("detail-zone-id").textContent = zone.area_id;
    document.getElementById("detail-zone-name").textContent = `${zone.name}`;
    document.getElementById("detail-zone-geo").textContent = `Lat: ${zone.latitude.toFixed(4)} • Lng: ${zone.longitude.toFixed(4)} • Elevation: ${zone.elevation_m}m MSL`;

    const pct = Math.round(pred.risk_probability * 100);
    document.getElementById("detail-risk-percent").textContent = `${pct}%`;

    const circle = document.getElementById("risk-gauge-circle");
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (pred.risk_probability * circumference);
    circle.style.strokeDashoffset = offset;
    circle.style.stroke = pred.badge_color;

    const banner = document.getElementById("risk-hero-banner");
    banner.classList.remove("moderate-theme", "low-theme");
    if (pred.risk_band === "MODERATE") banner.classList.add("moderate-theme");
    if (pred.risk_band === "LOW") banner.classList.add("low-theme");

    const badge = document.getElementById("detail-risk-badge");
    badge.textContent = `${pred.risk_band} RISK`;
    badge.className = `risk-status-badge ${pred.risk_band.toLowerCase()}`;
    document.getElementById("detail-severity-desc").textContent = pred.severity_description;

    document.getElementById("detail-elevation").textContent = `${zone.elevation_m} meters`;
    document.getElementById("detail-dist-water").textContent = `${zone.distance_to_water_m || 400}m (${zone.water_body || 'Local Canal'})` ;
    document.getElementById("detail-impervious").textContent = `${zone.impervious_surface_pct || 75}%`;
    document.getElementById("detail-drainage").textContent = `${zone.drainage_capacity_index || 0.45} (${(zone.drainage_capacity_index || 0.45) > 0.5 ? 'Adequate' : 'Restricted'})` ;

    document.getElementById("detail-advisory-text").textContent = zone.advisory || `Emergency flood monitoring active for ${zone.name}. Clear sluice gates and inspect low-lying streets.`;
    document.getElementById("detail-pred-id").textContent = pred.prediction_id;

    const factorsContainer = document.getElementById("factor-bars-container");
    factorsContainer.innerHTML = "";

    const factors = pred.factor_contributions || [];
    factors.forEach(f => {
      const maxScore = Math.max(...factors.map(x => parseFloat(x.impact_score) || 1));
      const fillPct = Math.min(100, Math.max(10, Math.round((parseFloat(f.impact_score) / maxScore) * 100)));

      const item = document.createElement("div");
      item.className = "factor-item";
      item.innerHTML = `
        <div class="factor-top-line">
          <span class="factor-name">${f.label}</span>
          <span class="factor-score">${f.value} (${f.impact_score} impact)</span>
        </div>
        <div class="factor-track">
          <div class="factor-fill" style="width: ${fillPct}%"></div>
        </div>
      `;
      factorsContainer.appendChild(item);
    });
  }

  initSearch() {
    const input = document.getElementById("zone-search-input");
    input.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) return;

      // Search across ALL districts and places in Tamil Nadu!
      for (const d of TN_DISTRICTS) {
        // If matched district name
        if (d.district_name.toLowerCase().includes(q)) {
          const distSelect = document.getElementById("select-district");
          if (distSelect && distSelect.value !== d.district_id) {
            distSelect.value = d.district_id;
            this.onDistrictChanged(d.district_id);
            return;
          }
        }

        // If matched area/place name
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
      }
    });
  }

  initModals() {
    const setupModal = (btnId, modalId, closeId) => {
      const btn = document.getElementById(btnId);
      const modal = document.getElementById(modalId);
      const close = document.getElementById(closeId);

      if (btn && modal && close) {
        btn.addEventListener("click", () => modal.classList.add("open"));
        close.addEventListener("click", () => modal.classList.remove("open"));
        modal.addEventListener("click", (e) => {
          if (e.target === modal) modal.classList.remove("open");
        });
      }
    };

    setupModal("btn-model-card", "modal-model-card", "btn-close-model-card");
    setupModal("btn-live-weather", "modal-weather-feed", "btn-close-weather");
    setupModal("btn-emergency", "modal-emergency", "btn-close-emergency");
  }

  initMobileNav() {
    const btnMap = document.getElementById("mob-nav-map");
    const btnSim = document.getElementById("mob-nav-sim");
    const btnDetails = document.getElementById("mob-nav-details");
    const btnSos = document.getElementById("mob-nav-sos");

    const leftPanel = document.querySelector(".left-control-panel");
    const rightPanel = document.getElementById("inspector-panel");

    btnMap.addEventListener("click", () => {
      document.querySelectorAll(".mob-nav-btn").forEach(b => b.classList.remove("active"));
      btnMap.classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    btnSim.addEventListener("click", () => {
      document.querySelectorAll(".mob-nav-btn").forEach(b => b.classList.remove("active"));
      btnSim.classList.add("active");
      leftPanel.scrollIntoView({ behavior: "smooth" });
    });

    btnDetails.addEventListener("click", () => {
      document.querySelectorAll(".mob-nav-btn").forEach(b => b.classList.remove("active"));
      btnDetails.classList.add("active");
      rightPanel.scrollIntoView({ behavior: "smooth" });
    });

    btnSos.addEventListener("click", () => {
      document.getElementById("btn-emergency").click();
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.floodApp = new FloodGuardApp();
});
