export default function sortArrayByParityII(nums) {
  let target = [];
  let evens = nums.filter((num) => num % 2 === 0);
  let odds = nums.filter((num) => num % 2 === 1);
  for (let i = 0; i < evens.length; i++) {
    target.push(evens[i]);
    target.push(odds[i]);
  }
  return target;
}
