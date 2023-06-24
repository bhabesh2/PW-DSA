/*
Given an integer array nums sorted in non-decreasing order, return *an array of the squares of each number sorted in non-decreasing order*.

Example 1:

Input: nums = [-4,-1,0,3,10]

Output: [0,1,9,16,100]

Explanation: After squaring, the array becomes [16,1,0,9,100].

After sorting, it becomes [0,1,9,16,100].
*/

const sortedSquares = (nums) => {
  let n = nums.length;
  let result = new Array(n);
  let i = 0,
    j = n - 1;
  for (let p = n - 1; p >= 0; p--) {
    if (Math.abs(nums[i]) > Math.abs(nums[j])) {
      result[p] = nums[i] * nums[i];
      i++;
    } else {
      result[p] = nums[j] * nums[j];
      j--;
    }
  }
  return result;
};

let arr = [-4, -1, 0, 3, 10];

console.log(sortedSquares(arr));
