export default function(part) {//main structure for building patterns always a function that returns 'part'(parameter/argument) recrusive?

  // shorthand method: returns an object with handy helpers. uses JS object destructuring (extracts properties from objects and binds to variable)
  let { Point, points, Path, paths, measurements, options } = part.shorthand();
  
// Design pattern here
  // First we set points, then build the path

// initial curve. 1/4th of circumference
     // adding named points. points holds all the points in our 'part"
     // Point(x, y)
  points.right = new Point(measurements.headCircumference / 10, 0); 
  points.bottom = new Point(0, measurements.headCircumference / 12);

    //adding control points 
    //Cp - control point, how we control the curve of a line, created as a Bezier Curve
    //.shift(degree, distance) creates new point shifted to new location along an angle
    //thispoint.dy(point passed) returns the distance between this point and the point passed along the y-axis(not at an angle)
    //.dx() returns the distance between two points along the x-axis(not at an angle)
  points.rightCp1 = points.right
    .shift(90, points.bottom.dy(points.right)/2);//90 (up down y-axis)
    //shift right point 90 degrees for a distance of half the distance between bottom point and right point along the y-axis
  points.bottomCp2 = points.bottom
    .shift(0, points.bottom.dx(points.right)/2);//0 (left right x-axis)

    //adding path for neck. paths hold all the paths in our 'part'
    //Path() takes no arguments ALWAYS starts with .move() method
    //.move(start point) movest to a given point without drawing a line(follow with .curve() .line() or .close()) 
    //.curve(pointCp1, pointCp2, end point)
  paths.neck = new Path()
    .move(points.right)
    .curve(points.rightCp1, points.bottomCp2, points.bottom);
  
    //move from right point towards righCP to bottomCP then finish at point bottom--working counterclockwise

//   let tweak = 1;
//   let target = (measurements.headCircumference * options.neckRatio) /4;
//   let delta;
//   do {
//     points.right = new Point(tweak * measurements.headCircumference / 10, 0);
//     points.bottom = new Point(0, tweak * measurements.headCircumference / 12);
  
//     points.rightCp1 = points.right.shift(90, points.bottom.dy(points.right)/2);
//     points.bottomCp2 = points.bottom.shift(0, points.bottom.dx(points.right)/2);
  
//     paths.neck = new Path()
//       .move(points.right)
//       .curve(points.rightCp1, points.bottomCp2, points.bottom);
  
//     delta = paths.neck.length() - target;
//     if (delta > 0) tweak = tweak * 0.99;
//     else tweak = tweak * 1.02;
//   } while (Math.abs(delta) > 1);
// // mirror points to plot rest of circle
//   points.rightCp2 = points.rightCp1.flipY();
//   points.bottomCp1 = points.bottomCp2.flipX();

//   points.left = points.right.flipX();
//   points.leftCp1 = points.rightCp2.flipX();
//   points.leftCp2 = points.rightCp1.flipX();

//   points.top = points.bottom.flipY();
//   points.topCp1 = points.bottomCp2.flipY();
//   points.topCp2 = points.bottomCp1.flipY();

// paths.neck = new Path()
//   .move(points.top)
//   .curve(points.topCp2, points.leftCp1, points.left)
//   .curve(points.leftCp2, points.bottomCp1, points.bottom)
//   .curve(points.bottomCp2, points.rightCp1, points.right)
//   .curve(points.rightCp2, points.topCp1, points.top)
//   .close();
// //create outer bounds of bib
//   let width = measurements.headCircumference * options.widthRatio;
//   let length = measurements.headCircumference * options.lengthRatio;
  
//   points.topLeft = new Point(
//     width / -2,
//     points.top.y - (width / 2 - points.right.x)
//   );
//   points.topRight = points.topLeft.shift(0, width);
//   points.bottomLeft = points.topLeft.shift(-90, length);
//   points.bottomRight = points.topRight.shift(-90, length);
  
//   paths.rect = new Path()
//     .move(points.topLeft)
//     .line(points.bottomLeft)
//     .line(points.bottomRight)
//     .line(points.topRight)
//     .line(points.topLeft)
//     .close();

//     //create curved straps
//     points.edgeLeft = new Point(points.topLeft.x, points.left.y);
// points.edgeRight = new Point(points.topRight.x, points.right.y);
// points.edgeTop = new Point(0, points.topLeft.y);

// points.edgeLeftCp = points.edgeLeft.shiftFractionTowards(points.topLeft, 0.5);
// points.edgeRightCp = points.edgeLeftCp.flipX();
// points.edgeTopLeftCp = points.edgeTop.shiftFractionTowards(
//   points.topLeft,
//   0.5
// );
// points.edgeTopRightCp = points.edgeTopLeftCp.flipX();
  // // Complete?  Comment out this section untill ready (leave return line)
  // if (complete) {
  //   if (sa) {
  //   }
  //   // Paperless?
  //   if (paperless) {
  //   }
  // }
  return part;
}
