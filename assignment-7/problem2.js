/*
Given a string num which represents an integer, return true *if* num *is a strobogrammatic number*.

A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

Example 1:

Input: num = "69"

Output:

true
*/

const isStrobogrammatic = (num) => {
    const strobogrammaticMap = new Map([
      ['0', '0'],
      ['1', '1'],
      ['6', '9'],
      ['8', '8'],
      ['9', '6']
    ]);
  
    let left = 0;
    let right = num.length - 1;
  
    while (left <= right) {
      const leftDigit = num[left];
      const rightDigit = num[right];
  
      if (!strobogrammaticMap.has(leftDigit) || strobogrammaticMap.get(leftDigit) !== rightDigit) {
        return false;
      }
  
      left++;
      right--;
    }
  
    return true;
  }
  
  // Example usage:
  const num = "69";
  console.log(isStrobogrammatic(num)); // Output: true
  
  