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
    } else if (index >= data.length - 1) {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [index, isPlaying, data]);

  const handlePlay = () => {
    if (index >= data.length - 1) setIndex(0);
    setIsPlaying(true);
  };

  const handlePause = () => setIsPlaying(false);

  const handleReset = () => {
    setIsPlaying(false);
    setIndex(0);
  };

  const path = data.slice(0, index + 1);

  return (
    <div>
      <Drone position={data[index]} />
      <Path path={path} />
      <div className="simulation-controls">
        <button onClick={handlePlay} disabled={isPlaying}>Play</button>
        <button onClick={handlePause} disabled={!isPlaying}>Pause</button>
        <button onClick={handleReset}>Reset</button>
        <span className="simulation-progress">{index + 1} / {data.length}</span>
      </div>
    </div>
  );
}

export default Simulation;
