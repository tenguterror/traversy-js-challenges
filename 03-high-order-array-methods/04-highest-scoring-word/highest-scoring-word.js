function highestScoringWord(str) {
  const strArr = str.split(' ');

  const wordscoreCal = strArr.map((e) =>
    Array.from(e).reduce((total, num) => total + num.charCodeAt(0) - 96, 0)
  );

  const highestScore = Math.max(...wordscoreCal);
  const highIndex = wordscoreCal.indexOf(highestScore);

  return strArr[highIndex];
}

module.exports = highestScoringWord;
