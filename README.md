# points-on-curve

This package calculate the points on a curve with a certain tolerance. It can also simplify the shape to use fewer points. 
This can really usefule when estimating lines/polygons for curves in WebGL or for Hit/Cosllision detections. 

## Install

From npm

```
npm install --save points-on-curve
```

The code is distributed as an ES6 module. 

### pointsOnBezierCurves(points: Point[], tolerance?: number, distance?: number): Point[]

You pass in the points representing a bezier curve. Each point is an array of two numbers e.g. `[100, 123]`.

The points can also be a set of continuous curves where the last poing on the `Nth` curve acts as the first point of the next. 

```javascript
import { pointsOnBezierCurves } from 'points-on-curve';

const curve = [[70,240],[145,60],[275,90],[300,230]];
const points = pointsOnBezierCurves(curve);
plotPoints(points);
```

![points on bezier](https://user-images.githubusercontent.com/833927/79051836-45630300-7be7-11ea-8cb6-cba2695a4807.png)

Same can be rendered with more tolerance (default value is 0.15):

```javascript
const points = pointsOnBezierCurves(curve, 0.7);
```
![points on bezier with 0.7 tolerance](https://user-images.githubusercontent.com/833927/79051837-45fb9980-7be7-11ea-9583-52cf882e770e.png)

#### Simplifying path
