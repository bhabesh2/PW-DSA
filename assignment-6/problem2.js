/*
You are given an m x n integer matrix matrix with the following two properties:

- Each row is sorted in non-decreasing order.
- The first integer of each row is greater than the last integer of the previous row.

Given an integer target, return true if target is in matrix or false *otherwise*.

You must write a solution in O(log(m * n)) time complexity.

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3

Output: true
*/

const findMatrix = (matrix, target) => {
  let row = matrix.length;
  let col = matrix[0].length;

  let left = 0;
  let right = row * col - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    let mid_value = matrix[Math.floor(mid / col)][mid % col];

    if (mid_value === target) {
      return true;
    } else if (mid_value < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
};

const input = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];

const target = 3;

console.log(findMatrix(input, target));
