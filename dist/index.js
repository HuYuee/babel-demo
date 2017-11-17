"use strict";

require("babel-polyfill");

var x = function x(a) {
  return a + 1;
};

console.log(x(2));
console.log('abc'.padStart(10));
var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }