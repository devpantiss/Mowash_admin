import React from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom marker icon with a specific color using L.DivIcon
const customMarker = new L.DivIcon({
    className: 'custom-icon', // Custom CSS class for the marker
    html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
            <path fill="#2563eb" d="M12 2C8.1 2 5 5.1 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
        </svg>`, // Custom SVG marker with the desired color
    iconSize: [32, 32], // Size of the marker
    iconAnchor: [16, 32], // Point of the marker which will correspond to marker's location
});

// Define the locations (latitude, longitude, and details)
const locations = [
    { name: 'Korba, Chhattisgarh', coords: [22.3595, 82.7501], details: 'Korba is a major mining hub in Chhattisgarh.' },
    { name: 'Dhanbad & Bokaro, Jharkhand', coords: [23.7957, 86.4304], details: 'Known for coal mining, Dhanbad is the coal capital of India.' },
    { name: 'Asansol & Durgapur, West Bengal', coords: [23.6850, 87.8354], details: 'A prominent industrial and mining region in West Bengal.' },
    { name: 'Joda & Barbil, Keonjhar, Odisha', coords: [22.1244, 85.4114], details: 'This region is rich in iron ore deposits.' },
    { name: 'Talcher, Angul, Odisha', coords: [20.9497, 85.2335], details: 'A significant coal mining and industrial area.' },
    { name: 'Koida & Bonai, Sundargarh, Odisha', coords: [21.8396, 85.1601], details: 'Known for mining iron ore and manganese.' },
    { name: 'Bisamcuttack, Rayagada, Odisha', coords: [19.1574, 83.3905], details: 'A key region for aluminum mining and indigenous communities.' },
    { name: 'Kolar Gold mines, Karnataka', coords: [13.1360, 78.2772], details: 'Kolar was one of the largest gold mines in India.' },
    { name: 'Kodarma, Jharkhand', coords: [24.4676, 85.5933], details: 'Known for its mica mining.' },
    { name: 'Kalahandi, Odisha', coords: [19.9137, 83.1649], details: 'A tribal region known for bauxite and other minerals.' },
    { name: 'Jajpur, Odisha', coords: [20.8378, 86.3377], details: 'Known for its chromite deposits.' },
    { name: 'Cuttack, Odisha', coords: [20.4625, 85.8828], details: 'A major city and industrial area.' },
    { name: 'Khordha, Odisha', coords: [20.1825, 85.6162], details: 'Rich in industrial activities and natural resources.' },
    { name: 'Nayagarh, Odisha', coords: [20.1285, 85.1095], details: 'Known for its scenic beauty and emerging industries.' },
    { name: 'Kendrapara, Odisha', coords: [20.5016, 86.4221], details: 'Agricultural and industrial growth area.' },
    { name: 'Jharsuguda, Odisha', coords: [21.8569, 84.0063], details: 'A growing industrial area in Odisha.' },
    { name: 'Sundargarh, Odisha', coords: [22.1167, 84.0306], details: 'An important area for iron ore mining.' },
    { name: 'Nuapada, Odisha', coords: [20.8333, 82.6294], details: 'Known for its natural resources.' },
    { name: 'Kendujhar, Odisha', coords: [21.6287, 85.5817], details: 'Famous for its iron ore deposits.' },
    { name: 'Chaiwasa, Jharkhand', coords: [22.5563, 85.6315], details: 'A key area for mining and minerals.' },
    { name: 'Nagaland', coords: [26.1584, 94.5624], details: 'Rich in oil, natural gas, and minerals.' },
    { name: 'Neyveli, Tamil Nadu', coords: [11.5975, 79.4861], details: 'Known for lignite mining and thermal power generation.' },
    { name: 'Ratnagiri, Maharashtra', coords: [16.9902, 73.3120], details: 'A coastal town with important mining and industrial activities.' },
    { name: 'Chandrapur, Maharashtra', coords: [19.9506, 79.2961], details: 'Known for coal mining and power plants.' },
    { name: 'Singrauli, Madhya Pradesh', coords: [24.1994, 82.6645], details: 'An important region for coal mining and power generation.' },
];

// API Key
const api_key = "8f741830-1254-408f-a58c-cdbbf7deba3c"; // Replace with your actual API key

const MapComponent = () => {
    return (
        <MapContainer
            center={[22.9734, 78.6569]}
            zoom={5}
            style={{ height: '600px', width: '100%' }}
            scrollWheelZoom={false}
        >
            {/* Use a dark-themed tile layer and inject the API key */}
            <TileLayer
                attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
                url={`https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png?api_key=${api_key}`} // Use template literal to insert API key
            />
            {locations.map((location, index) => (
                <Marker key={index} position={location.coords} icon={customMarker}>
                    <Tooltip direction="top" offset={[0, -10]} opacity={1}>
                        <div>
                            <strong>{location.name}</strong>
                            <br />
                            {location.details}
                        </div>
                    </Tooltip>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapComponent;
