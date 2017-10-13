var fs=require('fs');
var file=fs.createReadStream('./a.txt');
var out=fs.createWriteStream('./b.txt');
file.on('data',function (data) {
    out.write(data,function () {
        console.log(data.toString());
    })
})