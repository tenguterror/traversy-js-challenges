function generateHashtag(str) {
  if (str.length > 140 || str.length === 0) {
    return false;
  }

  const format = str
    .trim()
    .split(/\s+/)
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1));

  return `#${format.join('')}`;
}

module.exports = generateHashtag;
