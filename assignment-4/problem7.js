/*
💡 You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

Count and return *the number of maximum integers in the matrix after performing all the operations*

Input: m = 3, n = 3, ops = [[2,2],[3,3]]

Output: 4

Explanation: The maximum integer in M is 2, and there are four of it in M. So return 4.
*/

var maxCount = function (m, n, ops) {
  let res_m = m;
  let res_n = n;

  for (let op of ops) {
    res_m = Math.min(res_m, op[0]);
    res_n = Math.min(res_n, op[1]);
  }

  return res_m * res_n;
};

const ops = [
  [2, 2],
  [3, 3],
];
const m = 3;
const n = 3;

console.log(maxCount(m, n, ops)); // output 4
