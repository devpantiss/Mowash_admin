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

const UsersMap = () => {
  const [geoJsonData, setGeoJsonData] = useState(null);
  const [hoveredDistrict, setHoveredDistrict] = useState(null);

  // Hospital data for Odisha districts (dummy data)
  const hospitalData = [
    { name: "Angul", total: 120 },
    { name: "Balangir", total: 90 },
    { name: "Balasore", total: 150 },
    { name: "Bargarh", total: 60 },
    { name: "Bhadrak", total: 110 },
    { name: "Boudh", total: 80 },
    { name: "Cuttack", total: 210 },
    { name: "Deogarh", total: 40 },
    { name: "Dhenkanal", total: 100 },
    { name: "Gajapati", total: 70 },
    { name: "Ganjam", total: 230 },
    { name: "Jagatsinghpur", total: 95 },
    { name: "Jajpur", total: 160 },
    { name: "Jharsuguda", total: 50 },
    { name: "Kalahandi", total: 120 },
    { name: "Kandhamal", total: 85 },
    { name: "Kendrapara", total: 130 },
    { name: "Kendujhar", total: 105 },
    { name: "Khordha", total: 300 },
    { name: "Koraput", total: 75 },
    { name: "Malkangiri", total: 40 },
    { name: "Mayurbhanj", total: 140 },
    { name: "Nabarangpur", total: 55 },
    { name: "Nayagarh", total: 90 },
    { name: "Nuapada", total: 45 },
    { name: "Puri", total: 180 },
    { name: "Rayagada", total: 65 },
    { name: "Sambalpur", total: 170 },
    { name: "Subarnapur", total: 30 },
    { name: "Sundargarh", total: 200 },
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
    return district ? district.total : 0;
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
      return "#faefa5"; // Light Red for 0-50 workers
    } else if (workerCount <= 180) {
      return "#f7d80a"; // Medium Red for 51-180 workers
    } else {
      return "#bfa919"; // Dark Red for 181+ workers
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
        {/* Display Data */}
        <div className="absolute bg-gray-900 text-white p-4">
          <h1 className="text-xl font-bold mb-4">MoWash Users</h1>
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
          Users by District
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
              </tr>
            </thead>
            <tbody>
              {hospitalData.map(({ name, total }) => (
                <tr key={name} className="border-b">
                  <td className="p-2 text-center">{name}</td>
                  <td className="p-2 text-center text-yellow-300">{total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersMap;
