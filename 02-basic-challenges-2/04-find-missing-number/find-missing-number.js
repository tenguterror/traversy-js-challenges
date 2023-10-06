function findMissingNumber(numbers) {
  const n = numbers.length + 1;
  const sum = (n * (n + 1)) / 2; // Gauss formula
  let sumOfNumbers = 0;

  if (!numbers || numbers.length === 0) {
    return undefined;
  }

  for (let i = 0; i < numbers.length; i++) {
    sumOfNumbers += numbers[i];
  }

  return sum - sumOfNumbers;
}

module.exports = findMissingNumber;
