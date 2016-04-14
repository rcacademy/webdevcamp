/*

  Mini Project

  Use what we've covered so far in class to make an imaginary flight booking service. There are going
  to be other ways to write this in the future and we will revisit this project as we learn new
  features of the Javascript language.


  We now are the owners of a new commerical flight school that offers special flights between
  Reno and Las Vegas and vice versa. We have 1 price for each direction and we'd like to be able
  to easily let customers book a flight.

  1. Create a function called bookFlight that will calculate the price of flights between two cities
  2. This function support all of the following:
    [ ] Two arguments: one for the departing city and one for the destination city
    [ ] Store two variables in the function: price and bookingStatus. 'bookingStatus'
        will be a string that gives us a sense of what is happening in our booking. For example,
        'Flight booked from Las Vegas to Reno for $99.'
    
    [ ] Only allow flights to be booked from Reno and Las Vegas, in either direction but use their airport designations (RNO and LAS).
    [ ] If the flight is from Reno to Las Vegas, the price is $99.00.
    [ ] If the flight is from Las Vegas to Reno, the price is $79.00.
    [ ] Display a message that a destination or departing city is not supported if the cities are neither
        'Reno' or 'Las Vegas'
    [ ] If we don't support a city, the price will be 0.00.
    [ ] Have the function return the price of the flight
    [ ] Bonus: Support both the airport designation (RNO and LAS) as well as "Las Vegas" and "Reno"

*/

// your code here

/*
  TESTS!
  Do not edit any of these lines below.
  They should all output true.
*/

console.log('Test for Las Vegas -> Reno: ' + (bookFlight('LAS', 'RNO') === 79.00));
console.log('Test for Reno -> Las Vegas: ' + (bookFlight('RNO', 'LAS') === 99.00));
console.log('Test for Reno -> Boise: ' + (bookFlight('RNO', 'BOI') === 0.00));
console.log('Test for Boise -> Reno: ' + (bookFlight('BOI', 'LAS') === 0.00));
console.log('Test for San Francisco -> New York City: ' + (bookFlight('SFO', 'NYC') === 0.00));
