/*
Convert 1D Array Into 2D Array

You are given a 0-indexed 1-dimensional (1D) integer array original, and two integers, m and n. You are tasked with creating a 2-dimensional (2D) array with  m rows and n columns using all the elements from original.

The elements from indices 0 to n - 1 (inclusive) of original should form the first row of the constructed 2D array, the elements from indices n to 2 * n - 1 (inclusive) should form the second row of the constructed 2D array, and so on.

Return an m x n 2D array constructed according to the above procedure, or an empty 2D array if it is impossible.

Input: original = [1,2,3,4], m = 2, n = 2

Output: [[1,2],[3,4]]

Explanation: The constructed 2D array should contain 2 rows and 2 columns.

The first group of n=2 elements in original, [1,2], becomes the first row in the constructed 2D array.

The second group of n=2 elements in original, [3,4], becomes the second row in the constructed 2D array.
*/

const construct2DArray = (original, m, n) => {
  if (original.length !== m * n) return [];

  for (let i = 0; i < original.length; i++) {
    const row = Math.floor(i / n); // Row index
    const col = i % n; // Column index

    // Swap elements to their correct positions
    const dest = row * n + col;
    [original[i], original[dest]] = [original[dest], original[i]];
  }

  const result = [];
  for (let i = 0; i < original.length; i += n) {
    result.push(original.slice(i, i + n));
  }

  return result;
};

const arr = [1, 2, 3, 4];

let n = 2;

let m = 2;

console.log(construct2DArray(arr, m, n));
