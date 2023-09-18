"use client";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.locatecontrol";
import axios from "axios";

const Map = () => {
  const [mapInstance, setMapInstance] = useState<any>(null);
  const [locations, setLocations] = useState<any>(null);
  const icon = L.icon({
    iconUrl: "leaf-green.png",
    shadowUrl: "leaf-shadow.png",
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76],
  });

  useEffect(() => {
    // Create a map instance and specify its location and zoom level
    const map = L.map("map").setView([1.3294, 103.7762], 1000);
    setMapInstance(map); // Save the map instance to state

    // Add a base tile layer (e.g., OpenStreetMap)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.control
      .locate({
        position: "topright",
        strings: {
          title: "Show me where I am, yo!",
        },
      })
      .addTo(map);
  }, []);

  useEffect(() => {
    async function fetchLocation() {
      const response = await axios.get("/recyclingBins.geojson");
      const data = response.data;
      console.log(data);

      setLocations(data);
    }

    fetchLocation();
  }, []);

  useEffect(() => {
    if (mapInstance === null || locations === null) return; // Wait until the map instance is available && data is fetched
    console.log(locations);

    async function displayMarkers() {
      try {
        const binFeatures = locations.features.filter((feature: any) => {
          const latlng = L.latLng(
            feature.geometry.coordinates[1],
            feature.geometry.coordinates[0]
          );

          return mapInstance.getBounds().contains(latlng);
        });

        // Clear existing markers
        mapInstance.eachLayer((layer: any) => {
          if (layer instanceof L.Marker) {
            mapInstance.removeLayer(layer);
          }
        });

        // Add new markers based on filtered GeoJSON data
        L.geoJson(binFeatures, {
          pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
              icon: icon,
            }).bindPopup(feature.properties.Name);
          },
        }).addTo(mapInstance);
      } catch (error) {
        console.error("Error rendering markers:", error);
      }
    }

    // Call displayMarkers when the map bounds change
    mapInstance.on("moveend", displayMarkers);
    displayMarkers(); // Call it initially to render markers
  }, [mapInstance, locations]);

  return <div id="map" className="w-screen h-screen"></div>;
};

export default Map;
