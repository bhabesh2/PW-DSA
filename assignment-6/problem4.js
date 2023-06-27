/*
Given a binary array nums, return *the maximum length of a contiguous subarray with an equal number of* 0 *and* 1.

Example 1:

Input: nums = [0,1]

Output: 2

Explanation:

[0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
*/

const findMaxLength = (nums) => {
  let hash = { 0: -1 };
  let count = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) count--;
    else count++;

    if (hash[count] != null) max = Math.max(max, i - hash[count]);
    else hash[count] = i;
  }
  return max;
};

console.log(findMaxLength([0, 1]));
