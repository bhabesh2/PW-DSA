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
  const minimumScore = (nums, k) => {
    let minimum = Infinity;
    let maximum = -Infinity;

    // Find the minimum and maximum values
    for (let i = 0; i < nums.length; i++) {
      minimum = Math.min(minimum, nums[i]);
      maximum = Math.max(maximum, nums[i]);
    }

    // If the difference is already within 2k, return 0
    if (maximum - minimum <= 2 * k) {
      return 0;
    }

    // Calculate the middle value
    const middle = Math.ceil((minimum + maximum) / 2);

    // Adjust the elements in the array
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < middle) {
        nums[i] = minimum;
      } else {
        nums[i] = maximum;
      }
    }

    // Recalculate the new minimum and maximum values
    minimum = Infinity;
    maximum = -Infinity;
    for (let i = 0; i < nums.length; i++) {
      minimum = Math.min(minimum, nums[i]);
      maximum = Math.max(maximum, nums[i]);
    }

    return maximum - minimum;
  };

  const nums = [1];
  const k = 0;
  console.log(minimumScore(nums, k));
}
