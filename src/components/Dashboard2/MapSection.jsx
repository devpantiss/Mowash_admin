import React, { useState, useEffect } from "react";
import { MapContainer, GeoJSON, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
  FaUsers,
  FaHandHoldingWater,
  FaToilet,
  FaBolt,
  FaLeaf,
  FaMapMarkerAlt,
} from "react-icons/fa";

const MapSection = () => {
  const [geoJsonData, setGeoJsonData] = useState(null);
  const [hoveredBlock, setHoveredBlock] = useState(null);
  const [selectedTab, setSelectedTab] = useState("total");

  // Household survey categories
  const categories = [
    "householdsSurveyed",
    "waterAccess",
    "sanitationFacilities",
    "electricityAccess",
    "wasteManagement",
  ];

  // Icons for each category
  const categoryIcons = {
    total: FaUsers,
    householdsSurveyed: FaUsers,
    waterAccess: FaHandHoldingWater,
    sanitationFacilities: FaToilet,
    electricityAccess: FaBolt,
    wasteManagement: FaLeaf,
  };

  // Dummy household survey data for all blocks
  const householdData = [
    {
      name: "Sukinda",
      householdsSurveyed: 1200,
      waterAccess: 800,
      sanitationFacilities: 600,
      electricityAccess: 900,
      wasteManagement: 400,
      total: 1200,
    },
    {
      name: "Danagadi",
      householdsSurveyed: 1450,
      waterAccess: 950,
      sanitationFacilities: 650,
      electricityAccess: 1050,
      wasteManagement: 450,
      total: 1450,
    },
  ];

  const blockColors = {
    Sukinda: "#ef4444",
    Badchana: "#3b82f6",
    Bari: "#10b981",
    Binjharpur: "#f59e0b",
    Danagadi: "#8b5cf6",
    Dasarathpur: "#ec4899",
    Dharmasala: "#14b8a6",
    Jajapur: "#f97316",
    Korai: "#6b7280",
    Rasulpur: "#84cc16",
  };

  useEffect(() => {
    fetch("/map.geojson")
      .then((response) => response.json())
      .then((data) => {
        console.log("GeoJSON Data Loaded:", data);
        setGeoJsonData(data);
      })
      .catch((error) => console.error("Error fetching GeoJSON:", error));
  }, []);

  const getCrewData = (blockName) => {
    const block = householdData.find((d) => d.name === blockName);
    if (!block) {
      console.warn(`No household data found for block: ${blockName}`);
      return 0;
    }

    switch (selectedTab) {
      case "householdsSurveyed":
        return block.householdsSurveyed;
      case "waterAccess":
        return block.waterAccess;
      case "sanitationFacilities":
        return block.sanitationFacilities;
      case "electricityAccess":
        return block.electricityAccess;
      case "wasteManagement":
        return block.wasteManagement;
      default:
        return block.total;
    }
  };

  const onEachBlock = (block, layer) => {
    const blockName = block.properties.Name;
    if (!blockName) {
      console.warn("Block missing Name property:", block);
      return;
    }

    layer.bindTooltip(
      L.tooltip({
        direction: "auto",
        offset: [0, -10],
        opacity: 0.95,
        className: "tooltip-custom",
      }).setContent(`
        <div class="flex items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 rounded-lg shadow-xl border border-blue-200">
          <svg class="h-5 w-5 mr-2 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <div>
            <h4 class="text-sm font-semibold">${blockName}</h4>
            <p class="text-xs">
              ${
                selectedTab === "total"
                  ? "Households"
                  : selectedTab
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase())
              }: <strong class="text-yellow-300">${getCrewData(blockName)}</strong>
            </p>
          </div>
        </div>
      `)
    );

    layer.on({
      mouseover: (e) => {
        setHoveredBlock(blockName);
        e.target.setStyle({
          weight: 3,
          color: "#333",
          fillOpacity: 0.9,
        });
        e.target.openTooltip();
      },
      mouseout: (e) => {
        setHoveredBlock(null);
        e.target.setStyle({
          weight: 1,
          color: "white",
          fillOpacity: 0.7,
        });
        e.target.closeTooltip();
      },
    });
  };

  const geoJsonStyle = (block) => {
    const blockName = block.properties.Name;
    return {
      fillColor: blockColors[blockName] || "#000000",
      weight: 1,
      opacity: 1,
      color: "white",
      fillOpacity: 0.7,
    };
  };

  const totalHouseholds = householdData.reduce(
    (sum, block) => sum + block.total,
    0
  );

  const hoveredBlockData =
    householdData.find((d) => d.name === hoveredBlock) || null;

  const getBlockCenter = (geometry) => {
    if (!geometry || !geometry.coordinates || geometry.coordinates.length === 0) {
      console.warn("Invalid geometry:", geometry);
      return [20.85, 86.0];
    }

    const coordinates = geometry.coordinates[0];
    if (!coordinates || coordinates.length === 0) {
      console.warn("No coordinates found for geometry:", geometry);
      return [20.85, 86.0];
    }

    const latSum = coordinates.reduce((sum, coord) => sum + coord[1], 0);
    const lngSum = coordinates.reduce((sum, coord) => sum + coord[0], 0);
    return [latSum / coordinates.length, lngSum / coordinates.length];
  };

  return (
    <div className="flex flex-col lg:flex-row lg:w-[90vw] w-full relative ring-2 ring-teal-200 pt-6 rounded-md bg-transparent">
      <div className="relative bg-transparent w-full lg:w-3/5 p-6">
        {/* Tab Navigation */}
        <div className="flex overflow-x-auto mb-4 space-x-1">
          {["total", ...categories].map((tab) => {
            const IconComponent = categoryIcons[tab] || FaUsers;
            return (
              <button
                key={tab}
                className={`flex w-[150px] justify-center items-center space-x-2 py-2 px-4 rounded-md transition-all duration-300 ease-in-out ${
                  selectedTab === tab
                    ? "bg-teal-600 text-white shadow-lg"
                    : "bg-gray-700 text-gray-200 hover:bg-gray-600"
                }`}
                onClick={() => setSelectedTab(tab)}
                aria-pressed={selectedTab === tab}
                title={tab
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              >
                <IconComponent className="h-5 w-5" aria-hidden="true" />
                <span className="text-sm capitalize">
                  {tab
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </span>
              </button>
            );
          })}
        </div>

        {/* Data Display */}
        <div className="absolute top-[85px] right-6 ring-2 ring-teal-200 bg-teal-900 text-white p-2 rounded-lg shadow-lg z-[1000]">
          <h1 className="text-xl font-semibold mb-3">Household Survey - Jajpur</h1>
          <h2 className="text-lg font-medium mb-2">
            {!hoveredBlock ? "All Blocks" : hoveredBlock}
          </h2>
          <div className="text-sm">
            Total Households Surveyed:{" "}
            <strong className="text-yellow-300">
              {!hoveredBlock ? totalHouseholds : hoveredBlockData?.total}
            </strong>
          </div>
          {selectedTab !== "total" && hoveredBlockData && (
            <div className="text-sm mt-2">
              {selectedTab
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}:{" "}
              <strong className="text-yellow-300">{getCrewData(hoveredBlock)}</strong>
            </div>
          )}
        </div>

        {/* Map */}
        <MapContainer
          bounds={[
            [20.58, 85.68],
            [21.16, 86.61],
          ]}
          zoom={10}
          scrollWheelZoom={false}
          dragging={false}
          zoomControl={false}
          doubleClickZoom={false}
          touchZoom={false}
          keyboard={false}
          boxZoom={false}
          style={{
            height: "650px",
            width: "100%",
            marginTop: "40px",
            backgroundColor: "#1b2b28",
            border: "2px solid #99F6E4",
          }}
          className="bg-transparent rounded-lg ring-2 ring-teal-200 shadow-md"
        >
          {geoJsonData && (
            <GeoJSON
              data={geoJsonData}
              style={geoJsonStyle}
              onEachFeature={onEachBlock}
            />
          )}
          {geoJsonData &&
            geoJsonData.features.map((block) => {
              const blockName = block.properties.Name;
              const crewData = getCrewData(blockName);
              const center = getBlockCenter(block.geometry);

              if (isNaN(center[0]) || isNaN(center[1])) {
                console.warn(`Invalid center for block ${blockName}:`, center);
                return null;
              }

              return (
                <Marker
                  key={blockName}
                  position={center}
                  icon={L.divIcon({
                    className: "custom-icon",
                    html: `<div style="color: white; background-color: rgba(0, 0, 255, 0.7); padding: 6px 12px; border-radius: 8px; font-size: 14px; font.magic: bold;">${
                      crewData || 0
                    }</div>`,
                  })}
                />
              );
            })}
        </MapContainer>
      </div>
      <div className="w-full lg:w-2/5 p-6">
        <h2 className="text-xl text-white font-semibold mb-4">Household Survey by Block</h2>
        <div
          className="bg-gray-800 rounded-lg shadow-md"
          style={{ maxWidth: "100%", overflow: "auto" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
            {householdData.map(({ name, total, ...rest }, index) => (
              <div
                key={name}
                className={`bg-gray-800 rounded-lg p-4 shadow-md hover:bg-gray-700 transition-all duration-300 ${
                  index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
                }`}
              >
                <h3 className="text-lg font-medium text-white mb-2">{name}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Total Households</span>
                    <span className="text-sm text-yellow-300 font-medium">{total}</span>
                  </div>
                  {categories.map((category) => (
                    <div
                      key={category}
                      className={`flex justify-between items-center ${
                        selectedTab === category ? "bg-teal-700 text-white rounded-md p-1" : "text-gray-300"
                      }`}
                    >
                      <span className="text-sm capitalize">
                        {category
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase())}
                      </span>
                      <span className="text-sm">
                        {rest[category]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;