# Drone Simulator

A React app that simulates live drone flight paths on Google Maps. Upload a coordinates file and watch the drone trace the route in real time.

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
2. Adjust the timestamp as needed
3. Click Simulate to watch the drone trace the path live on the map

**Coordinates file format**

```
latitude,longitude,timestamp
28.6139,77.2090,2024-01-01T10:00:00Z
28.6145,77.2100,2024-01-01T10:00:05Z
```
