function power(num, exp) {
  // console.log(exp);
  console.log(num);

  if (exp === 0) {
    return 1;
  }

  return num * power(num, exp - 1);
}

module.exports = power;
