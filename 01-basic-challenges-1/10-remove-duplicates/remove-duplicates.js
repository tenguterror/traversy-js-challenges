// My way using a forEach

function removeDuplicates(arr) {
  const result = [];

  arr.forEach((element) => {
    if (!result.includes(element)) {
      result.push(element);
    }
  });

  return result;
}

module.exports = removeDuplicates;
