import triangleArea from "../src/triangleArea.js";

test.each([
  [3, 2, 3],
  [5, 4, 10],
  [10, 10, 50],
  [0, 60, 0],
  [12, 11, 66],
])("calculate triangle area", (base, height, output) => {
  let func = triangleArea(base, height);
  expect(func).toEqual(output);
});
