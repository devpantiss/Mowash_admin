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

const WorkersMap = () => {
  const [geoJsonData, setGeoJsonData] = useState(null);
  const [hoveredDistrict, setHoveredDistrict] = useState(null);
  const [selectedTab, setSelectedTab] = useState("total"); // Default to "total"

  // Define all categories for consistent table headers
  const categories = [
    "masons",
    "electricians",
    "plumbers",
    "cesspoolOperator",
    "fstpHandler",
    "compostMakers",
    "sanitaryCrew",
    "wtpoperator",
    "bovPartners",
    "nalJalMitra",
    "solarPumpEngineer",
    "pondExcavator",
  ];

  console.log(geoJsonData);

  const categoryIcons = {
    total: FaUsers,
    mason: FaHardHat,
    electrician: FaBolt,
    plumber: FaWrench,
    cesspoolOperator: FaWater,
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
      name: "Ganjam",
      masons: 2,
      electricians: 2,
      plumbers: 2,
      cesspoolOperator: 2,
      fstpHandler: 1,
      compostMakers: 3,
      sanitaryCrew: 2,
      wtpoperator: 8,
      bovPartners: 3,
      nalJalMitra: 5,
      solarPumpEngineer: 1,
      pondExcavator: 2,
      total: 34,
    },
    {
      name: "Bhadrak",
      masons: 5,
      electricians: 14,
      plumbers: 3,
      cesspoolOperator: 9,
      fstpHandler: 2,
      compostMakers: 3,
      sanitaryCrew: 17,
      wtpoperator: 5,
      bovPartners: 3,
      nalJalMitra: 5,
      solarPumpEngineer: 7,
      pondExcavator: 2,
      total: 75,
    },
    {
      name: "Angul",
      masons: 3,
      electricians: 25,
      plumbers: 5,
      cesspoolOperator: 14,
      fstpHandler: 11,
      compostMakers: 10,
      sanitaryCrew: 8,
      wtpoperator: 8,
      bovPartners: 3,
      nalJalMitra: 5,
      solarPumpEngineer: 12,
      pondExcavator: 7,
      total: 111,
    },
    {
      name: "Jajapur",
      masons: 21,
      electricians: 19,
      plumbers: 17,
      cesspoolOperator: 7,
      fstpHandler: 22,
      compostMakers: 3,
      sanitaryCrew: 28,
      wtpoperator: 3,
      bovPartners: 2,
      nalJalMitra: 2,
      solarPumpEngineer: 1,
      pondExcavator: 1,
      total: 126,
    },
    {
      name: "Jharsuguda",
      masons: 6,
      electricians: 4,
      plumbers: 3,
      cesspoolOperator: 2,
      fstpHandler: 5,
      compostMakers: 0,
      sanitaryCrew: 4,
      wtpoperator: 1,
      bovPartners: 1,
      nalJalMitra: 3,
      solarPumpEngineer: 0,
      pondExcavator: 2,
      total: 31,
    },
    {
      name: "Kalahandi",
      masons: 14,
      electricians: 17,
      plumbers: 14,
      cesspoolOperator: 7,
      fstpHandler: 25,
      compostMakers: 1,
      sanitaryCrew: 14,
      wtpoperator: 5,
      bovPartners: 2,
      nalJalMitra: 3,
      solarPumpEngineer: 1,
      pondExcavator: 2,
      total: 45,
    },
    {
      name: "Kandhamal",
      masons: 20,
      electricians: 14,
      plumbers: 11,
      cesspoolOperator: 3,
      fstpHandler: 11,
      compostMakers: 1,
      sanitaryCrew: 11,
      wtpoperator: 1,
      bovPartners: 1,
      nalJalMitra: 4,
      solarPumpEngineer: 1,
      pondExcavator: 1,
      total: 78,
    },
    {
      name: "Koraput",
      masons: 14,
      electricians: 8,
      plumbers: 6,
      cesspoolOperator: 3,
      fstpHandler: 11,
      compostMakers: 1,
      sanitaryCrew: 8,
      wtpoperator: 1,
      bovPartners: 1,
      nalJalMitra: 3,
      solarPumpEngineer: 1,
      pondExcavator: 0,
      total: 57,
    },
    {
      name: "Nuapada",
      masons: 14,
      electricians: 8,
      plumbers: 6,
      cesspoolOperator: 3,
      fstpHandler: 11,
      compostMakers: 1,
      sanitaryCrew: 6,
      wtpoperator: 1,
      bovPartners: 1,
      nalJalMitra: 2,
      solarPumpEngineer: 1,
      pondExcavator: 1,
      total: 55,
    },
    {
      name: "Sundergarh",
      masons: 28,
      electricians: 23,
      plumbers: 20,
      cesspoolOperator: 6,
      fstpHandler: 25,
      compostMakers: 3,
      sanitaryCrew: 25,
      wtpoperator: 8,
      bovPartners: 2,
      nalJalMitra: 3,
      solarPumpEngineer: 1,
      pondExcavator: 1,
      total: 45,
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
        return district.cesspoolOperator;
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
      return "#64f586"; // Light Red for 0-50 workers
    } else if (workerCount <= 180) {
      return "#02f53b"; // Medium Red for 51-180 workers
    } else {
      return "#179c36"; // Dark Red for 181+ workers
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
            "cesspoolOperator",
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
          <h1 className="text-xl font-bold mb-4">MoWash Engineers</h1>
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
        <h2 className="text-xl text-white p-2 font-bold mb-4">
          Workers by District
        </h2>
        <div
          className="p-4"
          style={{ maxWidth: "100%", maxHeight: "800px", overflow: "auto" }}
        >
          <table className="min-w-full bg-transparent text-white border-collapse">
            <thead className="sticky -top-[30px] p-4 bg-gray-900">
              <tr>
                <th className="p-2 border-b">District</th>
                <th className="p-2 border-b">Total Workers</th>
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
                  <td className="p-2 text-center">{name}</td>
                  <td className="p-2 text-center text-yellow-300">{total}</td>
                  {categories.map((category) => (
                    <td
                      key={category}
                      className={`p-2 text-center ${
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

export default WorkersMap;
