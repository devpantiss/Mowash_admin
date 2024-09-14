import React, { useState, useEffect } from 'react';
import { MapContainer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const HospitalMap = () => {
  const [geoJsonData, setGeoJsonData] = useState(null);
  const [hoveredDistrict, setHoveredDistrict] = useState(null);


  // Hospital data for Odisha districts (dummy data)
  const hospitalData = {
    Angul: { total: 227, masons: 40, plumbers: 30, safaiKarmachari: 50, electricians: 25, fstpHandler: 40, sesspoolOperator: 10, facilityCrew: 32 },
    Baleshwar: { total: 401, masons: 70, plumbers: 40, safaiKarmachari: 60, electricians: 35, fstpHandler: 70, sesspoolOperator: 25, facilityCrew: 30 },
    Bargarh: { total: 287, masons: 60, plumbers: 35, safaiKarmachari: 50, electricians: 30, fstpHandler: 40, sesspoolOperator: 15, facilityCrew: 25 },
    Bhadrak: { total: 264, masons: 50, plumbers: 30, safaiKarmachari: 55, electricians: 25, fstpHandler: 45, sesspoolOperator: 20, facilityCrew: 39 },
    Balangir: { total: 305, masons: 65, plumbers: 40, safaiKarmachari: 60, electricians: 40, fstpHandler: 50, sesspoolOperator: 15, facilityCrew: 35 },
    Boudh: { total: 85, masons: 20, plumbers: 10, safaiKarmachari: 15, electricians: 10, fstpHandler: 15, sesspoolOperator: 5, facilityCrew: 10 },
    Cuttack: { total: 642, masons: 150, plumbers: 80, safaiKarmachari: 130, electricians: 90, fstpHandler: 100, sesspoolOperator: 30, facilityCrew: 62 },
    Debagarh: { total: 57, masons: 10, plumbers: 5, safaiKarmachari: 12, electricians: 7, fstpHandler: 10, sesspoolOperator: 3, facilityCrew: 10 },
    Dhenkanal: { total: 246, masons: 55, plumbers: 35, safaiKarmachari: 60, electricians: 30, fstpHandler: 45, sesspoolOperator: 10, facilityCrew: 11 },
    Gajapati: { total: 171, masons: 40, plumbers: 20, safaiKarmachari: 40, electricians: 25, fstpHandler: 30, sesspoolOperator: 8, facilityCrew: 8 },
    Ganjam: { total: 653, masons: 140, plumbers: 80, safaiKarmachari: 140, electricians: 90, fstpHandler: 130, sesspoolOperator: 33, facilityCrew: 40 },
    Jagatsinghapur: { total: 255, masons: 60, plumbers: 30, safaiKarmachari: 55, electricians: 40, fstpHandler: 50, sesspoolOperator: 10, facilityCrew: 10 },
    Jajapur: { total: 370, masons: 75, plumbers: 50, safaiKarmachari: 80, electricians: 55, fstpHandler: 60, sesspoolOperator: 20, facilityCrew: 30 },
    Jharsuguda: { total: 96, masons: 20, plumbers: 10, safaiKarmachari: 20, electricians: 10, fstpHandler: 15, sesspoolOperator: 5, facilityCrew: 16 },
    Kalahandi: { total: 322, masons: 65, plumbers: 40, safaiKarmachari: 70, electricians: 40, fstpHandler: 55, sesspoolOperator: 20, facilityCrew: 32 },
    Kandhamal: { total: 229, masons: 50, plumbers: 25, safaiKarmachari: 45, electricians: 35, fstpHandler: 40, sesspoolOperator: 10, facilityCrew: 14 },
    Kendrapara: { total: 301, masons: 70, plumbers: 35, safaiKarmachari: 60, electricians: 40, fstpHandler: 50, sesspoolOperator: 10, facilityCrew: 36 },
    Keonjhar: { total: 449, masons: 100, plumbers: 50, safaiKarmachari: 90, electricians: 70, fstpHandler: 80, sesspoolOperator: 20, facilityCrew: 39 },
    Khordha: { total: 455, masons: 90, plumbers: 60, safaiKarmachari: 100, electricians: 80, fstpHandler: 90, sesspoolOperator: 20, facilityCrew: 15 },
    Koraput: { total: 381, masons: 75, plumbers: 40, safaiKarmachari: 75, electricians: 60, fstpHandler: 60, sesspoolOperator: 25, facilityCrew: 46 },
    Malkangiri: { total: 194, masons: 40, plumbers: 20, safaiKarmachari: 35, electricians: 25, fstpHandler: 30, sesspoolOperator: 8, facilityCrew: 36 },
    Mayurbhanj: { total: 719, masons: 150, plumbers: 80, safaiKarmachari: 150, electricians: 100, fstpHandler: 110, sesspoolOperator: 30, facilityCrew: 39 },
    Nabarangapur: { total: 246, masons: 50, plumbers: 30, safaiKarmachari: 45, electricians: 35, fstpHandler: 40, sesspoolOperator: 10, facilityCrew: 36 },
    Nayagarh: { total: 255, masons: 60, plumbers: 35, safaiKarmachari: 50, electricians: 35, fstpHandler: 45, sesspoolOperator: 10, facilityCrew: 20 },
    Nuapada: { total: 121, masons: 25, plumbers: 15, safaiKarmachari: 25, electricians: 20, fstpHandler: 20, sesspoolOperator: 5, facilityCrew: 11 },
    Puri: { total: 344, masons: 75, plumbers: 50, safaiKarmachari: 70, electricians: 50, fstpHandler: 65, sesspoolOperator: 10, facilityCrew: 24 },
    Rayagada: { total: 291, masons: 60, plumbers: 40, safaiKarmachari: 55, electricians: 40, fstpHandler: 55, sesspoolOperator: 15, facilityCrew: 26 },
    Sambalpur: { total: 341, masons: 70, plumbers: 45, safaiKarmachari: 60, electricians: 50, fstpHandler: 55, sesspoolOperator: 20, facilityCrew: 41 },
    Subarnapur: { total: 229, masons: 50, plumbers: 25, safaiKarmachari: 45, electricians: 35, fstpHandler: 45, sesspoolOperator: 9, facilityCrew: 20 },
    Sundargarh: { total: 719, masons: 150, plumbers: 85, safaiKarmachari: 145, electricians: 110, fstpHandler: 120, sesspoolOperator: 35, facilityCrew: 74 },
  };

   // Fetch GeoJSON data when the component mounts
  useEffect(() => {
    fetch('/Orissa.geojson') // Path relative to the public folder
      .then((response) => response.json())
      .then((data) => {
        setGeoJsonData(data);
      })
      .catch((error) => {
        console.error('Error fetching GeoJSON:', error);
      });
  }, []);

  // Styling for districts based on hospital count
  const styleDistrict = (feature) => {
    const districtName = feature.properties.Dist_Name;
    const hospitalCount = hospitalData[districtName]?.total || 0;

    return {
      fillColor: hospitalCount > 300 ? 'green' : hospitalCount > 150 ? 'yellow' : 'orange',
      weight: 1,
      opacity: 1,
      color: 'white',
      fillOpacity: 0.7,
    };
  };

  // Event handlers for each district
  const onEachDistrict = (district, layer) => {
    const districtName = district.properties.Dist_Name;
    const hospitalCount = hospitalData[districtName]?.total || 0;

    // Bind a tooltip to show only the district name on hover
    layer.bindTooltip(`${districtName}`, {
      direction: 'auto',
      className: 'district-tooltip',
    });

    // Bind a popup to display the total number of workers inside the district on the map
    const popupContent = `<div style="text-align: center; font-weight: bold; font-size: 16px;">${hospitalCount}</div>`;
    layer.bindPopup(popupContent, {
      className: 'district-popup',
      autoClose: false,
      closeOnClick: false,
    }).openPopup();

    layer.on({
      mouseover: (e) => {
        setHoveredDistrict(districtName);
        e.target.setStyle({
          weight: 2,
          color: '#666',
          fillOpacity: 0.9,
        });
      },
      mouseout: (e) => {
        setHoveredDistrict(null);
        e.target.setStyle({
          weight: 1,
          color: 'white',
          fillOpacity: 0.7,
        });
      },
    });
  };

  // Fixed bounds for Odisha
  const odishaBounds = [
    [17.780, 81.337], // Southwest corner
    [22.570, 87.530], // Northeast corner
  ];

  // Total hospital count for all districts
  const totalWorkers = Object.values(hospitalData).reduce((sum, district) => sum + district.total, 0);

  // Return district data for the hovered district, or null if none
  const hoveredDistrictData = hospitalData[hoveredDistrict] || null;

  return (
    <div className="relative bg-transparent">
      {/* Data Display on the left */}
      <div className="absolute bg-gray-900 text-white p-4">
        <h1 className="text-xl font-bold mb-4">MoWash Engineers</h1>
        {/* Show total hospitals when no district is hovered */}
        {!hoveredDistrict ? (
          <>
            <div>Total Workers: <strong>{totalWorkers}</strong></div>
            <div>Masons: <strong>{Object.values(hospitalData).reduce((sum, district) => sum + district.masons, 0)}</strong></div>
            <div>Plumbers: <strong>{Object.values(hospitalData).reduce((sum, district) => sum + district.plumbers, 0)}</strong></div>
            <div>Safai Karmachari: <strong>{Object.values(hospitalData).reduce((sum, district) => sum + district.safaiKarmachari, 0)}</strong></div>
            <div>Electricians: <strong>{Object.values(hospitalData).reduce((sum, district) => sum + district.electricians, 0)}</strong></div>
            <div>FSTP Handlers: <strong>{Object.values(hospitalData).reduce((sum, district) => sum + district.fstpHandler, 0)}</strong></div>
            <div>Sesspool Operators: <strong>{Object.values(hospitalData).reduce((sum, district) => sum + district.sesspoolOperator, 0)}</strong></div>
            <div>Facility Crews: <strong>{Object.values(hospitalData).reduce((sum, district) => sum + district.facilityCrew, 0)}</strong></div>
          </>
        ) : (
          <div className="mt-4 p-2 border border-gray-500 rounded">
            <h2 className="text-lg font-bold">{hoveredDistrict}</h2>
            <div>Total Workers: <strong>{hoveredDistrictData?.total}</strong></div>
            <div>Masons: <strong>{hoveredDistrictData?.masons}</strong></div>
            <div>Plumbers: <strong>{hoveredDistrictData?.plumbers}</strong></div>
            <div>Safai Karmachari: <strong>{hoveredDistrictData?.safaiKarmachari}</strong></div>
            <div>Electricians: <strong>{hoveredDistrictData?.electricians}</strong></div>
            <div>FSTP Handlers: <strong>{hoveredDistrictData?.fstpHandler}</strong></div>
            <div>Sesspool Operators: <strong>{hoveredDistrictData?.sesspoolOperator}</strong></div>
            <div>Facility Crews: <strong>{hoveredDistrictData?.facilityCrew}</strong></div>
          </div>
        )}
      </div>

      {/* Fixed Map showing only GeoJSON */}
      <div className="relative">
        <MapContainer
          bounds={odishaBounds}  // Limit the map to Odisha boundaries
          zoom={5}               // Set a fixed zoom level
          scrollWheelZoom={false} // Disable scroll zoom
          dragging={false}        // Disable dragging (makes the map fixed)
          zoomControl={false}     // Remove zoom controls
          style={{ height: '100vh', width: '100%', background: 'none' }} // Remove background
          doubleClickZoom={false} // Disable double-click zoom
          touchZoom={false}       // Disable zoom on mobile touch
          keyboard={false}        // Disable zoom/pan via keyboard
          boxZoom={false}        // Disable zoom via box selection
        >
          {/* Render GeoJSON when available */}
          {geoJsonData && (
            <GeoJSON data={geoJsonData} style={styleDistrict} onEachFeature={onEachDistrict} />
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default HospitalMap;