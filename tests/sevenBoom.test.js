import sevenBoom from '../src/sevenBoom.js'
test.each([
    [[2, 6, 7, 9, 3] , "Boom!"],
    [[33, 68, 400, 5] , "there is no 7 in the array"],
    [[86, 48, 100, 66] , "there is no 7 in the array"],
    [[76, 55, 44, 32] , "Boom!"],
    [[35, 4, 9, 37] , "Boom!"],
  ])("Finds if an array of numbers contains the number 7", (param1, output) => {
    let func = sevenBoom(param1);
    expect(func).toBe(output);
  });