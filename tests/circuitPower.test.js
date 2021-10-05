import circuitPower from "../src/circuitPower.js";
test.each([
  [110, 3, 330],
  [230, 10, 2300],
  [480, 20, 9600],
])(
  "calculates power given a voltage and current",
  (voltage, current, output) => {
    let func = circuitPower(voltage, current);
    expect(func).toBe(output);
  }
);
