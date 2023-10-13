function calculateTotalSalesWithTax(arr, tax) {
  const convertedTax = tax * 0.01 + 1;

  const totalOfItems = arr
    .map((element) => {
      return element.price * element.quantity;
    })
    .reduce((total, num) => total + num, 0);

  return totalOfItems * convertedTax;
}

module.exports = calculateTotalSalesWithTax;
