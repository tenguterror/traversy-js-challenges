function numberRange(startNum, endNum) {
  if (endNum === startNum) {
    return [startNum];
  }

  const result = numberRange(startNum, endNum - 1);
  result.push(endNum);
  return result;
}

module.exports = numberRange;
