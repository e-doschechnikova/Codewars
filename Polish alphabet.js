// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z

function correctPolishLetters(string) {
  switch (string) {
    case "ą":
      return "a";
      break;
    case "ć":
      return "c";
      break;
    case "ę":
      return "e";
      break;
    case "ó":
      return "o";
      break;
    case "ń":
      return "n";
      break;
    case "ś":
      return "s";
      break;
    case "ź":
      return "z";
      break;
    case "ż":
      return "z";
      break;
    case "ł":
      return "l";
  }
}
