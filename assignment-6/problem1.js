/*
A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

- s[i] == 'I' if perm[i] < perm[i + 1], and
- s[i] == 'D' if perm[i] > perm[i + 1].

Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.

Example 1:

Input: s = "IDID"

Output:

[0,4,1,3,2]
*/

const diStringMatch = (s) => {
  let count1 = -1;
  let count2 = s.length + 1;
  const result = [];
  for (let i = 0; i <= s.length; i++) {
    if (s[i] === "I") {
      count1 = count1 + 1;
      result.push(count1);
    } else {
      count2 = count2 - 1;
      result.push(count2);
    }
  }
  return result;
};

const str = 'IDID';

console.log(diStringMatch(str));
