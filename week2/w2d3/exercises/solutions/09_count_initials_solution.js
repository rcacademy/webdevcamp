/*

  Write a function takes an array of names and returns an object of first initials and the number of times they appear.

*/

function countInitials(names) {

  var initials = {};

  for(var i = 0; i < names.length; i++) {
    if(initials[names[i][0]]) {
      initials[names[i][0]]++;
    } else {
      initials[names[i][0]] = 1;
    }
  }

  return initials;
}




//TESTS - do not change these
console.log('######### Test for countInitials(["Steph", "Harrison", "Klay", "Andrew", "Andre", "Draymond", "Shaun"]): ' + (JSON.stringify(countInitials(["Steph", "Harrison", "Klay", "Andrew", "Andre", "Draymond", "Shaun"])) === JSON.stringify({ S: 2, H: 1, K: 1, A: 2, D: 1 })));
