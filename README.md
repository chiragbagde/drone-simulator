# Drone Simulator

A React app that simulates drone flight paths on Google Maps. Upload a coordinates file and replay the route with full playback controls and live telemetry.

**Features**

- Playback controls: play / pause / reset, a 0.5x–4x speed selector, and a scrubber to seek to any waypoint
- Live telemetry panel: current position, speed (km/h), distance travelled / remaining, ETA, and progress
- Travelled vs. planned route drawn as separate polylines, with the drone marker at the current point

**Stack**

React · Google Maps API · Axios · Bootstrap · Formik

**Setup**

```bash
git clone https://github.com/chiragbagde/drone-simulator.git
cd drone-simulator
npm install
cp .dev.env .env
# Add your Google Maps API key to .env
npm start
```

**How it works**

1. Upload a coordinates file (see `coordinates.txt` for the expected format)
2. Adjust the timestamps as needed
3. Click Simulate, then use the playback controls to fly the route and watch the telemetry update

**Coordinates file format**

```
latitude,longitude,timestamp
28.6139,77.2090,2024-01-01T10:00:00Z
28.6145,77.2100,2024-01-01T10:00:05Z
```
