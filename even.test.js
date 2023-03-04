const checkEven = require('./even');
const even = require('./even');


test('check if the number is even or not',()=>{
    expect(checkEven(2)).toBeTruthy();
})

test('check if the number is even or not',()=>{
    expect(checkEven(3)).toBeFalsy();
})

test('check if the number is even or not',()=>{
    expect(checkEven(4)).toBeTruthy();
})