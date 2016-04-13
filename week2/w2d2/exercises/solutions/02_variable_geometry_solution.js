/*

  SOLUTION

  1. Store a radius of a circle in a variable
  2. Calculate the circumference based on the radius, and output "The circumference is NN".
  3. Calculate the area based on the radius, and output "The area is NN".

  You can read more about the math of circles here: http://math2.org/math/geometry/circles.htm
*/

var radius = 4;

var circumference = 2 * radius * Math.PI;
console.log('The circumference is ' + circumference );

var area = radius * radius * Math.PI;
console.log('The area is ' + area);
