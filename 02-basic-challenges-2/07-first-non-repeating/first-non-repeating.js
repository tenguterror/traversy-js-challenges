function findFirstNonRepeatingCharacter(str) {
  const uniqueMap = new Map();

  uniqueMap.set(str[0], true);
  console.log(uniqueMap);

  for (let i = 1; i < str.length; i++) {
    if (uniqueMap.has(str[i]) == false) {
      return str[i];
    } else {
      uniqueMap.set(str[i], true);
    }
  }
  return null;
}

module.exports = findFirstNonRepeatingCharacter;
