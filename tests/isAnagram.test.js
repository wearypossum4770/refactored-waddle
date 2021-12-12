import isAnagram from '../src/isAnagram.js'
test.each([
    ['abcde2', 'c2abed', true],
    ['CharM', 'mARcH', true],
    ['charm', 'march', true],
    ['zach', 'attack',false],
    ['Anna Madrigal', 'A man and a girl',true],
  ])("Test if strings are anagrams of each other", (param1, param2, output) => {
    let func = isAnagram(param1, param2);
    expect(func).toBe(output);
  });


