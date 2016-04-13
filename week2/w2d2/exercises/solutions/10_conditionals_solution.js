/*

  SOLUTION

  isZero
  1. Create a function called isZero that takes 1 argument called number.
  2. Make the function return true if the number is equal to zero.
  3. Make the function returnf alse if the number is not equal to zero.

  isString
  1. Create a function called isZero that takes 1 argument called varToCheck
  2. Make the function return true if the argument is a string
  3. Make the function return false if the argument is not a string

*/

function isZero(number) {
  if(number === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isZero(0));
console.log(isZero(10));

function isString(varToCheck) {
  if((typeof varToCheck) === 'string') {
    return true;
  } else {
    return false;
  }
}

console.log(isString('Hello world!'));
console.log(isString(10));
