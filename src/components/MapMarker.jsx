import React, { useState, useEffect } from 'react';
import { PolylineF as Polyline, MarkerF } from "@react-google-maps/api";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const MapMarker = ({ data, setData, reached, setReached }) => {
  const [datetimeIndex, setDatetimeIndex] = useState(0);
  const navigate = useNavigate();

  const datetimes = data.map((item) => new Date(item.timestamp));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      if (now.getTime() > datetimes[0].getTime() && datetimes.length !== 1) {
        const newIndex = datetimes.findIndex(datetime => datetime.getTime() > now.getTime());
        if (newIndex !== -1 && newIndex !== datetimeIndex) {
          setDatetimeIndex(newIndex);
          setData(data.slice(newIndex));
        }
      }
      if (data.length === 1 && !reached) {
        setReached(true);
      }
    }, 2000);
    return () => clearInterval(intervalId);
  }, [datetimeIndex]);

  useEffect(() => {
    if (reached) {
      Swal.fire({
        title: 'Simulation Complete',
        text: `Destination reached: lat ${data[0].lat}, lng ${data[0].lng}`,
        icon: 'success',
      }).then(() => {
        setReached(false);
        navigate('/home');
      });
    }
  }, [reached]);

  const path = data.map((marker) => ({ lat: marker.lat, lng: marker.lng }));

  return data.length > 1 ? (
    <>
      {data.map((marker) => (
        <MarkerF key={marker.id} position={{ lat: marker.lat, lng: marker.lng }} />
      ))}
      <Polyline path={path} options={{ strokeColor: '#2563EB', strokeWeight: 3 }} />
    </>
  ) : (
    <MarkerF key={data[0].id} position={{ lat: data[0].lat, lng: data[0].lng }} />
  );
};

export default MapMarker;
