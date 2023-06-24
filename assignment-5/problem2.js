/*

You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build.

Input: n = 5

Output: 2

Explanation: Because the 3rd row is incomplete, we return 2.

*/

const arrangeCoins = (n) => {
  let left = 0;
  let right = n;
  while (left <= right) {
    let pivot = Math.floor(left + (right - left) / 2);
    let coinsUsed = (pivot * (pivot + 1)) / 2;
    if (coinsUsed === n) {
      return pivot;
    }
    if (n < coinsUsed) {
      right = pivot - 1;
    } else {
      left = pivot + 1;
    }
  }
  return right;
};

const n = 5;

console.log(arrangeCoins(n));
