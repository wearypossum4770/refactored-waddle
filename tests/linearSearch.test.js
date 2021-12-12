import linearSearch from "../src/linearSearch.js";
test.each([[[2, 3, 4, 10, 40], 5, 10,3]])(
  "returns index of item or -1 if not found.",
  (param1, param2, param3, output) => {
    let func = linearSearch(param1, param2, param3);
    expect(func).toEqual(output);
  }
);
