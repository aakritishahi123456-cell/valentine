import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default Leaflet icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Custom Heart Icon (optional, using default for now to ensure visibility)
// A real heart icon would be better but requires an asset.

function LocationMarker({ onAddMarker }) {
    useMapEvents({
        click(e) {
            const title = prompt("What memory happened here?");
            if (title) {
                onAddMarker(e.latlng, title);
            }
        },
    });
    return null;
}

const MemoryMap = () => {
    const [markers, setMarkers] = useState([
        { position: [48.8566, 2.3522], title: "Dream Destination: Paris" }, // Default: Paris
    ]);

    const addMarker = (position, title) => {
        setMarkers([...markers, { position, title }]);
    };

    return (
        <div className="w-full max-w-4xl mx-auto my-12 p-4 bg-white/60 backdrop-blur-md rounded-xl shadow-lg">
            <h2 className="text-3xl font-heading text-center text-rose-800 mb-4">Map of Our Love</h2>
            <p className="text-center text-gray-600 mb-4">Click anywhere on the map to pin a memory.</p>

            <div className="h-[400px] w-full rounded-lg overflow-hidden border-2 border-white shadow-inner">
                <MapContainer center={[48.8566, 2.3522]} zoom={3} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <LocationMarker onAddMarker={addMarker} />
                    {markers.map((marker, idx) => (
                        <Marker key={idx} position={marker.position}>
                            <Popup>{marker.title}</Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
};

export default MemoryMap;
