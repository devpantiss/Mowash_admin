import React, { useState, useEffect } from "react";
import { MapContainer, GeoJSON, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet"; // Import L for using Leaflet features
import {
  FaUsers,
  FaHardHat,
  FaBolt,
  FaWrench,
  FaWater,
  FaSyringe, // Using FaSyringe as a placeholder for FSTP Handler
  FaLeaf,
  FaToilet,
  FaHandsHelping,
  FaHandHoldingWater,
  FaSun, 
} from "react-icons/fa";

const WorksDoneMap = () => {
  const [geoJsonData, setGeoJsonData] = useState(null);
  const [hoveredDistrict, setHoveredDistrict] = useState(null);
  const [selectedTab, setSelectedTab] = useState("total"); // Default to "total"

  // Define all categories for consistent table headers
  const categories = [
    "masons",
    "electricians",
    "plumbers",
    "sanitarySesspoolOperator",
    "fstpHandler",
    "compostMakers",
    "sanitaryCrew",
    "wtpoperator",
    "bovPartners",
    "nalJalMitra",
    "solarPumpEngineer",
    "pondExcavator",
  ];

  const categoryIcons = {
    total: FaUsers,
    mason: FaHardHat,
    electrician: FaBolt,
    plumber: FaWrench,
    sanitarySesspoolOperator: FaWater,
    fstpHandler: FaSyringe, // Placeholder
    compostMaker: FaLeaf,
    sanitaryCrew: FaToilet,
    wtpOperator: FaWater,
    bovPartners: FaHandsHelping,
    nalJalMitra: FaHandHoldingWater,
    solarPumpEngineer: FaSun, // Placeholder
    pondExcavator: FaSun,
  };

  // Hospital data for Odisha districts (dummy data)
  const hospitalData = [
    {
      name: "Angul",
      masons: 40,
      electricians: 25,
      plumbers: 30,
      sanitarySesspoolOperator: 10,
      fstpHandler: 40,
      compostMakers: 5,
      sanitaryCrew: 50,
      wtpoperator: 15,
      bovPartners: 8,
      nalJalMitra: 12,
      solarPumpEngineer: 10,
      pondExcavator: 7,
      total: 252,
    },
    {
      name: "Baleshwar",
      masons: 70,
      electricians: 35,
      plumbers: 40,
      sanitarySesspoolOperator: 25,
      fstpHandler: 70,
      compostMakers: 10,
      sanitaryCrew: 60,
      wtpoperator: 20,
      bovPartners: 12,
      nalJalMitra: 15,
      solarPumpEngineer: 12,
      pondExcavator: 9,
      total: 378,
    },
    {
      name: "Bargarh",
      masons: 60,
      electricians: 30,
      plumbers: 35,
      sanitarySesspoolOperator: 15,
      fstpHandler: 40,
      compostMakers: 5,
      sanitaryCrew: 50,
      wtpoperator: 10,
      bovPartners: 5,
      nalJalMitra: 8,
      solarPumpEngineer: 5,
      pondExcavator: 3,
      total: 266,
    },
    {
      name: "Bhadrak",
      masons: 50,
      electricians: 25,
      plumbers: 30,
      sanitarySesspoolOperator: 20,
      fstpHandler: 45,
      compostMakers: 6,
      sanitaryCrew: 55,
      wtpoperator: 11,
      bovPartners: 6,
      nalJalMitra: 9,
      solarPumpEngineer: 7,
      pondExcavator: 4,
      total: 268,
    },
    {
      name: "Balangir",
      masons: 65,
      electricians: 40,
      plumbers: 40,
      sanitarySesspoolOperator: 15,
      fstpHandler: 50,
      compostMakers: 3,
      sanitaryCrew: 60,
      wtpoperator: 12,
      bovPartners: 9,
      nalJalMitra: 10,
      solarPumpEngineer: 6,
      pondExcavator: 5,
      total: 305,
    },
    {
      name: "Boudh",
      masons: 20,
      electricians: 10,
      plumbers: 10,
      sanitarySesspoolOperator: 5,
      fstpHandler: 15,
      compostMakers: 0,
      sanitaryCrew: 15,
      wtpoperator: 2,
      bovPartners: 1,
      nalJalMitra: 0,
      solarPumpEngineer: 0,
      pondExcavator: 0,
      total: 73,
    },
    {
      name: "Cuttack",
      masons: 150,
      electricians: 90,
      plumbers: 80,
      sanitarySesspoolOperator: 30,
      fstpHandler: 100,
      compostMakers: 20,
      sanitaryCrew: 130,
      wtpoperator: 25,
      bovPartners: 15,
      nalJalMitra: 20,
      solarPumpEngineer: 15,
      pondExcavator: 10,
      total: 650,
    },
    {
      name: "Debagarh",
      masons: 10,
      electricians: 7,
      plumbers: 5,
      sanitarySesspoolOperator: 3,
      fstpHandler: 10,
      compostMakers: 1,
      sanitaryCrew: 12,
      wtpoperator: 1,
      bovPartners: 0,
      nalJalMitra: 0,
      solarPumpEngineer: 0,
      pondExcavator: 0,
      total: 49,
    },
    {
      name: "Dhenkanal",
      masons: 55,
      electricians: 30,
      plumbers: 35,
      sanitarySesspoolOperator: 10,
      fstpHandler: 45,
      compostMakers: 4,
      sanitaryCrew: 60,
      wtpoperator: 9,
      bovPartners: 5,
      nalJalMitra: 3,
      solarPumpEngineer: 2,
      pondExcavator: 1,
      total: 254,
    },
    {
      name: "Gajapati",
      masons: 40,
      electricians: 25,
      plumbers: 20,
      sanitarySesspoolOperator: 8,
      fstpHandler: 30,
      compostMakers: 2,
      sanitaryCrew: 40,
      wtpoperator: 4,
      bovPartners: 2,
      nalJalMitra: 5,
      solarPumpEngineer: 3,
      pondExcavator: 2,
      total: 171,
    },
    {
      name: "Ganjam",
      masons: 140,
      electricians: 90,
      plumbers: 80,
      sanitarySesspoolOperator: 33,
      fstpHandler: 130,
      compostMakers: 25,
      sanitaryCrew: 140,
      wtpoperator: 20,
      bovPartners: 18,
      nalJalMitra: 28,
      solarPumpEngineer: 22,
      pondExcavator: 15,
      total: 795,
    },
    {
      name: "Jagatsinghapur",
      masons: 60,
      electricians: 40,
      plumbers: 30,
      sanitarySesspoolOperator: 10,
      fstpHandler: 50,
      compostMakers: 4,
      sanitaryCrew: 55,
      wtpoperator: 6,
      bovPartners: 3,
      nalJalMitra: 2,
      solarPumpEngineer: 1,
      pondExcavator: 1,
      total: 212,
    },
    {
      name: "Jajapur",
      masons: 75,
      electricians: 55,
      plumbers: 50,
      sanitarySesspoolOperator: 20,
      fstpHandler: 60,
      compostMakers: 8,
      sanitaryCrew: 80,
      wtpoperator: 10,
      bovPartners: 5,
      nalJalMitra: 4,
      solarPumpEngineer: 2,
      pondExcavator: 2,
      total: 371,
    },
    {
      name: "Jharsuguda",
      masons: 20,
      electricians: 10,
      plumbers: 10,
      sanitarySesspoolOperator: 5,
      fstpHandler: 15,
      compostMakers: 0,
      sanitaryCrew: 12,
      wtpoperator: 1,
      bovPartners: 1,
      nalJalMitra: 0,
      solarPumpEngineer: 0,
      pondExcavator: 0,
      total: 74,
    },
    {
      name: "Kalahandi",
      masons: 55,
      electricians: 30,
      plumbers: 25,
      sanitarySesspoolOperator: 12,
      fstpHandler: 45,
      compostMakers: 3,
      sanitaryCrew: 25,
      wtpoperator: 10,
      bovPartners: 4,
      nalJalMitra: 6,
      solarPumpEngineer: 2,
      pondExcavator: 2,
      total: 214,
    },
    {
      name: "Kandhamal",
      masons: 35,
      electricians: 25,
      plumbers: 20,
      sanitarySesspoolOperator: 5,
      fstpHandler: 20,
      compostMakers: 2,
      sanitaryCrew: 20,
      wtpoperator: 2,
      bovPartners: 1,
      nalJalMitra: 3,
      solarPumpEngineer: 2,
      pondExcavator: 1,
      total: 182,
    },
    {
      name: "Kendrapara",
      masons: 50,
      electricians: 30,
      plumbers: 25,
      sanitarySesspoolOperator: 20,
      fstpHandler: 50,
      compostMakers: 5,
      sanitaryCrew: 50,
      wtpoperator: 10,
      bovPartners: 5,
      nalJalMitra: 5,
      solarPumpEngineer: 2,
      pondExcavator: 1,
      total: 250,
    },
    {
      name: "Khurda",
      masons: 80,
      electricians: 50,
      plumbers: 40,
      sanitarySesspoolOperator: 15,
      fstpHandler: 65,
      compostMakers: 10,
      sanitaryCrew: 75,
      wtpoperator: 10,
      bovPartners: 8,
      nalJalMitra: 12,
      solarPumpEngineer: 8,
      pondExcavator: 6,
      total: 392,
    },
    {
      name: "Koraput",
      masons: 25,
      electricians: 15,
      plumbers: 10,
      sanitarySesspoolOperator: 5,
      fstpHandler: 20,
      compostMakers: 2,
      sanitaryCrew: 15,
      wtpoperator: 1,
      bovPartners: 1,
      nalJalMitra: 2,
      solarPumpEngineer: 1,
      pondExcavator: 0,
      total: 92,
    },
    {
      name: "Malkangiri",
      masons: 20,
      electricians: 10,
      plumbers: 5,
      sanitarySesspoolOperator: 2,
      fstpHandler: 10,
      compostMakers: 0,
      sanitaryCrew: 10,
      wtpoperator: 1,
      bovPartners: 0,
      nalJalMitra: 0,
      solarPumpEngineer: 0,
      pondExcavator: 0,
      total: 58,
    },
    {
      name: "Mayurbhanj",
      masons: 75,
      electricians: 50,
      plumbers: 40,
      sanitarySesspoolOperator: 10,
      fstpHandler: 50,
      compostMakers: 5,
      sanitaryCrew: 50,
      wtpoperator: 5,
      bovPartners: 2,
      nalJalMitra: 3,
      solarPumpEngineer: 2,
      pondExcavator: 1,
      total: 339,
    },
    {
      name: "Nabarangpur",
      masons: 35,
      electricians: 25,
      plumbers: 20,
      sanitarySesspoolOperator: 5,
      fstpHandler: 20,
      compostMakers: 2,
      sanitaryCrew: 15,
      wtpoperator: 2,
      bovPartners: 1,
      nalJalMitra: 3,
      solarPumpEngineer: 2,
      pondExcavator: 1,
      total: 153,
    },
    {
      name: "Nayagarh",
      masons: 40,
      electricians: 25,
      plumbers: 20,
      sanitarySesspoolOperator: 10,
      fstpHandler: 20,
      compostMakers: 2,
      sanitaryCrew: 20,
      wtpoperator: 5,
      bovPartners: 2,
      nalJalMitra: 3,
      solarPumpEngineer: 1,
      pondExcavator: 1,
      total: 219,
    },
    {
      name: "Nuapada",
      masons: 25,
      electricians: 15,
      plumbers: 10,
      sanitarySesspoolOperator: 5,
      fstpHandler: 20,
      compostMakers: 1,
      sanitaryCrew: 10,
      wtpoperator: 2,
      bovPartners: 1,
      nalJalMitra: 3,
      solarPumpEngineer: 2,
      pondExcavator: 1,
      total: 70,
    },
    {
      name: "Puri",
      masons: 50,
      electricians: 30,
      plumbers: 25,
      sanitarySesspoolOperator: 10,
      fstpHandler: 50,
      compostMakers: 5,
      sanitaryCrew: 55,
      wtpoperator: 6,
      bovPartners: 3,
      nalJalMitra: 4,
      solarPumpEngineer: 2,
      pondExcavator: 1,
      total: 237,
    },
    {
      name: "Rayagada",
      masons: 25,
      electricians: 15,
      plumbers: 10,
      sanitarySesspoolOperator: 5,
      fstpHandler: 20,
      compostMakers: 2,
      sanitaryCrew: 12,
      wtpoperator: 1,
      bovPartners: 1,
      nalJalMitra: 3,
      solarPumpEngineer: 2,
      pondExcavator: 1,
      total: 90,
    },
    {
      name: "Sambalpur",
      masons: 45,
      electricians: 25,
      plumbers: 30,
      sanitarySesspoolOperator: 12,
      fstpHandler: 45,
      compostMakers: 2,
      sanitaryCrew: 20,
      wtpoperator: 3,
      bovPartners: 2,
      nalJalMitra: 1,
      solarPumpEngineer: 1,
      pondExcavator: 1,
      total: 213,
    },
    {
      name: "Sonepur",
      masons: 30,
      electricians: 20,
      plumbers: 10,
      sanitarySesspoolOperator: 5,
      fstpHandler: 20,
      compostMakers: 0,
      sanitaryCrew: 8,
      wtpoperator: 1,
      bovPartners: 0,
      nalJalMitra: 0,
      solarPumpEngineer: 0,
      pondExcavator: 0,
      total: 94,
    },
    {
      name: "Sundergarh",
      masons: 50,
      electricians: 40,
      plumbers: 35,
      sanitarySesspoolOperator: 10,
      fstpHandler: 55,
      compostMakers: 7,
      sanitaryCrew: 50,
      wtpoperator: 15,
      bovPartners: 3,
      nalJalMitra: 5,
      solarPumpEngineer: 2,
      pondExcavator: 1,
      total: 269,
    },
  ];

  useEffect(() => {
    fetch("/Orissa.geojson") // Path relative to the public folder
      .then((response) => response.json())
      .then((data) => {
        setGeoJsonData(data);
      })
      .catch((error) => {
        console.error("Error fetching GeoJSON:", error);
      });
  }, []);

  // Function to get the crew data based on the selected tab
  const getCrewData = (districtName) => {
    const district = hospitalData.find((d) => d.name === districtName);
    if (!district) return 0;

    switch (selectedTab) {
      case "mason":
        return district.masons;
      case "electrician":
        return district.electricians;
      case "plumber":
        return district.plumbers;
      case "cesspoolOperator":
        return district.sanitarySesspoolOperator;
      case "fstpHandler":
        return district.fstpHandler;
      case "compostMakers":
        return district.compostMakers;
      case "sanitaryCrew":
        return district.sanitaryCrew;
      case "wtpOperator":
        return district.wtpoperator;
      case "bovPartners":
        return district.bovPartners;
      case "nalJalMitra":
        return district.nalJalMitra;
      case "solarPumpEngineer":
        return district.solarPumpEngineer;
      case "pondExcavator":
        return district.pondExcavator;
      default:
        return district.total; // Return total data if tab is "total"
    }
  };

  // Event handlers for each district
  const onEachDistrict = (district, layer) => {
    const districtName = district.properties.Dist_Name;
    layer.bindTooltip(`${districtName}`, {
      direction: "auto",
      className: "district-tooltip",
    });

    layer.on({
      mouseover: (e) => {
        setHoveredDistrict(districtName);
        e.target.setStyle({
          weight: 2,
          color: "#666",
          fillOpacity: 0.9,
        });
      },
      mouseout: (e) => {
        setHoveredDistrict(null);
        e.target.setStyle({
          weight: 1,
          color: "white",
          fillOpacity: 0.7,
        });
      },
    });
  };

  const getColorByWorkers = (workerCount) => {
    if (workerCount <= 50) {
      return "#fc9992"; // Light Red for 0-50 workers
    } else if (workerCount <= 180) {
      return "#ed1607"; // Medium Red for 51-180 workers
    } else {
      return "#a82b22"; // Dark Red for 181+ workers
    }
  };

  const geoJsonStyle = (district) => {
    const districtName = district.properties.Dist_Name;
    const workerCount = getCrewData(districtName);

    return {
      fillColor: getColorByWorkers(workerCount), // Set color based on worker count
      weight: 1,
      opacity: 1,
      color: "white",
      fillOpacity: 0.7,
    };
  };

  // Total counts for display
  const totalWorkers = hospitalData.reduce(
    (sum, district) => sum + district.total,
    0
  );

  // Return district data for the hovered district, or null if none
  const hoveredDistrictData =
    hospitalData.find((d) => d.name === hoveredDistrict) || null;

  // Function to get the center coordinates of a district for placing the marker
  const getDistrictCenter = (geometry) => {
    if (
      !geometry ||
      !geometry.coordinates ||
      geometry.coordinates.length === 0
    ) {
      console.warn("Invalid geometry:", geometry);
      return [0, 0]; // Return a default value or handle it appropriately
    }

    const coordinates = geometry.coordinates[0]; // Assuming the first coordinates are the relevant polygon
    if (!coordinates || coordinates.length === 0) {
      console.warn("No coordinates found for geometry:", geometry);
      return [0, 0]; // Return a default value or handle it appropriately
    }

    const latSum = coordinates.reduce((sum, coord) => sum + coord[1], 0);
    const lngSum = coordinates.reduce((sum, coord) => sum + coord[0], 0);
    return [latSum / coordinates.length, lngSum / coordinates.length];
  };

  return (
    <div className="flex flex-col lg:flex-row lg:w-[90vw] w-full relative ring-1 ring-white pt-6 rounded-md">
      <div className="relative bg-transparent w-full lg:w-3/5 p-6">
        {/* Tab Navigation */}
        <div className="flex overflow-x-auto mb-4">
          {[
            "total",
            "mason",
            "electrician",
            "plumber",
            "sanitarySesspoolOperator",
            "fstpHandler",
            "compostMaker",
            "sanitaryCrew",
            "wtpOperator",
            "bovPartners",
            "nalJalMitra",
            "solarPumpEngineer",
            "pondExcavator",
          ].map((tab) => {
            const IconComponent = categoryIcons[tab] || FaUsers; // Default icon if not found
            return (
              <button
                key={tab}
                className={`flex w-[150px] justify-center border-x-2 bordr-white items-center space-x-1 py-2 px-4 transition-all duration-300 ease-in-out ${
                  selectedTab === tab
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg transform scale-105"
                    : "bg-transparent text-white hover:bg-gray-300 hover:shadow-md"
                }`}
                onClick={() => setSelectedTab(tab)}
                aria-pressed={selectedTab === tab}
              >
                {/* Render the icon */}
                <IconComponent className="h-5 w-5" />
                <span className="capitalize">
                  {tab
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </span>
              </button>
            );
          })}
        </div>

        {/* Display Data */}
        <div className="absolute bg-gray-900 text-white p-4">
          <h1 className="text-xl font-bold mb-4">MoWash Jobs</h1>
          <>
            <h2 className="text-lg font-bold">
              {!hoveredDistrict ? "Odisha" : hoveredDistrict}
            </h2>
            <div>
              Total Workers:{" "}
              <strong>
                {!hoveredDistrict ? totalWorkers : hoveredDistrictData?.total}
              </strong>
            </div>
            {/* Dynamically display relevant crew data based on selected tab */}
            {selectedTab !== "total" && hoveredDistrictData && (
              <div>
                {selectedTab
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
                : <strong>{getCrewData(hoveredDistrict)}</strong>
              </div>
            )}
          </>
        </div>

        {/* Fixed Map showing only GeoJSON */}
        <div className="flex justify-center items-center">
          <MapContainer
            bounds={[
              [17.78, 81.337],
              [22.57, 87.53],
            ]}
            zoom={15}
            scrollWheelZoom={false}
            dragging={false}
            zoomControl={false}
            style={{
              height: "600px",
              width: "80%",
              marginTop: "40px",
              marginLeft: "100px",
            }}
            className="bg-transparent"
            doubleClickZoom={false}
            touchZoom={false}
            keyboard={false}
            boxZoom={false}
          >
            {/* Render GeoJSON when available */}
            {geoJsonData && (
              <>
                <GeoJSON
                  data={geoJsonData}
                  style={geoJsonStyle}
                  onEachFeature={onEachDistrict}
                />
                {/* Adding markers for each district */}
                {geoJsonData.features.map((district) => {
                  const districtName = district.properties.Dist_Name;
                  const crewData = getCrewData(districtName);
                  const center = getDistrictCenter(district.geometry);

                  // Check if center coordinates are valid
                  if (isNaN(center[0]) || isNaN(center[1])) {
                    console.warn(
                      `Invalid center for district ${districtName}:`,
                      center
                    );
                    return null; // Skip rendering this marker
                  }

                  return (
                    <Marker
                      key={districtName}
                      position={center}
                      icon={L.divIcon({
                        className: "custom-icon",
                        html: `<div style="color: white; background-color: rgba(0, 0, 255, 0.6); padding: 5px; border-radius: 5px;">${
                          crewData || 0
                        }</div>`,
                      })}
                    />
                  );
                })}
              </>
            )}
          </MapContainer>
        </div>
      </div>
      <div className="w-full lg:w-2/5">
        {/* Table component */}
        <h2 className="text-xl p-2 text-white font-bold mb-4">
          Jobs Done by District
        </h2>
        <div
          className="p-4"
          style={{ maxWidth: "100%", maxHeight: "800px", overflow: "auto" }}
        >
          <table className="min-w-full bg-transparent text-white border-collapse">
            <thead className="sticky -top-[30px] p-4 bg-gray-900">
              <tr>
                <th className="p-2 border-b">District</th>
                <th className="p-2 border-b">Total Jobs</th>
                {categories.map((category) => (
                  <th key={category} className="p-2 border-b">
                    {category
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase())}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {hospitalData.map(({ name, total, ...rest }) => (
                <tr key={name} className="border-b">
                  <td className="p-2">{name}</td>
                  <td className="p-2 text-yellow-300">{total}</td>
                  {categories.map((category) => (
                    <td
                      key={category}
                      className={`p-2 ${
                        selectedTab === category ? "bg-blue-200" : ""
                      }`}
                    >
                      {rest[category]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WorksDoneMap;
