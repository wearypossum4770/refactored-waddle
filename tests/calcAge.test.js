import calcAge from "../src/calcAge.js";
test.each([
  [10, 3650],
  [0, 0],
  [73, 26645],
])("calculates persons age", (age, output) => {
  let func = calcAge(age);
  expect(func).toBe(output);
});
