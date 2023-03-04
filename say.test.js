const say = require("./say");

test("print hello jest",()=>{
    expect(say()).toBe('hello jest');
})

test("print hello jest",()=>{
    expect(say("ahmad")).toMatch('hello ahmad');
})