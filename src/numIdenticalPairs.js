/**
 * @copyright https://leetcode.com/problems/number-of-good-pairs/
 * @param {number[]} nums
 * @return {number}
 */ export default function numIdenticalPairs(nums) {
  let target = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i < j) {
        target += nums[i] === nums[j];
      }
    }
  }
  return target;
}
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
