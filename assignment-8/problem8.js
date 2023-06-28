/*
Given two strings s and goal, return true *if you can swap two letters in* s *so the result is equal to* goal*, otherwise, return* false*.*

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

- For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

Example 1:

Input: s = "ab", goal = "ba"

Output: true

Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.
*/

const buddyStrings = (s, goal) => {
    if (s.length != goal.length) return false;
    const diff = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] != goal[i]) diff.push(i);
        if (diff.length > 2) return false;
    }
    if (!diff.length) return s.length != [...new Set(s)].length;
    const [i, j] = diff;
    return s[i] == goal[j] && goal[i] == s[j];
};

// Test the function
const s = "ab";
const goal = "ba";
console.log(buddyStrings(s, goal)); // Output: true

