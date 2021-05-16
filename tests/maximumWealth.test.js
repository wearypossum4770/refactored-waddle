import maximumWealth from "../src/maximumWealth.js";

test.each([
  [
    [
      [1, 2, 3],
      [3, 2, 1],
    ],
    6,
  ],
  [
    [
      [1, 5],
      [7, 3],
      [3, 5],
    ],
    10,
  ],
  [
    [
      [2, 8, 7],
      [7, 1, 3],
      [1, 9, 5],
    ],
    17,
  ],
])("greatest sum of 2d arrays", (accounts, output) => {
  let func = maximumWealth(accounts);
  expect(func).toEqual(output);
});
