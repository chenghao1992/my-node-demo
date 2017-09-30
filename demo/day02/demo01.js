var fs=require('fs');
var data=fs.readFileSync('../day01/demo03.js','utf-8');
console.log(data);

fs.readFile('../day01/demo03.js',function (err,data) {
    console.log(data)
    console.log(err)

})

fs.writeFile('write.txt','写入文件内容',function (err) {
    console.log(err)

})

var data=new Buffer('node test');
fs.writeFile('write.txt',data,{flag:'a+'},function (err) {
    if(err)console.log(err);
    else console.log('写文件成功');
    fs.open('./write.txt','r',function (err,fd) {
        console.log(fd);

    })
})

