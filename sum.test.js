const theSum = require('./sum');

test('return the number',()=>{
    expect(theSum(10)).toBe(10);
    expect(theSum(3,3)).toBeGreaterThanOrEqual(6);
    expect(theSum(3,3,3.99999)).toBeCloseTo(10);
    expect(theSum(10)).toBe(10);
});
