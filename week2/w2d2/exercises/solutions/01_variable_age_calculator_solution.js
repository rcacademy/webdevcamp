/*

  SOLUTION

  1. Store the current year in a variable
  2. Store your birth year in a variable
  3. Calculate the two possible ages that you might be based on these years
  4. Print to the Javascript console: "You are either NN or NN", substituting the values for actual numbers.
*/

var currentYear = 2016;
var birthYear = 1987;
var potentialAge = currentYear - birthYear;

console.log('You are either ' + potentialAge + ' or ' + (potentialAge - 1));
