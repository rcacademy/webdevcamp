/*

  Write a function that takes a sentence as a string and counts the number of words.
  TIP: take a look at array.split

*/

function wordCount(sentence) {
  var words = sentence.split(' ')
  return words.length;
}




//TESTS - do not change these

console.log('######### Test for wordCount("The quick brown fox"): ' + (wordCount('The quick brown fox') === 4));
console.log('######### Test for wordCount("The quick brown fox jumped over the fence"): ' + (wordCount('The quick brown fox jumped over the fence') === 8));
