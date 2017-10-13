var fs=require('fs');
var file=fs.createReadStream('./a.txt',{encoding:'utf8',start:3,end:12});
file.on('open',function (fd) {
    console.log('开始读取文件')
})

file.on('data',function (data) {
    console.log('读取到数据：',data)
})

file.on('end',function () {
    console.log('文件已全部读取完毕')
})