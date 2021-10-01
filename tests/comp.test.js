import comp from '../src/comp.js'
test.each([
    ["AB", "CD", true],
["ABC", "DE", false],
["hello", "edabit", false],
["meow", "woof", true],
["jrnvjrnnt", "cvjknfjvmfvnfjn", false],
["jkvnjrt", "krnf", false],
["Facebook", "Snapchat", true],
])('are strings the same length', () => {
    let func = comp(param1,param2, output)
    expect(func).toBe(output)
})