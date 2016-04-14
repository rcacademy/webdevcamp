/*

  Write a function that returns the longest word in a sentence
  TIP: check out array.split()

*/

function longestWord(sentence) {

  var longestWord = '';
  var words = sentence.split(' ');

  for(var i = 0; i < words.length; i++) {
    if(words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}


//TESTS - do not change these
console.log('######### Test for longestWord("Welcome to the newspaper"): ' + (longestWord("Welcome to the newspaper") === 'newspaper'));
console.log('######### Test for longestWord("dog dinosaur cat"): ' + (longestWord("dog dinosaur cat") === 'dinosaur'));
