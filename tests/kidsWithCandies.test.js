import kidsWithCandies from "../src/kidsWithCandies.js";
test.each([
  [[2, 3, 5, 1, 3], 3, [true, true, true, false, true]],
  [[4, 2, 1, 1, 2], 1, [true, false, false, false, false]],
  [[12, 1, 12], 10, [true, false, true]],
])("candy divisions", (candies, extraCandies, output) => {
  let func = kidsWithCandies(candies, extraCandies);
  expect(func).toStrictEqual(output);
});
