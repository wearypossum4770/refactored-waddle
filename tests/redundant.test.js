import redundant from '../src/redundant.js'
const f1 = redundant("apple")
const f2 = redundant("pear")
const f3 = redundant("")
test('decorator', ()=> expect(f1()).toEqual( "apple"));
test('decorator', ()=> expect(f2()).toEqual( "pear"));
test('decorator', ()=> expect(f3()).toEqual( ""));