var fs=require('fs');
fs.realpath('./a.txt',function (err,resolvedPath) {
    console.log(resolvedPath)

})