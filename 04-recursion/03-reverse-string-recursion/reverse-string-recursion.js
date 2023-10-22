// function reverseString(str) {
//   if (str === '') {
//     return '';
//   }

//   return reverseString(str.substring(1)) + str[0];
// }

function reverseString(inputString) {
  if (inputString.length <= 1) {
    return inputString;
  }

  // Recursive step: Swap the first and last characters and reverse the substring in between.
  const firstChar = inputString[0];
  const lastChar = inputString[inputString.length - 1];
  const middle = inputString.slice(1, -1);

  // Recursively reverse the middle part of the string.
  const reversedMiddle = reverseString(middle);

  // Concatenate the last character, the reversed middle, and the first character.
  const reversedString = lastChar + reversedMiddle + firstChar;

  return reversedString;
}

module.exports = reverseString;
