import { useState, useEffect } from "react";

// Base time spent on each waypoint at 1x speed (ms).
const BASE_STEP_MS = 1500;

// Drives index-based playback over a route of `length` waypoints with
// play/pause, variable speed, reset, and seek (scrubbing).
export default function useDronePlayback(length) {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    if (!isPlaying) return undefined;
    if (index >= length - 1) {
      setIsPlaying(false);
      return undefined;
    }
    const timer = setTimeout(
      () => setIndex((i) => Math.min(i + 1, length - 1)),
      BASE_STEP_MS / speed
    );
    return () => clearTimeout(timer);
  }, [isPlaying, index, speed, length]);

  // Clamp the cursor if the route shrinks (e.g. new data loaded).
  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(0, length - 1)));
  }, [length]);

  const play = () => {
    if (index >= length - 1) setIndex(0);
    setIsPlaying(true);
  };
  const pause = () => setIsPlaying(false);
  const reset = () => {
    setIsPlaying(false);
    setIndex(0);
  };
  const seek = (i) => {
    setIsPlaying(false);
    setIndex(Math.max(0, Math.min(i, length - 1)));
  };

  return {
    index,
    isPlaying,
    speed,
    setSpeed,
    play,
    pause,
    reset,
    seek,
    atEnd: index >= length - 1,
  };
}
