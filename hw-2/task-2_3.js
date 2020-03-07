'use strict';


const findLongestWord = function(string) {
    let newString = string.split(' ');
    let maxWords = newString[0];
    for ( const oldString of newString){
          if (oldString.length > maxWords.length ){
                maxWords = oldString;  
              }
            }
            return maxWords;

};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'

