/**
 * @copyright https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/submissions/
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
export default function kidsWithCandies(candies, extraCandies) {
  let greatest = Math.max(...candies);
  return candies.map((kid) => kid + extraCandies >= greatest);
}
