'use strict';

var name = 'Node.js';
var s = `Hello, ${name}!`;
function greet(name) {
    console.log(s + ', ' + name + '!');
}

console.log(s);
module.exports = greet;//输出greet函数