import React from "react";
import { PolylineF as Polyline } from "@react-google-maps/api";

const pathOptions = {
  strokeColor: "#2563EB",
  strokeOpacity: 0.8,
  strokeWeight: 3,
};

function MapPath({ data }) {
  const path = data.map((marker) => ({
    lat: marker.lat,
    lng: marker.lng,
  }));

  return path.length > 1 ? <Polyline path={path} options={pathOptions} /> : null;
}

export default MapPath;
