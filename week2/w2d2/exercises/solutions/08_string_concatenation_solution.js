/*

  SOLUTION

  1. Create a function called displayGreeting that accepts a name as the argument
  2. Create a variable inside of displayGreeting called 'greeting'
  3. Compute a greeting by using the name argument and something like 'Hello NAME, how are you doing?'
  4. Output the greeting using console.log

  Now if we run this, we should get our greeting in the console.

*/

function displayGreeting(name) {
  var greeting = 'Hello ' + name + ', how are you doing?';
  console.log(greeting);
}

displayGreeting('Colin');
