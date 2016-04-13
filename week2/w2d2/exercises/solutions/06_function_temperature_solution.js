/*

  SOLUTION

  Write two functions for converting temperatures.

  1. Create a function called celsiusToFahrenheit
    - Pass the celsius value as an argument
    - Convert the temperature to fahrenheit and output "NN°C is NN°F"
    - Call the function to convert a °C temperature value

  2. Create a function called fahrenheitToCelsius
    - Pass the as an argument
    - Convert the temperature to celsius and output "NN°F is NN°C".
    - Call the function to convert a °F temperature value
*/

function celsiusToFahrenheit(tempC) {
  var tempF = (tempC * 9 / 5) + 32;
  console.log(tempC + '°C is ' + tempF + '°F')
}

celsiusToFahrenheit(22);
celsiusToFahrenheit(18);

function fahrenheitToCelsius(tempF) {
  var tempC = (tempF - 32) * 5 / 9;
  console.log(tempF + '°F is ' + tempC + '°C');
}

fahrenheitToCelsius(78);
fahrenheitToCelsius(90);
