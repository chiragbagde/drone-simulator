import React from "react";
import { totalDistance, distanceUpTo, legSpeed } from "../utils/geo";

const formatDistance = (m) =>
  m >= 1000 ? `${(m / 1000).toFixed(2)} km` : `${Math.round(m)} m`;

const formatEta = (seconds) => {
  if (seconds == null || !Number.isFinite(seconds)) return "—";
  const s = Math.round(seconds);
  if (s < 60) return `${s}s`;
  return `${Math.floor(s / 60)}m ${s % 60}s`;
};

function Stat({ label, value }) {
  return (
    <div style={{ minWidth: 110 }}>
      <div style={{ fontSize: 18, fontWeight: 600 }}>{value}</div>
      <div style={{ fontSize: 12, opacity: 0.7 }}>{label}</div>
    </div>
  );
}

function Telemetry({ data, index }) {
  const current = data[index];
  if (!current) return null;

  const total = totalDistance(data);
  const travelled = distanceUpTo(data, index);
  const remaining = Math.max(0, total - travelled);
  const speed = legSpeed(data, index); // m/s
  const etaSeconds = speed > 0 ? remaining / speed : null;
  const progress = total > 0 ? Math.round((travelled / total) * 100) : 0;

  return (
    <div
      className="telemetry"
      style={{
        display: "flex",
        gap: 20,
        flexWrap: "wrap",
        padding: 16,
        border: "1px solid rgba(0,0,0,0.12)",
        borderRadius: 8,
      }}
    >
      <Stat label="Position" value={`${current.lat.toFixed(4)}, ${current.lng.toFixed(4)}`} />
      <Stat label="Speed" value={`${(speed * 3.6).toFixed(1)} km/h`} />
      <Stat label="Travelled" value={formatDistance(travelled)} />
      <Stat label="Remaining" value={formatDistance(remaining)} />
      <Stat label="ETA" value={formatEta(etaSeconds)} />
      <Stat label="Progress" value={`${progress}%`} />
    </div>
  );
}

export default Telemetry;
