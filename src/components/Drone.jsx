import React from "react";
import { Marker } from "@react-google-maps/api";

function Drone({ position }) {
  return <Marker position={position} />;
}

export default Drone;