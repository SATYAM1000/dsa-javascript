/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const arrLength = nums.length;
  for (let i = 0; i < arrLength - 1; i++) {
    let newTraget = target - nums[i];
    for (let j = i + 1; j < arrLength; j++) {
      if (nums[j] === newTraget) {
        return [i, j];
      }
    }
  }

  return null;
};
// @lc code=end
