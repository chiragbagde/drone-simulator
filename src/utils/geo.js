// Geospatial helpers for turning a list of { lat, lng, timestamp } waypoints
// into distances, speeds, and ETAs for the telemetry panel.

const EARTH_RADIUS_M = 6371000;
const toRad = (deg) => (deg * Math.PI) / 180;

// Great-circle distance between two { lat, lng } points, in metres.
export function haversine(a, b) {
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * EARTH_RADIUS_M * Math.asin(Math.sqrt(h));
}

// Total length of the full route, in metres.
export function totalDistance(points) {
  let distance = 0;
  for (let i = 1; i < points.length; i += 1) {
    distance += haversine(points[i - 1], points[i]);
  }
  return distance;
}

// Distance travelled from the start up to (and including) the given index.
export function distanceUpTo(points, index) {
  let distance = 0;
  for (let i = 1; i <= index && i < points.length; i += 1) {
    distance += haversine(points[i - 1], points[i]);
  }
  return distance;
}

// Speed of the leg ending at `index`, in metres/second, derived from the
// waypoint timestamps. Returns 0 when it cannot be determined.
export function legSpeed(points, index) {
  if (index <= 0 || index >= points.length) return 0;
  const prev = points[index - 1];
  const curr = points[index];
  const seconds = (new Date(curr.timestamp) - new Date(prev.timestamp)) / 1000;
  if (!seconds || Number.isNaN(seconds) || seconds < 0) return 0;
  return haversine(prev, curr) / seconds;
}
