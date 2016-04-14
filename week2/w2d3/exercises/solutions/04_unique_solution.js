
/*

  Write a function that given an array of numbers, returns another array of only the unique numbers.
  You are going to remove the duplicate numbers from the array.

*/

function uniqueNumbers(nums) {

  var uniques = [];

  for(var i = 0; i < nums.length; i++) {
    if(uniques.indexOf(nums[i]) === -1) {
      uniques.push(nums[i])
    }
  }
  return uniques;
}




//TESTS - do not change these

console.log('######### Test for uniqueNumbers([5, 5, 5, 5]): ' + uniqueNumbers([5, 5, 5, 5]));
console.log('######### Test for uniqueNumbers([1, 2, 1, 3, 3]): ' + uniqueNumbers([1, 2, 1, 3, 3]));
