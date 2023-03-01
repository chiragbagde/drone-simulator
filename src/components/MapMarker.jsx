import React, {useState, useEffect} from 'react';
import { PolylineF as Polyline, MarkerF } from "@react-google-maps/api";
import Swal from 'sweetalert2'

const MapMarker = ({data, setData, reached, setReached}) => {
  const [datetimeIndex, setDatetimeIndex] = useState(0);

  const datetimes = data.map((item) => new Date(item.timestamp));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      if(now.getTime() > datetimes[0].getTime() && datetimes.length !== 1){
      const newIndex = datetimes.findIndex(datetime => datetime.getTime() > now.getTime());
      if (newIndex !== datetimeIndex) {
        setDatetimeIndex(newIndex);
      }
      setData(data.slice(newIndex));
    }
    if(data.length === 1 && reached !== true){
      setReached(true);
    }
  }, 2000);
    return () => clearInterval(intervalId);
  }, [datetimeIndex, datetimes]);

  const path = data.map((marker) => {
    return { lat: marker.lat, lng: marker.lng };
  });

  useEffect(() => {
    if(reached){
      Swal.fire({  
        title: 'Simulation Successful',  
        text: `You destination is lat-${data[0].lat} long-${data[0].lng}`,
        icon: 'success'
      }).then(() => {
        setReached(false);
        window.location = '/home'
      })}
    })
  

  return (
    data.length > 1 ? 
    <>
    {data.map((marker) => (
        <MarkerF 
        key={marker.id} position={{ lat: marker.lat, lng: marker.lng }} />
      ))}
        <Polyline path={path} /> </>
         : <>
      <MarkerF 
        key={data[0].id} position={{ lat: data[0].lat, lng: data[0].lng }} />
      </>
  )
}

export default MapMarker;