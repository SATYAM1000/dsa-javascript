/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Medium (29.66%)
 * Likes:    13715
 * Dislikes: 13707
 * Total Accepted:    3.8M
 * Total Submissions: 12.7M
 * Testcase Example:  '123'
 *
 * Given a signed 32-bit integer x, return x with its digits reversed. If
 * reversing x causes the value to go outside the signed 32-bit integer range
 * [-2^31, 2^31 - 1], then return 0.
 *
 * Assume the environment does not allow you to store 64-bit integers (signed
 * or unsigned).
 *
 *
 * Example 1:
 *
 *
 * Input: x = 123
 * Output: 321
 *
 *
 * Example 2:
 *
 *
 * Input: x = -123
 * Output: -321
 *
 *
 * Example 3:
 *
 *
 * Input: x = 120
 * Output: 21
 *
 *
 *
 * Constraints:
 *
 *
 * -2^31 <= x <= 2^31 - 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let maxValue = Math.pow(2, 31) - 1;
  const reversedInterger = parseInt(x.toString().split("").reverse().join(""));
  if (reversedInterger > maxValue || reversedInterger < -maxValue) {
    return 0;
  }

  if (x < 0) {
    return -reversedInterger;
  } else {
    return reversedInterger;
  }
};
// @lc code=end
