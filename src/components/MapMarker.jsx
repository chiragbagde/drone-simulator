import React from "react";
import { PolylineF as Polyline, MarkerF } from "@react-google-maps/api";

// Full planned route (faint) and the portion already travelled (bold).
const fullPathOptions = {
  strokeColor: "#94a3b8",
  strokeOpacity: 0.5,
  strokeWeight: 2,
};
const travelledOptions = {
  strokeColor: "#2563EB",
  strokeWeight: 4,
};

// Presentational map layer driven by the playback `index`: draws the route,
// the travelled segment, every waypoint, and the drone at the current point.
const MapMarker = ({ data, index = 0 }) => {
  if (!data || data.length === 0) return null;

  const fullPath = data.map((m) => ({ lat: m.lat, lng: m.lng }));

  if (data.length === 1) {
    return <MarkerF position={fullPath[0]} />;
  }

  const travelled = fullPath.slice(0, index + 1);
  const current = data[index];

  return (
    <>
      <Polyline path={fullPath} options={fullPathOptions} />
      {travelled.length > 1 && <Polyline path={travelled} options={travelledOptions} />}
      {data.map((marker, i) => (
        <MarkerF
          key={marker.id ?? i}
          position={{ lat: marker.lat, lng: marker.lng }}
          opacity={i <= index ? 1 : 0.4}
        />
      ))}
      {current && (
        <MarkerF position={{ lat: current.lat, lng: current.lng }} label="🚁" zIndex={1000} />
      )}
    </>
  );
};

export default MapMarker;
