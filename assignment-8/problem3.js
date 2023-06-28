/*
Given two strings word1 and word2, return *the minimum number of steps required to make* word1 *and* word2 *the same*.

In one step, you can delete exactly one character in either string.

Example 1:

Input: word1 = "sea", word2 = "eat"

Output: 2

Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".
*/

function minDistance(word1, word2) {
    const memo = new Map(); // Memoization map to store computed results
  
    // Recursive helper function with memoization
    function helper(i, j) {
      if (i === -1) return j + 1; // Base case: word1 is empty, delete all characters in word2
      if (j === -1) return i + 1; // Base case: word2 is empty, delete all characters in word1
  
      const key = i + "," + j;
      if (memo.has(key)) return memo.get(key); // Return memoized result if available
  
      let res;
      if (word1[i] === word2[j]) {
        res = helper(i - 1, j - 1); // Characters are equal, no deletion needed
      } else {
        const deleteInWord1 = helper(i - 1, j) + 1; // Delete character in word1
        const deleteInWord2 = helper(i, j - 1) + 1; // Delete character in word2
        res = Math.min(deleteInWord1, deleteInWord2);
      }
  
      memo.set(key, res); // Memoize the computed result
      return res;
    }
  
    return helper(word1.length - 1, word2.length - 1);
  }
  
  // Example usage:
  const word1 = "sea";
  const word2 = "eat";
  console.log(minDistance(word1, word2)); // Output: 2
  