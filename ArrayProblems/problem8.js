/*

You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

**Example 1:**
Input: nums = [1,2,2,4]
Output: [2,3]

*/

const findErrorNums = (nums) => {
  const n = nums.length;
  let duplicateNum = -1;
  let missingNum = -1;

  // Find the duplicate number
  for (let i = 0; i < n; i++) {
    const num = Math.abs(nums[i]);
    if (nums[num - 1] < 0) {
      duplicateNum = num;
    } else {
      nums[num - 1] = -nums[num - 1];
    }
  }

  // Find the missing number
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      missingNum = i + 1;
      break;
    }
  }

  return [duplicateNum, missingNum];
};

const nums = [1, 2, 2, 4];
const result = findErrorNums(nums);
console.log(result); // Output: [2, 3];

  