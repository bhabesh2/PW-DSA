/*
Given two strings s and t, return true *if they are equal when both are typed into empty text editors*. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:

Input: s = "ab#c", t = "ad#c"

Output: true

Explanation:

Both s and t become "ac".
*/



const backspaceCompare = (s, t) => {
    const processString = (str) => {
      const stack = [];
  
      for (let char of str) {
        if (char !== '#') {
          stack.push(char);
        } else {
          stack.pop();
        }
      }
  
      return stack.join('');
    };
  
    return processString(s) === processString(t);
  };
  
  // Example usage:
  const s = "ab#c";
  const t = "ad#c";
  console.log(backspaceCompare(s, t)); // Output: true
  