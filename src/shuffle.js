/**
 * @copyright https://leetcode.com/problems/shuffle-the-array/
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
export default function shuffle(nums, n) {
  let target = Array.from(nums.length);
  for (let index = 0; index < nums.length; index++) {
    if (index < n) {
      target.push(nums[index % n]);
      target.push(nums[index + n]);
    }
  }
  return target;
}
