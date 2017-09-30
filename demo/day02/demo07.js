var fs=require('fs');
fs.watchFile('./b.txt',function (curr,prev) {
    if(Date.parse(prev.ctime)==0){
        console.log("文件刚创建");
    }else if(Date.parse(curr.ctime)==0){
        console.log("文件刚被删除")
    }else if(Date.parse(prev.mtime)!=Date.parse(curr.mtime)){
        console.log('文件内容被修改')
    }
})