/*
You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]

Output: true
*/

const checkStraightLine = (coordinates) => {
    const [x1, y1] = coordinates[0];
    const [x2, y2] = coordinates[1];
  
    for (let i = 2; i < coordinates.length; i++) {
      const [x, y] = coordinates[i];
  
      if ((x2 - x1) * (y - y1) !== (x - x1) * (y2 - y1)) {
        return false;
      }
    }
  
    return true;
  };
  
  // Example usage:
  const coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];
  console.log(checkStraightLine(coordinates)); // Output: true
  