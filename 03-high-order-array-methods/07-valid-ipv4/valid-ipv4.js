const isValidIPv4 = (str) => {
  const strArr = str.split('.');

  if (strArr.length !== 4) {
    return false;
  }

  return strArr.every((x) => {
    const num = parseInt(x);
    return num >= 0 && num <= 255 && x === num.toString();
  });
};

module.exports = isValidIPv4;
