import React from "react";

const SPEEDS = [0.5, 1, 2, 4];

function DroneControls({ index, isPlaying, speed, setSpeed, play, pause, reset, seek, total }) {
  return (
    <div
      className="drone-controls"
      style={{
        display: "flex",
        gap: 12,
        alignItems: "center",
        flexWrap: "wrap",
        padding: "12px 0",
      }}
    >
      <button type="button" onClick={play} disabled={isPlaying}>
        ▶ Play
      </button>
      <button type="button" onClick={pause} disabled={!isPlaying}>
        ⏸ Pause
      </button>
      <button type="button" onClick={reset}>
        ⟲ Reset
      </button>

      <label style={{ display: "flex", alignItems: "center", gap: 6 }}>
        Speed:
        <select value={speed} onChange={(e) => setSpeed(Number(e.target.value))}>
          {SPEEDS.map((s) => (
            <option key={s} value={s}>
              {s}x
            </option>
          ))}
        </select>
      </label>

      <input
        type="range"
        min={0}
        max={Math.max(0, total - 1)}
        value={index}
        onChange={(e) => seek(Number(e.target.value))}
        style={{ flex: 1, minWidth: 160 }}
        aria-label="Seek waypoint"
      />
      <span>
        {index + 1} / {total}
      </span>
    </div>
  );
}

export default DroneControls;
