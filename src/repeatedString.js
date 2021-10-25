/**
 * @copyright https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
 * @param {string} s
 * @param {number} n
 * @returns
 */
const repeatedString = (s, n) => {
  if (s === "a" || s === "A") {
    return n;
  }
  return [...s.repeat(n).slice(0, n).matchAll(/a/gi)].length;
};

console.log(repeatedString("aba", 10));
console.log(repeatedString("abcac", 10));
console.log(repeatedString("a", 1_000_000_000_000));
// console.log(
//   repeatedString(
//     "kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm",
//     736_778_906_400
//   )
// );
// 'cfimaakj'
// 138_511_468_548
// 1_108_091_748_382

