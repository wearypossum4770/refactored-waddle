import isSeven from '../src/isSeven.js'

test.each([
    [4 , false] 
[9 , false]
[7 ,  true]
[10 ,  false]
[20 ,  false]
[7 ,  true]
])('is number seven?', (param, output) => {
    let func = isSeven(param)
    expect(func).toBe(output)
})