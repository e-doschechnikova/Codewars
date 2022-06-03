// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

function nameShuffler(str) {
  let newName = str.split(" ");
  return newName[1] + " " + newName[0];
}

//
function nameSuffler(str) {
  return str.split(" ").reverse().join(" ");
}
