import isAdjacent from "../src/isAdjacent.js";
describe("testing  matrices", () => {
  const matrix2 = [
    [0, 1, 0, 1, 1],
    [1, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 1, 0],
  ];
  let matrix1 = [
    [0, 1, 0, 0],
    [1, 0, 1, 1],
    [0, 1, 0, 1],
    [0, 1, 1, 0],
  ];
  test.each([
    [0, 1, true],
    [0, 2, false],
    [2, 1, true],
  ])("", (param1, param2, output) => {
    let func = isAdjacent(matrix1, param1, param2);
    expect(func).toBe(output);
  });
  test.each([
    [0, 3, true],
    [1, 4, false],
    [3, 2, true],
  ])("", (param1, param2, output) => {
    let func = isAdjacent(matrix2, param1, param2);
    expect(func).toBe(output);
  });
});
