function arraySum(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const element = arr.shift();
  console.log(element);

  return arraySum(arr) + element;
}

module.exports = arraySum;
