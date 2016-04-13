/*

  SOLUTION

  Write a function named calculateAge that satisfies the following:
    1. takes 2 arguments: birth year, current year.
    2. calculates the 2 possible ages based on those years.
    3. outputs the result to the screen like so: "You are either NN or NN"

  Call the function three times with different sets of values.

  Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/

function calculateAge(birthYear, currentYear) {
  var potentialAge = currentYear - birthYear;
  console.log('You are either ' + potentialAge + ' or ' + (potentialAge - 1));
}

calculateAge(1987, 2016);
calculateAge(1990, 2016);
calculateAge(1980, 2015);

//BONUS
function calculateAge(birthYear) {
  var potentialAge = new Date().getFullYear() - birthYear;
  console.log('You are either ' + potentialAge + ' or ' + (potentialAge - 1));
}

calculateAge(1987);
calculateAge(1990);
calculateAge(1980);
