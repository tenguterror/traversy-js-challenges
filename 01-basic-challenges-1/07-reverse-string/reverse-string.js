// function reverseString(str) {
//   const reversed = [];

//   for (let i = 0; i < str.length; i++) {   //  My solution using an array.
//     reversed.unshift(str[i]);
//   }

//   return reversed.join('');
//}

function reverseString(str) {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    // Way it is done with a reverse for loop
    reversed += str[i];
  }

  return reversed;
}

module.exports = reverseString;
