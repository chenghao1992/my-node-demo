var fs=require('fs');
var path=require('path');
var myPath=path.resolve('../day01');
console.log(myPath);
var file=fs.createReadStream(myPath+'/info.log');
file.on('data',function (data) {
    console.log(data.toString())
})

console.log(path.relative('/day01/demo01.js','/day02/demo01.js'))
console.log(path.dirname('/day01/demo01.js'))
console.log(path.dirname('day01'))
console.log(path.basename('../day01/demo02.js','js'))
console.log(path.sep)
console.log(path.delimiter)