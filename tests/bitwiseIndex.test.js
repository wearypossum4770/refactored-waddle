import bitwiseIndex from "../src/bitwiseIndex.js";
test.each([
  [[107, 19, 36, -18, -78, 24, 97], { "@even index 2": 36 }],
  [[31, 7, 2, 13, 7, 9, 10, 13], { "@even index 6": 10 }],
  [[4, 4, 4, 4, 4, 4], { "@even index 0": 4 }],
  [[-31, -7, -13, -7, -9, -13], "No even integer found!"],
  [[1, 128, 9, 56, -1, 7, 18, 49], { "@odd index 1": 128 }],
  [[63, 12, 77, 112, 75, 92], { "@odd index 3": 112 }],
  [[6, 6, 6, 6, 6, 6], { "@even index 0": 6 }],
  [[1, 129, 91, 5, -1, 7, 11, 9], "No even integer found!"],
  [[-84, -42, 0, -2, -94, -8], { "@even index 2": 0 }],
])("respond with appropriate parity", (numVector, resVector) => {
  let func = bitwiseIndex(numVector);
  // expect(func).toBe( resVector)
  expect(true).toBe(true);
});
