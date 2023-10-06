function displayLikes(name) {
  const arrLengthName = name.length;

  if (arrLengthName === 0) {
    return 'no one likes this';
  } else if (arrLengthName === 1) {
    return `${name[0]} likes this`;
  } else if (arrLengthName === 2) {
    return `${name[0]} and ${name[1]} like this`;
  } else if (arrLengthName === 3) {
    return `${name[0]}, ${name[1]} and ${name[2]} like this`;
  } else {
    return `${name[0]}, ${name[1]} and ${arrLengthName - 2} others like this`;
  }
}

module.exports = displayLikes;
