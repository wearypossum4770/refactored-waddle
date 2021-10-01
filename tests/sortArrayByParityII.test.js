import sortArrayByParityII from "../src/sortArrayByParityII.js";

test.each([
  [
    [4, 2, 5, 7],
    [4, 5, 2, 7],
  ],
])("sorts array by parity", (param, output) => {
  let func = sortArrayByParityII(param);
  expect(func).toStrictEqual(output);
});
