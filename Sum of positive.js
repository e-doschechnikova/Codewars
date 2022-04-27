/*You get an array of numbers, return the sum of all of the positives ones.
Note: if there is nothing to sum, the sum is default to 0.*/

function positiveSum(arr) {
  let answer = 0;
  arr.forEach((n) => {
    if (n > 0) {
      answer += n;
    }
  });

  return answer;
}

console.log(positiveSum([1, 2, 3, 4, 5]), 15);
console.log(positiveSum([1, -2, 3, 4, 5]), 13);
console.log(positiveSum([]), 0);
console.log(positiveSum([-1, -2, -3, -4, -5]), 0);
console.log(positiveSum([-1, 2, 3, 4, -5]), 9);
