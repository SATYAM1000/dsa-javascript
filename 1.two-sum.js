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

  // solution:01
  for (let i = 0; i < arrLength - 1; i++) {
    let newTraget = target - nums[i];
    for (let j = i + 1; j < arrLength; j++) {
      if (nums[j] === newTraget) {
        return [i, j];
      }
    }
  }

  

  // solution:02

  const map = new Map();
  for (let i = 0; i < arrLength; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < arrLength; i++) {
    const newTraget = target - nums[i];
    const isNewTargetExistInMap = map.has(newTraget);
    if (isNewTargetExistInMap && map.get(newTraget) !== i) {
      return [i, map.get(newTraget)];
    }
  }

  return null;
};
// @lc code=end
