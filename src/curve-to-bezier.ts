import { Point } from './index.js';

function clone(p: Point): Point {
  return [...p] as Point;
}

export function curveToBezier(points: Point[], curveTightness = 0): Point[] {
  const len = points.length;
  if (len < 3) {
    throw new Error('A curve must have at least three points.');
  }
  const out: Point[] = [];
  if (len === 3) {
    out.push(
      clone(points[0]),
      clone(points[1]),
      clone(points[2]),
      clone(points[2])
    );
  } else {
    const b: Point[] = [];
    const s = 1 - curveTightness;
    out.push(clone(points[0]));
    for (let i = 1; (i + 2) < len; i++) {
      const cachedVertArray = points[i];
      b[0] = [cachedVertArray[0], cachedVertArray[1]];
      b[1] = [cachedVertArray[0] + (s * points[i + 1][0] - s * points[i - 1][0]) / 6, cachedVertArray[1] + (s * points[i + 1][1] - s * points[i - 1][1]) / 6];
      b[2] = [points[i + 1][0] + (s * points[i][0] - s * points[i + 2][0]) / 6, points[i + 1][1] + (s * points[i][1] - s * points[i + 2][1]) / 6];
      b[3] = [points[i + 1][0], points[i + 1][1]];
      out.push(b[1], b[2], b[3]);
    }
  }
  return out;
}