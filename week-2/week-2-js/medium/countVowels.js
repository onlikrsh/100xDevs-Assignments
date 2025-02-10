/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
  vowels = ['a', 'e', 'i', 'o', 'u'];

  const string = str.toLowerCase().split('');
  const strLen = string.length;
  const vowLen = vowels.length;
  let count = 0;

  for(let i=0; i<strLen; i++){
    for(let j=0; j<vowLen; j++){
      if(string[i] === vowels[j]){
        count = count + 1;
      }
    }
  }
  return count;
}


module.exports = countVowels;