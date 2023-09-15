"use client";
import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Map = () => {
  useEffect(() => {
    // Create a map instance and specify its location and zoom level
    const map = L.map('map').setView([1.3294, 103.7762], 13);

    // Add a base tile layer (e.g., OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  }, []);

  return (
    <div id="map" className="w-screen h-screen">
      {/* The map will be rendered here */}
    </div>
  );
};

export default Map;