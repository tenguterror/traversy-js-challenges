// First set is with using every method into a new variable.

// Second is using one variable and chaining methods to it.

function sumOfEvenSquares(arr) {
  // const filteredArr = arr.filter((num) => num % 2 === 0);

  // const squaredArr = filteredArr.map((num) => num ** 2);

  // const sumOfArr = squaredArr.reduce((total, num) => total + num, 0);

  const sumOfArr = arr
    .filter((num) => num % 2 === 0)
    .map((num) => num ** 2)
    .reduce((total, num) => total + num, 0);

  return sumOfArr;
}

module.exports = sumOfEvenSquares;
