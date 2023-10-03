//My way using an array of vowels.

function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let vowelCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      vowelCount++;
    }
  }

  return vowelCount;
}

module.exports = countVowels;
