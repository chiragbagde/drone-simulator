import React, { useState, useEffect } from "react";
import Drone from "./Drone";
import Path from "./Path";

function Simulation({ data }) {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer;
    if (isPlaying && index < data.length - 1) {
      timer = setTimeout(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [index, isPlaying, data]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setIndex(0);
  };

  const path = data.slice(0, index + 1).map((item) => item);

  return (
    <div>
      {/* <Drone position={data[index]} /> */}
      {/* <Path path={path} /> */}
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Simulation;
