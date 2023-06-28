/*
Given a string s containing only three types of characters: '(', ')' and '*', return true *if* s *is valid*.

The following rules define a valid string:

- Any left parenthesis '(' must have a corresponding right parenthesis ')'.
- Any right parenthesis ')' must have a corresponding left parenthesis '('.
- Left parenthesis '(' must go before the corresponding right parenthesis ')'.
- '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

Example 1:

Input: s = "()"

Output:

true
*/

const isValid = (s) => {
    if (s === "") {
      return true;
    }
  
    let simplified = s.replace("()", "").replace("{}", "").replace("[]", "");
    if (simplified === s) {
      return false;
    }
  
    return isValid(simplified);
  };
  
  // Example usage:
  const s = "()";
  console.log(isValid(s)); // Output: true
  