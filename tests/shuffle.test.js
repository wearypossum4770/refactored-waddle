import shuffle from "../src/shuffle.js";
test.each([
  [[2, 5, 1, 3, 4, 7], 3, [2, 3, 5, 4, 1, 7]],
  [[1, 2, 3, 4, 4, 3, 2, 1], 4, [1, 4, 2, 3, 3, 2, 4, 1]],
  [[1, 1, 2, 2], 2, [1, 2, 1, 2]],
])("shuffle array", (nums, n, output) => {
  let func = shuffle(nums, n);
  expect(func).toStrictEqual(output);
});
