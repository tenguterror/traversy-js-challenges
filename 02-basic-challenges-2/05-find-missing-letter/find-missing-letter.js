function findMissingLetter(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentCharCode = arr[i].charCodeAt(0);
    let nextCharCode = arr[i + 1].charCodeAt(0);

    if (nextCharCode - currentCharCode > 1) {
      return String.fromCharCode(currentCharCode + 1);
    }
  }

  return '';
}

module.exports = findMissingLetter;
