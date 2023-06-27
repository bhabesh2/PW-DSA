/*
Given an array of integers arr, return *true if and only if it is a valid mountain array*.

Recall that arr is a mountain array if and only if:

- arr.length >= 3
- There exists some i with 0 < i < arr.length - 1 such that:
    - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
    - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
Example 1:

Input: arr = [2,1]

Output:

false
*/

var validMountainArray = (arr) => {
  const n = arr.length;
  if (n < 3) {
    return false;
  }

  let left = 0;
  let right = n - 1;

  while (left < right && arr[left] < arr[left + 1]) {
    left++;
  }

  while (right > 0 && arr[right] < arr[right - 1]) {
    right--;
  }

  return left === right && left !== 0 && right !== n - 1;
};

const input = [2, 1];

console.log(validMountainArray(input));
