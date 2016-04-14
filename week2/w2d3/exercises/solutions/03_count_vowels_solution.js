/*

  Write a function countVowels that counts the total number of vowels present in a string.
  You can include y in this example and assume that all letters will be lowercase.

*/

function countVowels(letters) {

  var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  var totalVowels = 0;

  for(var i = 0; i < letters.length; i++) {
    if(vowels.indexOf(letters[i]) !== -1) {
      totalVowels++;
    }
  }
  return totalVowels;

}





//TESTS - do not change these

console.log('######### Test for countVowels("abcdefghijklmnopqrstuvwxyz"): ' + (countVowels("abcdefghijklmnopqrstuvwxyz") === 6));
console.log('######### Test for countVowels("cat dog elephant monkey"): ' + (countVowels("cat dog elephant monkey") === 8));
