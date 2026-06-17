import React, { useEffect } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import MapMarker from "./MapMarker";
import DroneControls from "./DroneControls";
import Telemetry from "./Telemetry";
import useDronePlayback from "../hooks/useDronePlayback";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const DEFAULT_CENTER = { lat: 18.649, lng: 73.7554 };

const MyComponent = ({ data, setData }) => {
  const playback = useDronePlayback(data.length);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["geometry", "drawing"],
  });

  // Persist the route so a refresh on /simulate keeps the path, and restore it
  // when the component mounts without data.
  useEffect(() => {
    if (data && data.length && !localStorage.getItem("data")) {
      localStorage.setItem("data", JSON.stringify(data));
    } else if ((!data || !data.length) && localStorage.getItem("data")) {
      setData(JSON.parse(localStorage.getItem("data")));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isLoaded) return null;

  const center = data.length ? { lat: data[0].lat, lng: data[0].lng } : DEFAULT_CENTER;

  return (
    <div className="map-simulation">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        <MapMarker data={data} index={playback.index} />
      </GoogleMap>

      {data.length > 0 && (
        <>
          <DroneControls
            index={playback.index}
            isPlaying={playback.isPlaying}
            speed={playback.speed}
            setSpeed={playback.setSpeed}
            play={playback.play}
            pause={playback.pause}
            reset={playback.reset}
            seek={playback.seek}
            total={data.length}
          />
          <Telemetry data={data} index={playback.index} />
        </>
      )}
    </div>
  );
};

export default MyComponent;
