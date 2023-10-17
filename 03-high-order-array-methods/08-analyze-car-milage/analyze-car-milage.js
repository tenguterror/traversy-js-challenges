function analyzeCarMileage(arr) {
  const totalMileage = arr.reduce((total, miles) => total + miles.mileage, 0);
  const averageMileage = totalMileage / arr.length;
  const highestMileage = arr.reduce(
    (highest, car) => (car.mileage > highest.mileage ? car : highest),
    arr[0]
  );
  const lowestMileage = arr.reduce(
    (lowest, car) => (car.mileage < lowest.mileage ? car : lowest),
    arr[0]
  );

  return {
    averageMileage: parseFloat(averageMileage.toFixed(2)),
    highestMileage,
    lowestMileage,
    totalMileage,
  };
}

module.exports = analyzeCarMileage;
