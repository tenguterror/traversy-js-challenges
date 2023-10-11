function formatPhoneNumber(number) {
  const area = number.slice(0, 3).join('');
  const prefix = number.slice(3, 6).join('');
  const line = number.slice(6).join('');

  return `(${area}) ${prefix}-${line}`;
}

module.exports = formatPhoneNumber;
