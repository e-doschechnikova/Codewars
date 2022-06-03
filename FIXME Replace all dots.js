// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.

// Task
// Fix the bug so we can all go home early.

// Notes
// String str will never be null.

var replaceDots = function (str) {
  let dot = /\./gi;
  let h = "-";
  let newStr = str.replace(dot, h);
  return newStr;
};

//
var replaceDots = (s) => s.split(".").join("-");

//

const replaceDots = (str) => str.replace(/\./g, "-");
