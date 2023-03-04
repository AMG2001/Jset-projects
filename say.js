function sayHello(name){
    return "hello "+(name || 'jest');
}

module.exports=sayHello;