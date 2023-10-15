const isValidIPv4 = (str) => {
  if (str.split('.').length < 3 || str.split('.').length > 4) {
    return false;
  }
};

module.exports = isValidIPv4;
