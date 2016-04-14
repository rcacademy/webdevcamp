/*

  Write a function that will take a string as input.
  Return a new string with the letters in the reverse order

  Use a while loop

  Do not use the String's reverse method.

*/

function reverse(word) {

  var reversedString = '';
  var i = 0;

  while (i < word.length) {
    reversedString = word[i] + reversedString;
    i++;
  }

  return reversedString;
}



// Tests - do not change below this line

console.log('######### Test for reverse("abc"): ' + (reverse("abc") === "cba"));
console.log('######### Test for reverse("dab"): ' + (reverse("dab") === "bad"));
console.log('######### Test for reverse("ccca"): ' + (reverse("ccca") === "accc"));
