/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

function getCount(str) {
  var vowelsCount = 0;

  let bank = ["e", "a", "i", "o", "u"];

  for (let i = 0; i < str.length; i++) {
    if (bank.findIndex((el) => el === str[i]) >= 0) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}
