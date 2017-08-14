"use strict";

var x = function x(a) {
  return a + 1;
};

console.log(x(2));

var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }