function arrayIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const commonElements = [...set1].filter((element) => set2.has(element));
  return commonElements;
}

module.exports = arrayIntersection;
