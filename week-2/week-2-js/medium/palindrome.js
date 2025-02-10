/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[\s,!.?]+/g, '');
  // Split the cleaned string into characters, reverse the array, and join it back into a string.
  const reversed = cleaned.split('').reverse().join('');

  return cleaned === reversed;
  
}

module.exports = isPalindrome;
