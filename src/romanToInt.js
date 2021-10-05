let numeralsToInteger = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1_000,
};
// macron
/**
 * @copyright https://leetcode.com/problems/roman-to-integer/
 * @id 13
 * @runtime  214 ms, faster than 29.86% of JavaScript online submissions for Roman to Integer.
 * @memory_usage  44.9 MB, less than 59.78% of JavaScript online submissions for Roman to Integer.
 * @param {string} roman
 * @returns
 */
export default function romanToInt(roman) {
  let integer = 0,
    currentValue,
    nextValue;
  for (let i = 0; i < roman.length; i++) {
    currentValue = numeralsToInteger[roman[i]];
    nextValue = numeralsToInteger[roman[i + 1]];
    if (currentValue >= nextValue || i === roman.length - 1) {
      integer += currentValue;
    } else {
      integer -= currentValue;
    }
  }
  return integer;
}
