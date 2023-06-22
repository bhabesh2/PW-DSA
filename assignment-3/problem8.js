/*
Given an array of meeting time intervals where intervals[i] = [starti, endi],
determine if a person could attend all meetings.

Example 1:
Input: intervals = [[0,30],[5,10],[15,20]]
Output: false
*/

function canAttendMeetings(intervals) {
  const n = intervals.length;

  for (let i = 1; i < n; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false;
    }
  }

  return true;
}

const intervals = [
  [0, 30],
  [5, 10],
  [15, 20],
];

console.log(canAttendMeetings(intervals));
