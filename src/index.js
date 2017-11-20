import  "babel-polyfill";

var x = a => a + 1;

console.log(x(2));
console.log('abc'.padStart(10));
var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }

console.log('<h1>hello</h1>')
var arr = [
    <h1>Hello world!</h1>,
    <h2>React is awesome</h2>,
   ];