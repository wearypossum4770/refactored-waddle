/**
 * @copyright // https://edabit.com/challenge/6R6gReGTGwzpwuffD
 * @param {Array.<number>} arr 
 * @returns 
 */

export default function sevenBoom(arr) {
    return arr.toString().match("7") ? "Boom!" : "there is no 7 in the array";
  }
  