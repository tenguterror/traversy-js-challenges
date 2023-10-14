function validAnagrams(str1, str2) {
  const words1 = str1.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  const words2 = str2.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
  console.log(words1);
  console.log(words2);

  return Object.keys(words1).every((char) => words1[char] === words2[char]);
}

module.exports = validAnagrams;
