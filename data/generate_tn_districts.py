"""
Generates comprehensive Tamil Nadu 38 districts dataset with realistic taluks/places,
coordinates, elevation, hydrological water bodies, and base vulnerability.
"""

import json
import os

TAMIL_NADU_DISTRICTS = [
    {
        "district_id": "TN-CHN",
        "district_name": "Chennai",
        "region_type": "Coastal Metropolitan",
        "center_lat": 13.0400,
        "center_lng": 80.2200,
        "zoom": 12,
        "areas": [
            {"area_id": "CHN-001", "name": "Velachery", "latitude": 12.9756, "longitude": 80.2206, "elevation_m": 4.2, "slope_deg": 0.8, "flow_acc": 1420.0, "distance_to_water_m": 350.0, "impervious_surface_pct": 78.5, "drainage_capacity_index": 0.35, "water_body": "Pallikaranai Marsh & Velachery Lake", "base_flood_vulnerability": 0.88},
            {"area_id": "CHN-002", "name": "Madipakkam", "latitude": 12.9623, "longitude": 80.1986, "elevation_m": 5.1, "slope_deg": 0.9, "flow_acc": 1280.0, "distance_to_water_m": 420.0, "impervious_surface_pct": 82.0, "drainage_capacity_index": 0.30, "water_body": "Madipakkam Lake", "base_flood_vulnerability": 0.85},
            {"area_id": "CHN-003", "name": "T. Nagar", "latitude": 13.0418, "longitude": 80.2341, "elevation_m": 8.5, "slope_deg": 1.2, "flow_acc": 950.0, "distance_to_water_m": 1200.0, "impervious_surface_pct": 92.0, "drainage_capacity_index": 0.45, "water_body": "Mambalam Canal Outfall", "base_flood_vulnerability": 0.70},
            {"area_id": "CHN-004", "name": "Adyar", "latitude": 13.0012, "longitude": 80.2565, "elevation_m": 5.8, "slope_deg": 1.1, "flow_acc": 1850.0, "distance_to_water_m": 180.0, "impervious_surface_pct": 74.0, "drainage_capacity_index": 0.65, "water_body": "Adyar River Estuary", "base_flood_vulnerability": 0.75},
            {"area_id": "CHN-005", "name": "Tambaram", "latitude": 12.9249, "longitude": 80.1000, "elevation_m": 22.0, "slope_deg": 3.4, "flow_acc": 620.0, "distance_to_water_m": 1500.0, "impervious_surface_pct": 65.0, "drainage_capacity_index": 0.55, "water_body": "Selaiyur Lake", "base_flood_vulnerability": 0.35},
            {"area_id": "CHN-006", "name": "Mylapore", "latitude": 13.0368, "longitude": 80.2676, "elevation_m": 7.4, "slope_deg": 1.3, "flow_acc": 710.0, "distance_to_water_m": 800.0, "impervious_surface_pct": 88.0, "drainage_capacity_index": 0.50, "water_body": "Buckingham Canal Cut", "base_flood_vulnerability": 0.48},
            {"area_id": "CHN-007", "name": "Saidapet", "latitude": 13.0213, "longitude": 80.2231, "elevation_m": 6.0, "slope_deg": 1.0, "flow_acc": 1650.0, "distance_to_water_m": 220.0, "impervious_surface_pct": 84.0, "drainage_capacity_index": 0.40, "water_body": "Adyar River Causeway", "base_flood_vulnerability": 0.82},
            {"area_id": "CHN-008", "name": "Sholinganallur", "latitude": 12.9010, "longitude": 80.2279, "elevation_m": 4.8, "slope_deg": 0.7, "flow_acc": 1350.0, "distance_to_water_m": 450.0, "impervious_surface_pct": 76.0, "drainage_capacity_index": 0.48, "water_body": "Buckingham Canal & Okkiyam", "base_flood_vulnerability": 0.72},
            {"area_id": "CHN-009", "name": "Perambur", "latitude": 13.1075, "longitude": 80.2337, "elevation_m": 6.8, "slope_deg": 0.9, "flow_acc": 1100.0, "distance_to_water_m": 650.0, "impervious_surface_pct": 86.0, "drainage_capacity_index": 0.38, "water_body": "Otteri Nullah Catchment", "base_flood_vulnerability": 0.78},
            {"area_id": "CHN-010", "name": "Anna Nagar", "latitude": 13.0850, "longitude": 80.2101, "elevation_m": 12.5, "slope_deg": 2.1, "flow_acc": 510.0, "distance_to_water_m": 1800.0, "impervious_surface_pct": 80.0, "drainage_capacity_index": 0.72, "water_body": "Cooum River Diversion", "base_flood_vulnerability": 0.28},
            {"area_id": "CHN-011", "name": "Ambattur", "latitude": 13.1143, "longitude": 80.1548, "elevation_m": 14.0, "slope_deg": 1.8, "flow_acc": 780.0, "distance_to_water_m": 900.0, "impervious_surface_pct": 75.0, "drainage_capacity_index": 0.52, "water_body": "Ambattur Lake", "base_flood_vulnerability": 0.42},
            {"area_id": "CHN-012", "name": "Kolathur", "latitude": 13.1242, "longitude": 80.2155, "elevation_m": 7.0, "slope_deg": 0.8, "flow_acc": 1240.0, "distance_to_water_m": 500.0, "impervious_surface_pct": 85.0, "drainage_capacity_index": 0.36, "water_body": "Retteri Lake & Thanikachalam Drain", "base_flood_vulnerability": 0.79}
        ]
    },
    {
        "district_id": "TN-CUD",
        "district_name": "Cuddalore",
        "region_type": "Coastal River Basin",
        "center_lat": 11.7480,
        "center_lng": 79.7714,
        "zoom": 11,
        "areas": [
            {"area_id": "CUD-001", "name": "Cuddalore Port", "latitude": 11.7120, "longitude": 79.7750, "elevation_m": 3.2, "slope_deg": 0.5, "flow_acc": 1950.0, "distance_to_water_m": 120.0, "impervious_surface_pct": 68.0, "drainage_capacity_index": 0.32, "water_body": "Uppanar River & Bay of Bengal", "base_flood_vulnerability": 0.92},
            {"area_id": "CUD-002", "name": "Chidambaram", "latitude": 11.3992, "longitude": 79.6936, "elevation_m": 5.4, "slope_deg": 0.6, "flow_acc": 1820.0, "distance_to_water_m": 280.0, "impervious_surface_pct": 62.0, "drainage_capacity_index": 0.38, "water_body": "Coleroon River & Khan Sahib Canal", "base_flood_vulnerability": 0.88},
            {"area_id": "CUD-003", "name": "Panruti", "latitude": 11.7700, "longitude": 79.5500, "elevation_m": 32.0, "slope_deg": 2.2, "flow_acc": 850.0, "distance_to_water_m": 950.0, "impervious_surface_pct": 52.0, "drainage_capacity_index": 0.55, "water_body": "Gadilam River Upper Bank", "base_flood_vulnerability": 0.45},
            {"area_id": "CUD-004", "name": "Kurinjipadi", "latitude": 11.5667, "longitude": 79.6000, "elevation_m": 8.1, "slope_deg": 0.9, "flow_acc": 1420.0, "distance_to_water_m": 390.0, "impervious_surface_pct": 58.0, "drainage_capacity_index": 0.35, "water_body": "Perumal Lake Catchment", "base_flood_vulnerability": 0.81},
            {"area_id": "CUD-005", "name": "Bhuvanagiri", "latitude": 11.4667, "longitude": 79.6500, "elevation_m": 6.2, "slope_deg": 0.7, "flow_acc": 1780.0, "distance_to_water_m": 210.0, "impervious_surface_pct": 60.0, "drainage_capacity_index": 0.34, "water_body": "Vellar River Basin", "base_flood_vulnerability": 0.86},
            {"area_id": "CUD-006", "name": "Kattumannarkoil", "latitude": 11.2740, "longitude": 79.5550, "elevation_m": 7.5, "slope_deg": 0.8, "flow_acc": 1690.0, "distance_to_water_m": 320.0, "impervious_surface_pct": 55.0, "drainage_capacity_index": 0.36, "water_body": "Veeranam Lake Tail-End", "base_flood_vulnerability": 0.84}
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
            {"area_id": "TLR-001", "name": "Avadi", "latitude": 13.1147, "longitude": 80.1008, "elevation_m": 16.0, "slope_deg": 1.4, "flow_acc": 920.0, "distance_to_water_m": 600.0, "impervious_surface_pct": 74.0, "drainage_capacity_index": 0.48, "water_body": "Paruthipattu Lake", "base_flood_vulnerability": 0.58},
            {"area_id": "TLR-002", "name": "Poonamallee", "latitude": 13.0489, "longitude": 80.0967, "elevation_m": 18.2, "slope_deg": 1.6, "flow_acc": 880.0, "distance_to_water_m": 750.0, "impervious_surface_pct": 76.0, "drainage_capacity_index": 0.50, "water_body": "Chembarambakkam Catchment", "base_flood_vulnerability": 0.54},
            {"area_id": "TLR-003", "name": "Ponneri", "latitude": 13.3242, "longitude": 80.1983, "elevation_m": 7.8, "slope_deg": 0.7, "flow_acc": 1620.0, "distance_to_water_m": 290.0, "impervious_surface_pct": 62.0, "drainage_capacity_index": 0.38, "water_body": "Araniyar River Outfall", "base_flood_vulnerability": 0.83},
            {"area_id": "TLR-004", "name": "Gummidipoondi", "latitude": 13.4067, "longitude": 80.1283, "elevation_m": 12.0, "slope_deg": 1.1, "flow_acc": 1150.0, "distance_to_water_m": 580.0, "impervious_surface_pct": 65.0, "drainage_capacity_index": 0.42, "water_body": "Pulicat Lake Catchment", "base_flood_vulnerability": 0.71},
            {"area_id": "TLR-005", "name": "Tiruttani", "latitude": 13.1800, "longitude": 79.6300, "elevation_m": 76.0, "slope_deg": 4.8, "flow_acc": 420.0, "distance_to_water_m": 1800.0, "impervious_surface_pct": 45.0, "drainage_capacity_index": 0.65, "water_body": "Nandi River Tributary", "base_flood_vulnerability": 0.22}
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
            {"area_id": "CGL-001", "name": "Pallavaram", "latitude": 12.9675, "longitude": 80.1491, "elevation_m": 15.0, "slope_deg": 1.5, "flow_acc": 980.0, "distance_to_water_m": 520.0, "impervious_surface_pct": 82.0, "drainage_capacity_index": 0.42, "water_body": "Pallavaram Periya Eri", "base_flood_vulnerability": 0.68},
            {"area_id": "CGL-002", "name": "Vandalur", "latitude": 12.8914, "longitude": 80.0811, "elevation_m": 28.0, "slope_deg": 2.8, "flow_acc": 640.0, "distance_to_water_m": 880.0, "impervious_surface_pct": 58.0, "drainage_capacity_index": 0.58, "water_body": "Otteri Lake Vandalur", "base_flood_vulnerability": 0.38},
            {"area_id": "CGL-003", "name": "Chengalpattu Town", "latitude": 12.6841, "longitude": 79.9836, "elevation_m": 36.0, "slope_deg": 2.1, "flow_acc": 790.0, "distance_to_water_m": 620.0, "impervious_surface_pct": 64.0, "drainage_capacity_index": 0.52, "water_body": "Kolavai Lake", "base_flood_vulnerability": 0.46},
            {"area_id": "CGL-004", "name": "Maduranthakam", "latitude": 12.5100, "longitude": 79.8800, "elevation_m": 18.0, "slope_deg": 1.2, "flow_acc": 1450.0, "distance_to_water_m": 250.0, "impervious_surface_pct": 50.0, "drainage_capacity_index": 0.38, "water_body": "Maduranthakam Lake Surplus", "base_flood_vulnerability": 0.79},
            {"area_id": "CGL-005", "name": "Thiruporur", "latitude": 12.7200, "longitude": 80.1900, "elevation_m": 9.2, "slope_deg": 0.9, "flow_acc": 1320.0, "distance_to_water_m": 410.0, "impervious_surface_pct": 68.0, "drainage_capacity_index": 0.44, "water_body": "Buckingham Canal Southern Stretch", "base_flood_vulnerability": 0.74}
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
            {"area_id": "KNC-001", "name": "Kanchipuram City", "latitude": 12.8342, "longitude": 79.7036, "elevation_m": 82.0, "slope_deg": 1.6, "flow_acc": 980.0, "distance_to_water_m": 480.0, "impervious_surface_pct": 72.0, "drainage_capacity_index": 0.50, "water_body": "Vegavathi River", "base_flood_vulnerability": 0.52},
            {"area_id": "KNC-002", "name": "Sriperumbudur", "latitude": 12.9667, "longitude": 79.9500, "elevation_m": 37.0, "slope_deg": 1.8, "flow_acc": 850.0, "distance_to_water_m": 720.0, "impervious_surface_pct": 75.0, "drainage_capacity_index": 0.54, "water_body": "Sriperumbudur Lake", "base_flood_vulnerability": 0.44},
            {"area_id": "KNC-003", "name": "Kundrathur", "latitude": 12.9972, "longitude": 80.0967, "elevation_m": 12.5, "slope_deg": 1.1, "flow_acc": 1520.0, "distance_to_water_m": 310.0, "impervious_surface_pct": 78.0, "drainage_capacity_index": 0.36, "water_body": "Chembarambakkam Adyar Canal", "base_flood_vulnerability": 0.84},
            {"area_id": "KNC-004", "name": "Walajabad", "latitude": 12.8000, "longitude": 79.8200, "elevation_m": 58.0, "slope_deg": 1.4, "flow_acc": 1100.0, "distance_to_water_m": 420.0, "impervious_surface_pct": 52.0, "drainage_capacity_index": 0.48, "water_body": "Palar River North Bank", "base_flood_vulnerability": 0.62}
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
            {"area_id": "NGP-001", "name": "Nagapattinam Port", "latitude": 10.7672, "longitude": 79.8424, "elevation_m": 2.8, "slope_deg": 0.4, "flow_acc": 2100.0, "distance_to_water_m": 90.0, "impervious_surface_pct": 65.0, "drainage_capacity_index": 0.30, "water_body": "Kaduvaiyaru River & Sea", "base_flood_vulnerability": 0.94},
            {"area_id": "NGP-002", "name": "Velankanni", "latitude": 10.6800, "longitude": 79.8500, "elevation_m": 3.1, "slope_deg": 0.5, "flow_acc": 1890.0, "distance_to_water_m": 140.0, "impervious_surface_pct": 68.0, "drainage_capacity_index": 0.32, "water_body": "Vellayar River Outfall", "base_flood_vulnerability": 0.91},
            {"area_id": "NGP-003", "name": "Vedaranyam", "latitude": 10.3700, "longitude": 79.8500, "elevation_m": 1.9, "slope_deg": 0.3, "flow_acc": 2200.0, "distance_to_water_m": 80.0, "impervious_surface_pct": 48.0, "drainage_capacity_index": 0.28, "water_body": "Muthupet Lagoon & Salt Swamps", "base_flood_vulnerability": 0.96},
            {"area_id": "NGP-004", "name": "Kilvelur", "latitude": 10.7100, "longitude": 79.7500, "elevation_m": 6.0, "slope_deg": 0.6, "flow_acc": 1650.0, "distance_to_water_m": 340.0, "impervious_surface_pct": 52.0, "drainage_capacity_index": 0.36, "water_body": "Harischandra River Canal", "base_flood_vulnerability": 0.82}
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
            {"area_id": "MYL-001", "name": "Mayiladuthurai Town", "latitude": 11.1075, "longitude": 79.6522, "elevation_m": 18.0, "slope_deg": 0.9, "flow_acc": 1450.0, "distance_to_water_m": 220.0, "impervious_surface_pct": 68.0, "drainage_capacity_index": 0.42, "water_body": "Cauvery River Channel", "base_flood_vulnerability": 0.76},
            {"area_id": "MYL-002", "name": "Sirkazhi", "latitude": 11.2367, "longitude": 79.7367, "elevation_m": 6.5, "slope_deg": 0.6, "flow_acc": 1850.0, "distance_to_water_m": 280.0, "impervious_surface_pct": 60.0, "drainage_capacity_index": 0.34, "water_body": "Kollidam River Tail-End", "base_flood_vulnerability": 0.89},
            {"area_id": "MYL-003", "name": "Tharangambadi", "latitude": 11.0289, "longitude": 79.8517, "elevation_m": 2.5, "slope_deg": 0.4, "flow_acc": 1950.0, "distance_to_water_m": 110.0, "impervious_surface_pct": 55.0, "drainage_capacity_index": 0.31, "water_body": "Uppanar River Mouth", "base_flood_vulnerability": 0.93}
        ]
    },
    {
        "district_id": "TN-TVR",
        "district_name": "Tiruvarur",
        "region_type": "Delta Irrigation Network",
        "center_lat": 10.7700,
        "center_lng": 79.6300,
        "zoom": 11,
        "areas": [
            {"area_id": "TVR-001", "name": "Tiruvarur Town", "latitude": 10.7700, "longitude": 79.6300, "elevation_m": 14.0, "slope_deg": 0.8, "flow_acc": 1540.0, "distance_to_water_m": 210.0, "impervious_surface_pct": 65.0, "drainage_capacity_index": 0.38, "water_body": "Odambokki River", "base_flood_vulnerability": 0.79},
            {"area_id": "TVR-002", "name": "Mannargudi", "latitude": 10.6667, "longitude": 79.4500, "elevation_m": 19.5, "slope_deg": 1.0, "flow_acc": 1280.0, "distance_to_water_m": 350.0, "impervious_surface_pct": 62.0, "drainage_capacity_index": 0.44, "water_body": "Pamaniyar River", "base_flood_vulnerability": 0.69},
            {"area_id": "TVR-003", "name": "Thiruthuraipoondi", "latitude": 10.5300, "longitude": 79.6500, "elevation_m": 4.8, "slope_deg": 0.5, "flow_acc": 1920.0, "distance_to_water_m": 180.0, "impervious_surface_pct": 58.0, "drainage_capacity_index": 0.31, "water_body": "Mulliyar & Koraiyar", "base_flood_vulnerability": 0.90}
        ]
    },
    {
        "district_id": "TN-TNJ",
        "district_name": "Thanjavur",
        "region_type": "Cauvery Delta Hub",
        "center_lat": 10.7870,
        "center_lng": 79.1378,
        "zoom": 11,
        "areas": [
            {"area_id": "TNJ-001", "name": "Thanjavur City", "latitude": 10.7870, "longitude": 79.1378, "elevation_m": 57.0, "slope_deg": 1.5, "flow_acc": 890.0, "distance_to_water_m": 540.0, "impervious_surface_pct": 74.0, "drainage_capacity_index": 0.52, "water_body": "Grand Anicut Canal", "base_flood_vulnerability": 0.48},
            {"area_id": "TNJ-002", "name": "Kumbakonam", "latitude": 10.9602, "longitude": 79.3845, "elevation_m": 26.0, "slope_deg": 1.1, "flow_acc": 1390.0, "distance_to_water_m": 290.0, "impervious_surface_pct": 76.0, "drainage_capacity_index": 0.42, "water_body": "Cauvery & Arasalar", "base_flood_vulnerability": 0.74},
            {"area_id": "TNJ-003", "name": "Thiruvaiyaru", "latitude": 10.8800, "longitude": 79.1000, "elevation_m": 42.0, "slope_deg": 1.3, "flow_acc": 1580.0, "distance_to_water_m": 190.0, "impervious_surface_pct": 55.0, "drainage_capacity_index": 0.46, "water_body": "Kollidam & Cauvery Confluence", "base_flood_vulnerability": 0.78},
            {"area_id": "TNJ-004", "name": "Pattukkottai", "latitude": 10.4200, "longitude": 79.3200, "elevation_m": 22.0, "slope_deg": 0.9, "flow_acc": 1210.0, "distance_to_water_m": 460.0, "impervious_surface_pct": 58.0, "drainage_capacity_index": 0.45, "water_body": "Nasuvini River", "base_flood_vulnerability": 0.65}
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
            {"area_id": "MDU-001", "name": "Madurai City Centre", "latitude": 9.9252, "longitude": 78.1198, "elevation_m": 136.0, "slope_deg": 2.1, "flow_acc": 1420.0, "distance_to_water_m": 310.0, "impervious_surface_pct": 84.0, "drainage_capacity_index": 0.46, "water_body": "Vaigai River Channel", "base_flood_vulnerability": 0.62},
            {"area_id": "MDU-002", "name": "Sellur", "latitude": 9.9400, "longitude": 78.1250, "elevation_m": 132.0, "slope_deg": 1.4, "flow_acc": 1680.0, "distance_to_water_m": 180.0, "impervious_surface_pct": 82.0, "drainage_capacity_index": 0.36, "water_body": "Sellur Kanmoi & Vaigai North", "base_flood_vulnerability": 0.84},
            {"area_id": "MDU-003", "name": "Thirumangalam", "latitude": 9.8242, "longitude": 77.9892, "elevation_m": 122.0, "slope_deg": 1.7, "flow_acc": 850.0, "distance_to_water_m": 680.0, "impervious_surface_pct": 60.0, "drainage_capacity_index": 0.50, "water_body": "Gundar River Tributary", "base_flood_vulnerability": 0.47},
            {"area_id": "MDU-004", "name": "Melur", "latitude": 10.0300, "longitude": 78.3300, "elevation_m": 145.0, "slope_deg": 2.4, "flow_acc": 740.0, "distance_to_water_m": 820.0, "impervious_surface_pct": 52.0, "drainage_capacity_index": 0.55, "water_body": "Periyar Main Canal", "base_flood_vulnerability": 0.39}
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
            {"area_id": "TNV-001", "name": "Tirunelveli Town", "latitude": 8.7139, "longitude": 77.7567, "elevation_m": 47.0, "slope_deg": 1.8, "flow_acc": 2100.0, "distance_to_water_m": 190.0, "impervious_surface_pct": 76.0, "drainage_capacity_index": 0.40, "water_body": "Thamirabarani River", "base_flood_vulnerability": 0.88},
            {"area_id": "TNV-002", "name": "Palayamkottai", "latitude": 8.7170, "longitude": 77.7400, "elevation_m": 49.0, "slope_deg": 1.6, "flow_acc": 1780.0, "distance_to_water_m": 340.0, "impervious_surface_pct": 74.0, "drainage_capacity_index": 0.44, "water_body": "Thamirabarani South Canal", "base_flood_vulnerability": 0.81},
            {"area_id": "TNV-003", "name": "Ambasamudram", "latitude": 8.7000, "longitude": 77.4500, "elevation_m": 82.0, "slope_deg": 3.2, "flow_acc": 1950.0, "distance_to_water_m": 220.0, "impervious_surface_pct": 54.0, "drainage_capacity_index": 0.52, "water_body": "Manimuthar & Thamirabarani", "base_flood_vulnerability": 0.72}
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
            {"area_id": "TUT-001", "name": "Thoothukudi Port City", "latitude": 8.7642, "longitude": 78.1348, "elevation_m": 4.5, "slope_deg": 0.6, "flow_acc": 1820.0, "distance_to_water_m": 150.0, "impervious_surface_pct": 78.0, "drainage_capacity_index": 0.32, "water_body": "Buckle Canal & Gulf of Mannar", "base_flood_vulnerability": 0.93},
            {"area_id": "TUT-002", "name": "Srivaikuntam", "latitude": 8.6236, "longitude": 77.9258, "elevation_m": 18.0, "slope_deg": 0.9, "flow_acc": 2400.0, "distance_to_water_m": 110.0, "impervious_surface_pct": 58.0, "drainage_capacity_index": 0.30, "water_body": "Srivaikuntam Dam & Thamirabarani", "base_flood_vulnerability": 0.96},
            {"area_id": "TUT-003", "name": "Tiruchendur", "latitude": 8.4900, "longitude": 78.1200, "elevation_m": 9.2, "slope_deg": 1.1, "flow_acc": 1250.0, "distance_to_water_m": 320.0, "impervious_surface_pct": 62.0, "drainage_capacity_index": 0.42, "water_body": "Gulf of Mannar Coast", "base_flood_vulnerability": 0.76},
            {"area_id": "TUT-004", "name": "Kovilpatti", "latitude": 9.1700, "longitude": 77.8700, "elevation_m": 106.0, "slope_deg": 2.0, "flow_acc": 720.0, "distance_to_water_m": 950.0, "impervious_surface_pct": 64.0, "drainage_capacity_index": 0.52, "water_body": "Kovilpatti Lake", "base_flood_vulnerability": 0.41}
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
            {"area_id": "KKI-001", "name": "Nagercoil City", "latitude": 8.1833, "longitude": 77.4119, "elevation_m": 38.0, "slope_deg": 2.4, "flow_acc": 1450.0, "distance_to_water_m": 380.0, "impervious_surface_pct": 74.0, "drainage_capacity_index": 0.48, "water_body": "Pazhayar River Channel", "base_flood_vulnerability": 0.72},
            {"area_id": "KKI-002", "name": "Kuzhithurai", "latitude": 8.3200, "longitude": 77.1900, "elevation_m": 22.0, "slope_deg": 2.1, "flow_acc": 1950.0, "distance_to_water_m": 160.0, "impervious_surface_pct": 60.0, "drainage_capacity_index": 0.38, "water_body": "Kodayar & Pechiparai Surplus", "base_flood_vulnerability": 0.89},
            {"area_id": "KKI-003", "name": "Colachel", "latitude": 8.1764, "longitude": 77.2583, "elevation_m": 6.0, "slope_deg": 1.2, "flow_acc": 1620.0, "distance_to_water_m": 120.0, "impervious_surface_pct": 68.0, "drainage_capacity_index": 0.35, "water_body": "Arabian Sea Outfall", "base_flood_vulnerability": 0.87}
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
            {"area_id": "CBE-001", "name": "Coimbatore City", "latitude": 11.0168, "longitude": 76.9558, "elevation_m": 411.0, "slope_deg": 2.8, "flow_acc": 1100.0, "distance_to_water_m": 480.0, "impervious_surface_pct": 82.0, "drainage_capacity_index": 0.54, "water_body": "Noyyal River & Valankulam Lake", "base_flood_vulnerability": 0.55},
            {"area_id": "CBE-002", "name": "Singanallur", "latitude": 10.9983, "longitude": 77.0267, "elevation_m": 398.0, "slope_deg": 1.9, "flow_acc": 1320.0, "distance_to_water_m": 260.0, "impervious_surface_pct": 80.0, "drainage_capacity_index": 0.44, "water_body": "Singanallur Lake", "base_flood_vulnerability": 0.72},
            {"area_id": "CBE-003", "name": "Mettupalayam", "latitude": 11.3000, "longitude": 76.9500, "elevation_m": 314.0, "slope_deg": 3.8, "flow_acc": 2200.0, "distance_to_water_m": 180.0, "impervious_surface_pct": 58.0, "drainage_capacity_index": 0.48, "water_body": "Bhavani River Foothills", "base_flood_vulnerability": 0.81},
            {"area_id": "CBE-004", "name": "Pollachi", "latitude": 10.6600, "longitude": 77.0100, "elevation_m": 293.0, "slope_deg": 2.5, "flow_acc": 880.0, "distance_to_water_m": 720.0, "impervious_surface_pct": 62.0, "drainage_capacity_index": 0.58, "water_body": "Aliyar Basin Tributary", "base_flood_vulnerability": 0.42}
        ]
    },
    {
        "district_id": "TN-NIL",
        "district_name": "Nilgiris",
        "region_type": "Mountain Slope",
        "center_lat": 11.4102,
        "center_lng": 76.6950,
        "zoom": 11,
        "areas": [
            {"area_id": "NIL-001", "name": "Udhagamandalam (Ooty)", "latitude": 11.4102, "longitude": 76.6950, "elevation_m": 2240.0, "slope_deg": 14.5, "flow_acc": 650.0, "distance_to_water_m": 320.0, "impervious_surface_pct": 52.0, "drainage_capacity_index": 0.50, "water_body": "Ooty Lake & Racecourse Nullah", "base_flood_vulnerability": 0.65},
            {"area_id": "NIL-002", "name": "Coonoor", "latitude": 11.3530, "longitude": 76.7959, "elevation_m": 1850.0, "slope_deg": 18.2, "flow_acc": 890.0, "distance_to_water_m": 240.0, "impervious_surface_pct": 48.0, "drainage_capacity_index": 0.46, "water_body": "Coonoor River Gorge", "base_flood_vulnerability": 0.74},
            {"area_id": "NIL-003", "name": "Gudalur", "latitude": 11.5000, "longitude": 76.5000, "elevation_m": 1180.0, "slope_deg": 12.0, "flow_acc": 1250.0, "distance_to_water_m": 290.0, "impervious_surface_pct": 42.0, "drainage_capacity_index": 0.42, "water_body": "Pandarapuzha River", "base_flood_vulnerability": 0.79}
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
            {"area_id": "TRY-001", "name": "Trichy City Centre", "latitude": 10.7905, "longitude": 78.7047, "elevation_m": 88.0, "slope_deg": 1.4, "flow_acc": 1100.0, "distance_to_water_m": 420.0, "impervious_surface_pct": 82.0, "drainage_capacity_index": 0.48, "water_body": "Uyyakondan Canal", "base_flood_vulnerability": 0.58},
            {"area_id": "TRY-002", "name": "Srirangam Island", "latitude": 10.8622, "longitude": 78.6922, "elevation_m": 79.0, "slope_deg": 0.8, "flow_acc": 2200.0, "distance_to_water_m": 140.0, "impervious_surface_pct": 70.0, "drainage_capacity_index": 0.38, "water_body": "Cauvery & Kollidam River Bifurcation", "base_flood_vulnerability": 0.89},
            {"area_id": "TRY-003", "name": "Lalgudi", "latitude": 10.8667, "longitude": 78.8167, "elevation_m": 68.0, "slope_deg": 0.9, "flow_acc": 1750.0, "distance_to_water_m": 280.0, "impervious_surface_pct": 55.0, "drainage_capacity_index": 0.42, "water_body": "Kollidam North Bank", "base_flood_vulnerability": 0.82}
        ]
    },
    {
        "district_id": "TN-SLM",
        "district_name": "Salem",
        "region_type": "Inland Basin",
        "center_lat": 11.6643,
        "center_lng": 78.1460,
        "zoom": 11,
        "areas": [
            {"area_id": "SLM-001", "name": "Salem City", "latitude": 11.6643, "longitude": 78.1460, "elevation_m": 278.0, "slope_deg": 2.2, "flow_acc": 980.0, "distance_to_water_m": 380.0, "impervious_surface_pct": 80.0, "drainage_capacity_index": 0.50, "water_body": "Thirumanimutharu River", "base_flood_vulnerability": 0.60},
            {"area_id": "SLM-002", "name": "Mettur Dam Town", "latitude": 11.7900, "longitude": 77.8000, "elevation_m": 230.0, "slope_deg": 3.4, "flow_acc": 2600.0, "distance_to_water_m": 120.0, "impervious_surface_pct": 58.0, "drainage_capacity_index": 0.60, "water_body": "Mettur Reservoir Stanley Surplus", "base_flood_vulnerability": 0.78}
        ]
    },
    {
        "district_id": "TN-ERD",
        "district_name": "Erode",
        "region_type": "Bhavani River Basin",
        "center_lat": 11.3410,
        "center_lng": 77.7172,
        "zoom": 11,
        "areas": [
            {"area_id": "ERD-001", "name": "Erode City", "latitude": 11.3410, "longitude": 77.7172, "elevation_m": 183.0, "slope_deg": 1.8, "flow_acc": 1820.0, "distance_to_water_m": 240.0, "impervious_surface_pct": 78.0, "drainage_capacity_index": 0.52, "water_body": "Cauvery & Perumpallam Odai", "base_flood_vulnerability": 0.66},
            {"area_id": "ERD-002", "name": "Bhavani Town", "latitude": 11.4500, "longitude": 77.6800, "elevation_m": 172.0, "slope_deg": 1.4, "flow_acc": 2100.0, "distance_to_water_m": 150.0, "impervious_surface_pct": 68.0, "drainage_capacity_index": 0.45, "water_body": "Bhavani & Cauvery Confluence (Kooduthurai)", "base_flood_vulnerability": 0.85}
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
            {"area_id": "TPR-001", "name": "Tiruppur Town", "latitude": 11.1085, "longitude": 77.3411, "elevation_m": 295.0, "slope_deg": 1.8, "flow_acc": 1280.0, "distance_to_water_m": 280.0, "impervious_surface_pct": 84.0, "drainage_capacity_index": 0.44, "water_body": "Noyyal River Urban Stretch", "base_flood_vulnerability": 0.70},
            {"area_id": "TPR-002", "name": "Dharapuram", "latitude": 10.7300, "longitude": 77.5200, "elevation_m": 245.0, "slope_deg": 1.5, "flow_acc": 1450.0, "distance_to_water_m": 320.0, "impervious_surface_pct": 58.0, "drainage_capacity_index": 0.50, "water_body": "Amaravathi River", "base_flood_vulnerability": 0.62}
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
            {"area_id": "VEL-001", "name": "Vellore Fort City", "latitude": 12.9165, "longitude": 79.1325, "elevation_m": 216.0, "slope_deg": 2.2, "flow_acc": 1350.0, "distance_to_water_m": 290.0, "impervious_surface_pct": 78.0, "drainage_capacity_index": 0.46, "water_body": "Palar River & Otteri Lake", "base_flood_vulnerability": 0.64},
            {"area_id": "VEL-002", "name": "Katpadi", "latitude": 12.9800, "longitude": 79.1300, "elevation_m": 224.0, "slope_deg": 2.0, "flow_acc": 980.0, "distance_to_water_m": 580.0, "impervious_surface_pct": 72.0, "drainage_capacity_index": 0.52, "water_body": "Katpadi Lake Catchment", "base_flood_vulnerability": 0.48}
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
            {"area_id": "RPT-001", "name": "Ranipet Town", "latitude": 12.9272, "longitude": 79.3331, "elevation_m": 160.0, "slope_deg": 1.5, "flow_acc": 1420.0, "distance_to_water_m": 280.0, "impervious_surface_pct": 74.0, "drainage_capacity_index": 0.48, "water_body": "Palar River Causeway", "base_flood_vulnerability": 0.66},
            {"area_id": "RPT-002", "name": "Arakkonam", "latitude": 13.0800, "longitude": 79.6700, "elevation_m": 85.0, "slope_deg": 1.2, "flow_acc": 1150.0, "distance_to_water_m": 450.0, "impervious_surface_pct": 70.0, "drainage_capacity_index": 0.46, "water_body": "Kosasthalaiyar River Branch", "base_flood_vulnerability": 0.58}
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
            {"area_id": "VLP-001", "name": "Viluppuram City", "latitude": 11.9401, "longitude": 79.4861, "elevation_m": 42.0, "slope_deg": 1.2, "flow_acc": 1380.0, "distance_to_water_m": 350.0, "impervious_surface_pct": 68.0, "drainage_capacity_index": 0.46, "water_body": "Thenpennai (Ponnaiyar) River", "base_flood_vulnerability": 0.72},
            {"area_id": "VLP-002", "name": "Tindivanam", "latitude": 12.2300, "longitude": 79.6500, "elevation_m": 58.0, "slope_deg": 1.4, "flow_acc": 980.0, "distance_to_water_m": 620.0, "impervious_surface_pct": 62.0, "drainage_capacity_index": 0.50, "water_body": "Tindivanam Periya Eri", "base_flood_vulnerability": 0.54}
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
            {"area_id": "DGL-001", "name": "Dindigul Town", "latitude": 10.3673, "longitude": 77.9803, "elevation_m": 268.0, "slope_deg": 2.4, "flow_acc": 850.0, "distance_to_water_m": 720.0, "impervious_surface_pct": 72.0, "drainage_capacity_index": 0.52, "water_body": "Kudaganaru River", "base_flood_vulnerability": 0.44},
            {"area_id": "DGL-002", "name": "Palani", "latitude": 10.4500, "longitude": 77.5200, "elevation_m": 310.0, "slope_deg": 3.1, "flow_acc": 1120.0, "distance_to_water_m": 420.0, "impervious_surface_pct": 64.0, "drainage_capacity_index": 0.48, "water_body": "Shanmuganadhi River", "base_flood_vulnerability": 0.56}
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
            {"area_id": "THN-001", "name": "Theni Allinagaram", "latitude": 10.0104, "longitude": 77.4768, "elevation_m": 298.0, "slope_deg": 2.8, "flow_acc": 1250.0, "distance_to_water_m": 320.0, "impervious_surface_pct": 68.0, "drainage_capacity_index": 0.48, "water_body": "Mullaperiyar & Vaigai", "base_flood_vulnerability": 0.62},
            {"area_id": "THN-002", "name": "Bodinayakanur", "latitude": 10.0100, "longitude": 77.3500, "elevation_m": 353.0, "slope_deg": 4.5, "flow_acc": 1420.0, "distance_to_water_m": 260.0, "impervious_surface_pct": 58.0, "drainage_capacity_index": 0.46, "water_body": "Kotagudi River Torrent", "base_flood_vulnerability": 0.68}
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
            {"area_id": "RMD-001", "name": "Ramanathapuram Town", "latitude": 9.3639, "longitude": 78.8395, "elevation_m": 10.0, "slope_deg": 0.6, "flow_acc": 1720.0, "distance_to_water_m": 380.0, "impervious_surface_pct": 60.0, "drainage_capacity_index": 0.36, "water_body": "Vaigai Delta Outfall & Big Tank", "base_flood_vulnerability": 0.82},
            {"area_id": "RMD-002", "name": "Rameswaram Island", "latitude": 9.2876, "longitude": 79.3129, "elevation_m": 5.2, "slope_deg": 0.5, "flow_acc": 1480.0, "distance_to_water_m": 120.0, "impervious_surface_pct": 52.0, "drainage_capacity_index": 0.38, "water_body": "Palk Strait & Gulf of Mannar", "base_flood_vulnerability": 0.86}
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
            {"area_id": "SVG-001", "name": "Sivaganga Town", "latitude": 9.8433, "longitude": 78.4809, "elevation_m": 102.0, "slope_deg": 1.4, "flow_acc": 890.0, "distance_to_water_m": 620.0, "impervious_surface_pct": 62.0, "drainage_capacity_index": 0.48, "water_body": "Sasivarna Theertham Tank", "base_flood_vulnerability": 0.48},
            {"area_id": "SVG-002", "name": "Karaikudi", "latitude": 10.0700, "longitude": 78.7800, "elevation_m": 82.0, "slope_deg": 1.2, "flow_acc": 950.0, "distance_to_water_m": 540.0, "impervious_surface_pct": 70.0, "drainage_capacity_index": 0.50, "water_body": "Thennar River Tributary", "base_flood_vulnerability": 0.52}
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
            {"area_id": "VRD-001", "name": "Virudhunagar City", "latitude": 9.5872, "longitude": 77.9514, "elevation_m": 117.0, "slope_deg": 1.6, "flow_acc": 1020.0, "distance_to_water_m": 480.0, "impervious_surface_pct": 74.0, "drainage_capacity_index": 0.48, "water_body": "Kousika River Stream", "base_flood_vulnerability": 0.56},
            {"area_id": "VRD-002", "name": "Sivakasi", "latitude": 9.4500, "longitude": 77.8000, "elevation_m": 101.0, "slope_deg": 1.5, "flow_acc": 980.0, "distance_to_water_m": 650.0, "impervious_surface_pct": 78.0, "drainage_capacity_index": 0.46, "water_body": "Vaippar River Basin", "base_flood_vulnerability": 0.52}
        ]
    },
    {
        "district_id": "TN-TKS",
        "district_name": "Tenkasi",
        "region_type": "Western Ghats Foothills",
        "center_lat": 8.9594,
        "center_lng": 77.3150,
        "zoom": 11,
        "areas": [
            {"area_id": "TKS-001", "name": "Tenkasi Town", "latitude": 8.9594, "longitude": 77.3150, "elevation_m": 143.0, "slope_deg": 3.2, "flow_acc": 1650.0, "distance_to_water_m": 220.0, "impervious_surface_pct": 64.0, "drainage_capacity_index": 0.46, "water_body": "Chittar River", "base_flood_vulnerability": 0.74},
            {"area_id": "TKS-002", "name": "Courtallam", "latitude": 8.9300, "longitude": 77.2700, "elevation_m": 160.0, "slope_deg": 6.8, "flow_acc": 1820.0, "distance_to_water_m": 150.0, "impervious_surface_pct": 52.0, "drainage_capacity_index": 0.44, "water_body": "Chittar Cascades & Main Falls", "base_flood_vulnerability": 0.82}
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
            {"area_id": "KRR-001", "name": "Karur City", "latitude": 10.9577, "longitude": 78.0809, "elevation_m": 122.0, "slope_deg": 1.4, "flow_acc": 1890.0, "distance_to_water_m": 210.0, "impervious_surface_pct": 76.0, "drainage_capacity_index": 0.48, "water_body": "Amaravathi & Cauvery Confluence (Thirumukkudalur)", "base_flood_vulnerability": 0.75},
            {"area_id": "KRR-002", "name": "Kulithalai", "latitude": 10.9300, "longitude": 78.4200, "elevation_m": 94.0, "slope_deg": 1.1, "flow_acc": 2100.0, "distance_to_water_m": 180.0, "impervious_surface_pct": 60.0, "drainage_capacity_index": 0.44, "water_body": "Cauvery River South Bund", "base_flood_vulnerability": 0.81}
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
            {"area_id": "NKL-001", "name": "Namakkal Town", "latitude": 11.2189, "longitude": 78.1674, "elevation_m": 218.0, "slope_deg": 2.1, "flow_acc": 820.0, "distance_to_water_m": 820.0, "impervious_surface_pct": 68.0, "drainage_capacity_index": 0.54, "water_body": "Kamalayam Tank", "base_flood_vulnerability": 0.42},
            {"area_id": "NKL-002", "name": "Kumarapalayam", "latitude": 11.4500, "longitude": 77.7000, "elevation_m": 175.0, "slope_deg": 1.6, "flow_acc": 1980.0, "distance_to_water_m": 160.0, "impervious_surface_pct": 74.0, "drainage_capacity_index": 0.44, "water_body": "Cauvery River East Bank", "base_flood_vulnerability": 0.82}
        ]
    },
    {
        "district_id": "TN-PDK",
        "district_name": "Pudukkottai",
        "region_type": "Tank & Vellar Basin",
        "center_lat": 10.3833,
        "center_lng": 78.8000,
        "zoom": 11,
        "areas": [
            {"area_id": "PDK-001", "name": "Pudukkottai Town", "latitude": 10.3833, "longitude": 78.8000, "elevation_m": 100.0, "slope_deg": 1.4, "flow_acc": 980.0, "distance_to_water_m": 520.0, "impervious_surface_pct": 68.0, "drainage_capacity_index": 0.50, "water_body": "Pallavan Kulam & Vellar Tributary", "base_flood_vulnerability": 0.54},
            {"area_id": "PDK-002", "name": "Aranthangi", "latitude": 10.1600, "longitude": 78.9900, "elevation_m": 35.0, "slope_deg": 0.9, "flow_acc": 1480.0, "distance_to_water_m": 320.0, "impervious_surface_pct": 60.0, "drainage_capacity_index": 0.42, "water_body": "Agniyar River", "base_flood_vulnerability": 0.72}
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
            {"area_id": "TVM-001", "name": "Tiruvannamalai Town", "latitude": 12.2253, "longitude": 79.0747, "elevation_m": 171.0, "slope_deg": 2.8, "flow_acc": 920.0, "distance_to_water_m": 650.0, "impervious_surface_pct": 68.0, "drainage_capacity_index": 0.52, "water_body": "Tamaraikulam & Annamalaiyar Foothills", "base_flood_vulnerability": 0.46},
            {"area_id": "TVM-002", "name": "Cheyyar", "latitude": 12.6600, "longitude": 79.5400, "elevation_m": 92.0, "slope_deg": 1.3, "flow_acc": 1420.0, "distance_to_water_m": 240.0, "impervious_surface_pct": 58.0, "drainage_capacity_index": 0.45, "water_body": "Cheyyar River Basin", "base_flood_vulnerability": 0.71}
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
            {"area_id": "DHP-001", "name": "Dharmapuri Town", "latitude": 12.1211, "longitude": 78.1582, "elevation_m": 468.0, "slope_deg": 2.2, "flow_acc": 820.0, "distance_to_water_m": 750.0, "impervious_surface_pct": 64.0, "drainage_capacity_index": 0.54, "water_body": "Sanatkumaranadhi River", "base_flood_vulnerability": 0.40},
            {"area_id": "DHP-002", "name": "Hogenakkal", "latitude": 12.1167, "longitude": 77.7833, "elevation_m": 245.0, "slope_deg": 6.5, "flow_acc": 2800.0, "distance_to_water_m": 90.0, "impervious_surface_pct": 35.0, "drainage_capacity_index": 0.42, "water_body": "Cauvery River Gorge & Falls", "base_flood_vulnerability": 0.92}
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
            {"area_id": "KRI-001", "name": "Krishnagiri Town", "latitude": 12.5186, "longitude": 78.2137, "elevation_m": 492.0, "slope_deg": 2.6, "flow_acc": 1250.0, "distance_to_water_m": 380.0, "impervious_surface_pct": 66.0, "drainage_capacity_index": 0.52, "water_body": "Thenpennai & Krishnagiri Reservoir Project", "base_flood_vulnerability": 0.58},
            {"area_id": "KRI-002", "name": "Hosur City", "latitude": 12.7409, "longitude": 77.8253, "elevation_m": 882.0, "slope_deg": 2.4, "flow_acc": 980.0, "distance_to_water_m": 520.0, "impervious_surface_pct": 78.0, "drainage_capacity_index": 0.54, "water_body": "Kelavarapalli Dam Catchment", "base_flood_vulnerability": 0.48}
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
            {"area_id": "KLK-001", "name": "Kallakurichi Town", "latitude": 11.7383, "longitude": 78.9639, "elevation_m": 120.0, "slope_deg": 1.6, "flow_acc": 1150.0, "distance_to_water_m": 350.0, "impervious_surface_pct": 64.0, "drainage_capacity_index": 0.48, "water_body": "Manimuktha River", "base_flood_vulnerability": 0.62},
            {"area_id": "KLK-002", "name": "Ulundurpet", "latitude": 11.6900, "longitude": 79.2900, "elevation_m": 74.0, "slope_deg": 1.2, "flow_acc": 1320.0, "distance_to_water_m": 420.0, "impervious_surface_pct": 60.0, "drainage_capacity_index": 0.46, "water_body": "Gedilam River Stream", "base_flood_vulnerability": 0.68}
        ]
    },
    {
        "district_id": "TN-ARI",
        "district_name": "Ariyalur",
        "region_type": "Kollidam North Basin",
        "center_lat": 11.1401,
        "center_lng": 79.0786,
        "zoom": 11,
        "areas": [
            {"area_id": "ARI-001", "name": "Ariyalur Town", "latitude": 11.1401, "longitude": 79.0786, "elevation_m": 76.0, "slope_deg": 1.4, "flow_acc": 1180.0, "distance_to_water_m": 480.0, "impervious_surface_pct": 62.0, "drainage_capacity_index": 0.48, "water_body": "Marudaiyar River", "base_flood_vulnerability": 0.58},
            {"area_id": "ARI-002", "name": "Jayankondam", "latitude": 11.2167, "longitude": 79.3500, "elevation_m": 55.0, "slope_deg": 1.1, "flow_acc": 1350.0, "distance_to_water_m": 360.0, "impervious_surface_pct": 58.0, "drainage_capacity_index": 0.46, "water_body": "Kollidam Canal Inundation", "base_flood_vulnerability": 0.72}
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
            {"area_id": "PER-001", "name": "Perambalur Town", "latitude": 11.2333, "longitude": 78.8833, "elevation_m": 142.0, "slope_deg": 2.1, "flow_acc": 920.0, "distance_to_water_m": 580.0, "impervious_surface_pct": 65.0, "drainage_capacity_index": 0.52, "water_body": "Konnaiyar & Perambalur Tank", "base_flood_vulnerability": 0.48}
        ]
    },
    {
        "district_id": "TN-TPT",
        "district_name": "Tirupathur",
        "region_type": "Palar Foothills",
        "center_lat": 12.4950,
        "center_lng": 78.5678,
        "zoom": 11,
        "areas": [
            {"area_id": "TPT-001", "name": "Tirupathur Town", "latitude": 12.4950, "longitude": 78.5678, "elevation_m": 388.0, "slope_deg": 2.4, "flow_acc": 890.0, "distance_to_water_m": 520.0, "impervious_surface_pct": 65.0, "drainage_capacity_index": 0.52, "water_body": "Palar Basin Odai", "base_flood_vulnerability": 0.46},
            {"area_id": "TPT-002", "name": "Vaniyambadi", "latitude": 12.6833, "longitude": 78.6167, "elevation_m": 320.0, "slope_deg": 2.0, "flow_acc": 1650.0, "distance_to_water_m": 190.0, "impervious_surface_pct": 74.0, "drainage_capacity_index": 0.44, "water_body": "Palar River Low Causeways", "base_flood_vulnerability": 0.78}
        ]
    }
]

if __name__ == "__main__":
    base_dir = r"C:\Users\HP\.gemini\antigravity\scratch\FloodGuard-AI"
    out_path = os.path.join(base_dir, "data", "raw", "tamilnadu_districts.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(TAMIL_NADU_DISTRICTS, f, indent=2)
    print(f"Generated {len(TAMIL_NADU_DISTRICTS)} Tamil Nadu districts.")
    total_areas = sum(len(d["areas"]) for d in TAMIL_NADU_DISTRICTS)
    print(f"Total places/wards across all districts: {total_areas}")
