import lessThan100 from '../src/lessThan100.js'
test.each([
    [5, 57, true],
[77, 30, false],
[0, 59, true],
[78, 35, false],
[63, 11, true],
[37, 99, false],
[52, 11, true],
[82, 95, false],
[17, 44, true],
[74, 53, false],
[3, 77, true],
[25, 80, false],
[59, 28, true],
[69, 87, false],
[10, 45, true],
[43, 58, false],
[50, 44, true],
[74, 89, false],
[3, 27, true],
[21, 79, false],
])('two numberes less than 100', (param1, param2, output) => {
    let func = lessThan100(param1, param2)
expect(func).toBe(output)
})