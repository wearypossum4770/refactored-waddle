/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 *
 * */
export default function countMatches(items, ruleKey, ruleValue) {
  let count = 0;
  items.forEach((array) => {
    if (ruleKey === "type" && array[0] === ruleValue) {
      count += 1;
    } else if (ruleKey === "color" && array[1] === ruleValue) {
      console.log("type");
      count += 1;
    } else if (ruleKey === "name" && array[2] === ruleValue) {
      count += 1;
    }
  });
  return count;
}
