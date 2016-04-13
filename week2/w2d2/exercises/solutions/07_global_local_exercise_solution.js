/*

  SOLUTION

  Goal: To observe how local and global variables work with function scope.
  1. Create a function called displayBank()
  2. Create  global variable called bankBalance and set it to 10000.
  3. Inside of displayBank, the first line should try to console.log the bankBalance global variable.
  4. Next, create a new local variable inside of displayBank also called bankBalance and set it equal to 1000000.
  5. Use console.log to display the bankBalance again.
  6. Now call the displayBank functions
  7. Finally, use console.log outside of the displayBank function to display the global bankBalance.
  8. You should have two console.logs with numbers and one that is undefined - try to reason why this might be.

*/

var bankBalance = 10000;

function displayBank(){
  console.log('Global bank balance is $' + bankBalance);
  var bankBalance = 1000000;
  console.log('Local bank balance is $' + bankBalance);
}

displayBank();
console.log('Global bank balance is $' + bankBalance);
