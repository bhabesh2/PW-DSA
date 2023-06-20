/*
You are given an integer array nums and an integer k.

In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

The score of nums is the difference between the maximum and minimum elements in nums.

Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

Example 1:
Input: nums = [1], k = 0
Output: 0

Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.
*/

{
  const smallestRangeI = (nums, k) => {
    let minNum = Math.min(...nums);
    let maxNum = Math.max(...nums);

    let minScore = Math.max(0, maxNum - minNum - 2 * k);
    return minScore;
  }

  let nums = [1];
  let k = 0;
  let result = smallestRangeI(nums, k);
  console.log(result); // Output: 0
}
