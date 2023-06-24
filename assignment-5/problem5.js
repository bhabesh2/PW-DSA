/*
Given two integer arrays arr1 and arr2, and the integer d, *return the distance value between the two arrays*.

The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.

Example 1:

Input: arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2

Output: 2

Explanation:

For arr1[0]=4 we have:

|4-10|=6 > d=2

|4-9|=5 > d=2

|4-1|=3 > d=2

|4-8|=4 > d=2

For arr1[1]=5 we have:

|5-10|=5 > d=2

|5-9|=4 > d=2

|5-1|=4 > d=2

|5-8|=3 > d=2

For arr1[2]=8 we have:

|8-10|=2 <= d=2

|8-9|=1 <= d=2

|8-1|=7 > d=2

|8-8|=0 <= d=2
*/

var findTheDistanceValue = function (arr1, arr2, d) {
  let ans = 0;
  const set2 = new Set(arr2);

  for (let i = 0; i < arr1.length; i++) {
    let found = false;

    for (let j = arr1[i] - d; j <= arr1[i] + d; j++) {
      if (set2.has(j)) {
        found = true;
        break;
      }
    }

    if (!found) {
      ans++;
    }
  }

  return ans;
};

let arr1 = [4, 5, 8];
let arr2 = [10, 9, 1, 8];

let d = 2;

console.log(findTheDistanceValue(arr1, arr2, d));
