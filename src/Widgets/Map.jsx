import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const LeafletMap = ({ address }) => {
  console.log(address);
  return (
    <div id="map" className="w-1/2 h-screen">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {address && (
          <Marker position={[51.505, -0.09]}>
            {/* Your Marker Component */}
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
