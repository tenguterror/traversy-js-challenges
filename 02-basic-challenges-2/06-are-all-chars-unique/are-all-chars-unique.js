function areAllCharactersUnique(str) {
  const set1 = new Set();

  for (let i = 0; i < str.length; i++) {
    if (!set1.has(str[i])) {
      set1.add(str[i]);
    } else {
      return false;
    }
  }

  return true;
}

module.exports = areAllCharactersUnique;
