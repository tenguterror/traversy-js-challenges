function numberRange(startNum, endNum) {
  if (endNum === startNum) {
    return [startNum];
  }

  let result = numberRange(startNum, endNum - 1);
  result.push(endNum);
  return result;
}

module.exports = numberRange;
