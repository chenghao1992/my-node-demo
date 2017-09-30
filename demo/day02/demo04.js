var fs=require('fs');
fs.mkdir('./mydir',function (err) {
    if(err)console.log("创建目录失败")
    else console.log("创建目录成功")
})

fs.readdir('./',function (err,files) {
    console.log(files)
})