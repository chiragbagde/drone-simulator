import { haversine, totalDistance, distanceUpTo, legSpeed } from "./geo";

const A = { lat: 18.649, lng: 73.7554, timestamp: "2023-03-01T11:10:04.684Z" };
const B = { lat: 18.6506, lng: 73.7452, timestamp: "2023-03-01T11:10:09.684Z" };
const C = { lat: 18.6522, lng: 73.735, timestamp: "2023-03-01T11:10:14.684Z" };

test("haversine of a point with itself is zero", () => {
  expect(haversine(A, A)).toBe(0);
});

test("haversine returns a sensible distance between two nearby points", () => {
  const d = haversine(A, B);
  // Roughly 1.1 km for this leg; assert it's in a reasonable band.
  expect(d).toBeGreaterThan(900);
  expect(d).toBeLessThan(1400);
});

test("totalDistance equals the sum of the legs", () => {
  const total = totalDistance([A, B, C]);
  expect(total).toBeCloseTo(haversine(A, B) + haversine(B, C), 6);
});

test("distanceUpTo grows monotonically with index", () => {
  const points = [A, B, C];
  expect(distanceUpTo(points, 0)).toBe(0);
  expect(distanceUpTo(points, 1)).toBeCloseTo(haversine(A, B), 6);
  expect(distanceUpTo(points, 2)).toBeCloseTo(totalDistance(points), 6);
});

test("legSpeed uses timestamps (distance / seconds)", () => {
  const expected = haversine(A, B) / 5; // 5s apart
  expect(legSpeed([A, B], 1)).toBeCloseTo(expected, 6);
});

test("legSpeed is zero at the start or out of range", () => {
  expect(legSpeed([A, B], 0)).toBe(0);
  expect(legSpeed([A, B], 5)).toBe(0);
});
