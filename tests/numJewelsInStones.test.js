import numJewelsInStones from "../src/numJewelsInStones.js";
test.each([
  ["aA", "aAAbbbb", 3],
  ["z", "ZZ", 0],
])("counts jewels in stones", (jewels, stones, output) => {
  let func = numJewelsInStones(jewels, stones);
  expect(func).toBe(output);
});
