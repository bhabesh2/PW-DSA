/*
Given two strings s1 and s2, return *the lowest ASCII sum of deleted characters to make two strings equal*.

Example 1:

Input: s1 = "sea", s2 = "eat"

Output: 231

Explanation: Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.

Deleting "t" from "eat" adds 116 to the sum.

At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.
*/


const minimumDeleteSum = (s1, s2) => {
    const m = s1.length;
    const n = s2.length;
  
    const dp = new Array(n + 1).fill(0);
    for (let j = 1; j <= n; j++) {
      dp[j] = dp[j - 1] + s2.charCodeAt(j - 1);
    }
  
    for (let i = 1; i <= m; i++) {
      let t1 = dp[0];
      dp[0] += s1.charCodeAt(i - 1);
      for (let j = 1; j <= n; j++) {
        const t2 = dp[j];
        dp[j] = s1[i - 1] === s2[j - 1] ? t1 : Math.min(dp[j] + s1.charCodeAt(i - 1), dp[j - 1] + s2.charCodeAt(j - 1));
        t1 = t2;
      }
    }
  
    return dp[n];
  };
  
  // Example usage:
  const s1 = "sea";
  const s2 = "eat";
  console.log(minimumDeleteSum(s1, s2)); // Output: 231
  