function fizzBuzzArray(num) {
  const finalArr = [];

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      finalArr.push('FizzBuzz');
    } else if (i % 3 === 0) {
      finalArr.push('Fizz');
    } else if (i % 5 === 0) {
      finalArr.push('Buzz');
    } else {
      finalArr.push(i);
    }
  }
  return finalArr;
}

module.exports = fizzBuzzArray;
