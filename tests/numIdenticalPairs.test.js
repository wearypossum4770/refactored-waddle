import numIdenticalPairs from "../src/numIdenticalPairs.js";
test.each([
  [[1, 2, 3, 1, 1, 3], 4],
  [[1, 1, 1, 1], 6],
  [[1, 2, 3], 0],
])("count identical pairs", (nums, output) => {
  let func = numIdenticalPairs(nums);
  expect(func).toEqual(output);
});
