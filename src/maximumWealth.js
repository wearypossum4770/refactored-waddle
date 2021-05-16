/**
 * @copyright https://leetcode.com/problems/richest-customer-wealth/
 * @param {number[]} accounts
 * @returns
 */
export default function maximumWealth(accounts) {
  return Math.max(
    ...accounts.map((account) => account.reduce((accum, curr) => accum + curr))
  );
}
