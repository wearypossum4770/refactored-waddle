import makePlusFunction from "../src/makePlusFunction.js";

test.each([])("adds five to number", (num, output) => {
  let func = makePlusFunction(num);
  expect(func).toBe(output);
});
