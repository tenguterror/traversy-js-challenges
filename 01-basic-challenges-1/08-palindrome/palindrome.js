// function isPalindrome(str) {
//   let reversed = '';

//   for (let i = str.length - 1; i >= 0; i--) {  // My way of doing it
//     // Way it is done with a reverse for loop
//     reversed += str[i];
//   }

//   return reversed === str;
//}

function isPalindrome(str) {
  const format = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = format.split('').reverse().join(''); // Traversy way of doing it
  return format === reversed;
}

module.exports = isPalindrome;
