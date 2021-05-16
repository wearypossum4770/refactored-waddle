/**
 * @copyright https://leetcode.com/problems/jewels-and-stones/submissions/
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
export default function numJewelsInStones(jewels, stones) {
  return [...jewels]
    .map((jewel) => [...stones.matchAll(jewel)].length)
    .reduce((a, b) => a + b);
}
