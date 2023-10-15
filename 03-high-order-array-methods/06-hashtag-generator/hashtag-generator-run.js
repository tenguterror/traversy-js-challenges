const generateHashtag = require('./hashtag-generator');

const result = generateHashtag('hello world');
const result2 = generateHashtag(
  'This is a very very very very very very very very very very very very very very long input that should result in a false hashtag because it exceeds the character limit of 140'
);
const result3 = generateHashtag('    hello     World!      ');

console.log(result);
console.log(result2);
console.log(result3);
