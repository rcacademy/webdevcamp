/*

  Write a function that returns a boolean if the argument is a palindrome.
  A palindrome is a word that is spelled the same backwards and forwards like "racecar".

  Try to do this one with a while loop
  
*/

function isPalindrome(word) {
  var i = 0;
  while (i < word.length) {
    if(word[i] != word[(word.length - 1) - i]) {
      return false;
    }
    i++;
  }
  return true;
}


//TESTS - do not change these
console.log('######### Test for isPalindrome("racecar"): ' + (isPalindrome("racecar") === true));
console.log('######### Test for isPalindrome("anna"): ' + (isPalindrome("anna") === true));
console.log('######### Test for isPalindrome("cat"): ' + (isPalindrome("cat") === false));
console.log('######### Test for isPalindrome("aa"): ' + (isPalindrome("aa") === true));
