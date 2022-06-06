// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x) {
  let newX = x.split("");

  let nx = newX.map((el) => {
    if (el >= 5) {
      return 1;
    } else {
      return 0;
    }
  });

  return nx.join("");
}

//

const F = (x) =>
  x
    .split("")
    .map((el) => (el >= 5 ? 1 : 0))
    .join("");
console.log(F("12345677899"));
