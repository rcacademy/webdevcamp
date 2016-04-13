/*

  SOLUTION

  1. Store a celsius temperature into a variable.
  2. Convert it to fahrenheit and output "NN°C is NN°F".
  3. Now store a fahrenheit temperature into a variable.
  4. Convert it to celsius and output "NN°F is NN°C."

  TIP: To convert from C to F: Multiply by 9, then divide by 5, finally add 32.
*/

var tempC = 25;
var tempF = (tempC * 9 / 5) + 32;

console.log(tempC + '°C is ' + tempF + '°F');

tempF = 90;
tempC = (tempF - 32) * 5 / 9;

console.log(tempF + '°F is ' + tempC + '°C');
