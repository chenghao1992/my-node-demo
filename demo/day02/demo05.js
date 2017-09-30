var fs=require('fs');
fs.stat('./a.txt',function (err,stats) {
    if(err)console.log("查看文件失败");
    else console.log(stats)
})