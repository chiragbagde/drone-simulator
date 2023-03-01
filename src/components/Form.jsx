import React, { useEffect, useState } from "react";
import {Dropzone, useDropzone} from "react-dropzone";
import { useNavigate } from "react-router-dom";

const Form = ({ setData }) => {
  const [latLngList, setLatLngList] = useState([]);
  const navigate = useNavigate();

  const addSeconds = (date, seconds) => {
    const dateCopy = new Date(date);
    dateCopy.setSeconds(date.getSeconds() + seconds);
  
    return dateCopy;
  }

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      const data = reader.result.split("\n");
      const latLngList = data.map((item) => {
        const latLng = item.split(",");
        return { id:parseInt(latLng[0]),lat: parseFloat(latLng[1]), lng: parseFloat(latLng[2]), timestamp: new Date(latLng[3]) };
      });
      setLatLngList(latLngList);
      setData(latLngList);
    };
    reader.readAsText(file);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setData(latLngList);
    if(latLngList.length === 0){
      const date = new Date();
      const data = [
        { id: 1, lat: 18.6490, lng: 73.7554,     
          timestamp: addSeconds(date, 5),
        },
        { id: 2, lat: 18.6506, lng: 73.7452,     
          timestamp: addSeconds(date, 10),
        },
        { id: 3, lat: 18.6522, lng: 73.7350,     
          timestamp: addSeconds(date, 15),
        },
        { id: 4, lat: 18.6539, lng: 73.7248,     
          timestamp: addSeconds(date, 20),
        },
      ];

      setData(data);
    }
    navigate("/simulate");
  };

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...latLngList];
    list[index][name] = value;
    setLatLngList(list);
  };

  const handleAddLatLng = () => {
    setLatLngList([...latLngList, { lat: "", lng: "" }]);
  };

  const handleRemoveLatLng = (index) => {
    const list = [...latLngList];
    list.splice(index, 1);
    setLatLngList(list);
  };

  useEffect(() => {
    localStorage.removeItem('data');
  },[])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div className='droneform'>
    <form>
      <h3>Enter Drone's Latitude and Longitude</h3>
      <br />
      <h3>Click on Simulate to view the live path of drone</h3>
      {latLngList.map((item, index) => (
        <div className='datafield' key={index}>
          <input
            type="text"
            name="lat"
            placeholder="Latitude"
            value={item.lat}
            onChange={(event) => handleInputChange(event, index)}
          />
          <input
            type="text"
            name="lng"
            placeholder="Longitude"
            value={item.lng}
            onChange={(event) => handleInputChange(event, index)}
          />
          <input
            type="text"
            name="lng"
            placeholder="timestamp"
            value={item.timestamp}
            onChange={(event) => handleInputChange(event, index)}
          />
          <button type="button" onClick={() => handleRemoveLatLng(index)}>
            Remove
          </button>
        </div>
      ))}
        <div className="buttons">
      <p className="adddata" onClick={handleAddLatLng}>
        Add Latitude and Longitude
      </p>
      {/* <Dropzone onDrop={handleFileDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
                    <input {...getInputProps()} />
          <button className="adddata">Add File</button>
      </div>
    )}
  </Dropzone> */}
      <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
isDragActive ?
<p>Drop the files here ...</p> :
<p className="adddata">click to select files</p>            }
          </div>

  </div>
  <button className="simulate" type="submit" onClick={handleClick}>Simulate</button>
</form>
</div>
);
}

export default Form;
