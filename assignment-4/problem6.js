/*
💡 Given an integer array nums sorted in **non-decreasing** order, return *an array of **the squares of each number** sorted in non-decreasing order*.

**Example 1:

Input: nums = [-4,-1,0,3,10]

Output: [0,1,9,16,100]

**Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100]

*/

var sortedSquares = function (nums) {
  let n = nums.length;
  let left = 0,
    right = n - 1;
  let result = new Array(n);

  for (let p = n - 1; p >= 0; p--) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[p] = nums[left] * nums[left];
      left++;
    } else {
      result[p] = nums[right] * nums[right];
      right--;
    }
  }
  return result;
};

const nums = [-4, -1, 0, 3, 10];

console.log(sortedSquares(nums)); // [0,1,9,16,100]