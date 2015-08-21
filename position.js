/**
 * Implement the position function described in:
 * https://blog.svpino.com/2015/05/24/programming-challenge-the-position-of-the-element
 * Created by philipjohnson on 8/5/15.
 */

/* exported position, testNums */

/**
 * Finds the position in the array of nums where num should be inserted.
 * @param nums The array of numbers.
 * @param num The number to be inserted.
 * @returns {number} The position where it should be inserted.
 */
function position(nums, num) {
  var cursor = 0;
  while ((nums[cursor] <= num) && (cursor < nums.length)) {
    if (nums[cursor] === num) {
      return cursor;
    }
    cursor++;
  }
  return cursor;
}



//console.log(position(testNums, 5));
//console.log(position(testNums, 2));
//console.log(position(testNums, 7));
//console.log(position(testNums, 0));