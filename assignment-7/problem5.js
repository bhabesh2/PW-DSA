/*
Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

Example 1:

Input: s = "abcdefg", k = 2

Output:

"bacdfeg"
*/

const reverseStr = (s, k) => {
    const n = s.length;
    const arr = s.split("");
    
    for (let i = 0; i < n; i += 2 * k) {
      let left = i;
      let right = Math.min(i + k - 1, n - 1);
      
      while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
      }
    }
    
    return arr.join("");
  }
  
  // Example usage:
  const s = "abcdefg";
  const k = 2;
  console.log(reverseStr(s, k)); // Output: "bacdfeg"
  