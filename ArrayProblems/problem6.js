/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

**Example 1:**
Input: nums = [1,2,3,1]

Output: true

*/

const containsDuplicate = (nums) => {
  let slow = 0;
  let fast = 0;

  // Move slow and fast pointers at different speeds until they meet or reach the end
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (fast !== slow && fast !== undefined && slow !== undefined);

  // Check if the pointers met
  return fast === slow;
};

// Example usage:
const nums = [1, 2, 3, 1];
const hasDuplicate = containsDuplicate(nums);
console.log(hasDuplicate); // Output: false
