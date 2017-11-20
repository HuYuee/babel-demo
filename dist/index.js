'use strict';

require('babel-polyfill');

var x = function x(a) {
    return a + 1;
};

console.log(x(2));
console.log('abc'.padStart(10));
var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }

console.log('<h1>hello</h1>');
var arr = [React.createElement(
    'h1',
    null,
    'Hello world!'
), React.createElement(
    'h2',
    null,
    'React is awesome'
)];