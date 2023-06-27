/*
Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

Input: n = 3

Output: [[1,2,3],[8,9,4],[7,6,5]]
*/

const generateMatrix = (n) => {
    const matrix = Array(n).fill().map(() => Array(n).fill(0));
    
    let num = 1;
    let topRow = 0, bottomRow = n - 1;
    let leftCol = 0, rightCol = n - 1;
  
    while (num <= n * n) {
      // Traverse top row from left to right
      for (let i = leftCol; i <= rightCol; i++) {
        matrix[topRow][i] = num;
        num++;
      }
      topRow++;
  
      // Traverse right column from top to bottom
      for (let i = topRow; i <= bottomRow; i++) {
        matrix[i][rightCol] = num;
        num++;
      }
      rightCol--;
  
      // Traverse bottom row from right to left
      for (let i = rightCol; i >= leftCol; i--) {
        matrix[bottomRow][i] = num;
        num++;
      }
      bottomRow--;
  
      // Traverse left column from bottom to top
      for (let i = bottomRow; i >= topRow; i--) {
        matrix[i][leftCol] = num;
        num++;
      }
      leftCol++;
    }
  
    return matrix;
  };
  
  const n = 3;
  console.log(generateMatrix(n));
