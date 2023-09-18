"use client";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";

const Map = () => {
  useEffect(() => {
    // Create a map instance and specify its location and zoom level
    const map = L.map("map").setView([1.3294, 103.7762], 13);

    // Add a base tile layer (e.g., OpenStreetMap)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const icon = L.icon({
      iconUrl: "leaf-green.png",
      shadowUrl: "leaf-shadow.png",

      iconSize: [38, 95],
      shadowSize: [50, 64],
      iconAnchor: [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76],
    });
    async function getData() {
      const data = (await axios.get("/recyclingBins.geojson")).data;
      const binFeatures = data.features;
      L.geoJson(binFeatures, {
        pointToLayer: function (feature, latlng) {
          return L.marker(latlng, {
            icon: icon,
          });
        },
      }).addTo(map);
    }
    getData();
  }, []);

  return (
    <div id="map" className="w-screen h-screen">
      {/* The map will be rendered here */}
    </div>
  );
};

export default Map;
