
import sortSentence from '../src/sortSentence.js'
test.each([
    ["is2 sentence4 This1 a3", "This is a sentence"],
])
("counts items", (param1,output) => {
    let func = sortSentence(param1);
    expect(func).toBe(output);
  });