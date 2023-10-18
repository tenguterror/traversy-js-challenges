function validatePassword(str) {
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

  return regex.test(str) ? true : false;
}

module.exports = validatePassword;
