/*
  Write two functions that will translate a sentence to pig-latin.

  1. `translateToPigLatin` will the sentence into words and then call pigLatinify on each of those words.
  It should then return the new sentence in pig-latin.

  2. 'pigLatinify' will accept a single word at a time and conver it to pig-latin using these basic rules:

  Rule 1: If a word begins with a vowel, add an "ay" sound to the end of the word.
  Rule 2: If a word begins with a consonant sound, move it to the end of the word, and then add an "ay" sound to the end of the word
  Rule 3: If a word begins with 2 consonants, move both to the end of the word and add an "ay"

  You can assume all letters are lowercase for this exercise and that 'y' is a vowel.

  TIP: check out array.join() to put the sentence back together

*/

var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

function translateToPigLatin(sentence) {

  var words = sentence.split(' ');

  var translatedWords = [];

  for(var i = 0; i < words.length; i++) {
    translatedWords.push(pigLatinify(words[i]));
  }

  return translatedWords.join(' ');
}

function pigLatinify(word) {

  if(vowels.indexOf(word[0]) !== -1) {
    word = word.substring(1) + word.substring(0,1) + 'ay';
  } else {
    var shift = 1;
    if(vowels.indexOf(word[1]) == -1){
      shift = 2;
    }
    word = word.substring(shift) + word.substring(0,shift) + 'ay';
  }

  return word;
}



// Tests - do not change below this line
console.log('######### Test for translateToPigLatin("knock knock"): ' + (translateToPigLatin('knock knock') === 'ockknay ockknay'));
console.log('######### Test for translateToPigLatin("apple"): ' + (translateToPigLatin('apple') === 'ppleaay'));
console.log('######### Test for translateToPigLatin("quiet"): ' + (translateToPigLatin('quiet') === 'uietqay'));
