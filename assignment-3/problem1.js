/*
Given an integer array nums of length n and an integer target, find three integers
in nums such that the sum is closest to the target.
Return the sum of the three integers.

You may assume that each input would have exactly one solution.

Example 1:
Input: nums = [-1,2,1,-4], target = 1
Output: 2

Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

const threeSumClosest = (nums, target) => {
  nums.sort((a, b) => a - b); // Sort the array

  let closestSum = Infinity; // Initialize closest sum

  const n = nums.length;
  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];

      if (currentSum === target) {
        return target;
      }

      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }

      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
};

let nums = [-1, 2, 1, -4];

let target = 1;

const result = threeSumClosest(nums, target);

console.log(result);// output 2
