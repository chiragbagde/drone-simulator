import React from "react";
import { PolylineF as Polyline, } from "@react-google-maps/api";

function MapPath({data}) {
    // const [counter, setCounter] = useState(60);

  // useEffect(() => {
  //   const timer = 
  //     counter>0 && setInterval(() => setCounter(counter - 1),1000);
  //   return () => clearInterval(timer);
  // },[counter])

  const path = data.map((marker) => {
    return { lat: marker.lat, lng: marker.lng };
  });

  return path && <>
        {/* <Polyline path={path} />; */}
  </>
}

export default MapPath;