/**
 * @param {number} x
 * @return {boolean}
 */
export default function isPalindrome(x) {
  if (x < 0) {
    return false;
  } else {
    let nums = [...x.toString()];
    if (nums.length === 1) {
      return true;
    } else {
    }
    return isPalindrome();
  }
}

console.log(isPalindrome(-121));
console.log(isPalindrome(121));
console.log(isPalindrome(10));
console.log(isPalindrome(-101));
