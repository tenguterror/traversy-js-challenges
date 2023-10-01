function titleCase(str) {
  const words = str.toLowerCase().split(' ');
  let upperCase = [];

  for (let i = 0; i < words.length; i++) {
    upperCase.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
  }

  return (upperCase = upperCase.join(' '));
}

module.exports = titleCase;
