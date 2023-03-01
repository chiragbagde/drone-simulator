import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import MapPath from "./Path";
import MapMarker from "./MapMarker";

const MyComponent = ({data, setData}) => {
  const [reached, setReached] = useState(false);

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  let center = {
    lat: 18.6490,
    lng: 73.7554
  }

  if(data.length !== 0){
    center = {
      lat: data[0].lat,
      lng: data[0].lng,
    };
  }

  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['geometry', 'drawing'],
  });

  
  useEffect(() => {
    if(data && !localStorage.getItem('data')){
      localStorage.setItem('data', JSON.stringify(data));}
    else{
      setData(JSON.parse(localStorage.getItem('data')));
  }
  }, []);

  return (
      isLoaded && <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
            <MapMarker data={data} setData={setData} reached={reached} setReached={setReached} />
      </GoogleMap>
  );
};

export default MyComponent;
