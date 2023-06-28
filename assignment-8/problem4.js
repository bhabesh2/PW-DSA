/*
You need to construct a binary tree from a string consisting of parenthesis and integers.

The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.
You always start to construct the left child node of the parent first if it exists.
Input: s = "4(2(3)(1))(6(5))"

Output: [4,2,6,3,1,5]
*/

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function str2tree(s) {
    let i = 0;
  
    function buildTree() {
      if (i === s.length) return null;
  
      let start = i;
      if (s[i] === "-") {
        i++;
      }
      while (i < s.length && !isNaN(parseInt(s[i]))) {
        i++;
      }
      const rootVal = parseInt(s.substring(start, i));
      const root = new TreeNode(rootVal);
  
      if (i < s.length && s[i] === "(") {
        i++; // Skip opening parenthesis
        root.left = buildTree();
        i++; // Skip closing parenthesis
      }
  
      if (i < s.length && s[i] === "(") {
        i++; // Skip opening parenthesis
        root.right = buildTree();
        i++; // Skip closing parenthesis
      }
  
      return root;
    }
  
    return buildTree();
  }
  
  function inorderTraversal(root) {
    const result = [];
  
    function inorder(node) {
      if (node === null) return;
  
      inorder(node.left);
      result.push(node.val);
      inorder(node.right);
    }
  
    inorder(root);
    return result;
  }
  
  // Example usage:
  const s = "4(2(3)(1))(6(5))";
  const root = str2tree(s);
  console.log(inorderTraversal(root)); // Output: [3, 2, 1, 4, 5, 6]
  