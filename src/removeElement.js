export default function removeElement(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = null;
    }
  }
  nums.sort((a, b) => b - a);
  return nums;
}
console.log(removeElement([3, 2, 2, 3], 3));
