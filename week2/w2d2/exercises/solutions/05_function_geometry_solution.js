/*

  SOlUTION

  Write two functions for calculating geometries of a circle.

  1. Create a function called calculateCircumference
    - Pass the radius as an argument
    - Calculate the circumference and output "The circumference is NN".
    - Call the function a couple times with various radiuses

  2. Create a function called calculateArea
    - Pass the radius as an argument
    - Calculate the area and output "The area of the circle is NN".
    - Call the function a couple times with various radiuses

*/

function calculateCircumference(radius) {
  var circumference = 2 * radius * Math.PI;
  console.log('The circumference is ' + circumference );
}

calculateCircumference(4);
calculateCircumference(10);

function calculateArea(radius){
  var area = radius * radius * Math.PI;
  console.log('The area is ' + area);
}

calculateArea(4);
calculateArea(10);
