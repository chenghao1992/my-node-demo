var fs=require('fs');
var path=require('path');
var myPath=path.normalize('./a//b//c//..//c/e//..//');
console.log(myPath)

console.log(path.join(__dirname,'a','b'));
console.log(path.resolve('a','b'));
console.log(path.resolve('../a','b'));
console.log(path.resolve('/a','b'));
console.log(path.resolve());