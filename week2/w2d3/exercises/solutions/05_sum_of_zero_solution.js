
/*

  Write a function that finds whether any two elements in the array sum to zero.
  If it does, return true otherwise return false

*/

function containsSumOfZero(nums) {
  var firstIndex = 0;
  while (firstIndex < nums.length) {
    var secondIndex = firstIndex + 1;
    while (secondIndex < nums.length) {
      if(nums[firstIndex] + nums[secondIndex] === 0) {
        return true;
      }
      secondIndex++;
    }
    firstIndex++;
  }
  return false;
}




//TESTS - do not change these

console.log('######### Test for containsSumOfZero([10, 2, 4, -2, 2]): ' + (containsSumOfZero([2, -2]) === true));
console.log('######### Test for containsSumOfZero([5, 5, 5, 5]): ' + (containsSumOfZero([5, 5, 5, 5]) === false));
