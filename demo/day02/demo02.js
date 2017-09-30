var fs=require('fs');
fs.open('./write.txt','r',function (err,fd){
    var buf=new Buffer(255);
    fs.read(fd,buf,0,12,6,function (err,bytesRead,buffer) {
        console.log(buffer.slice(0,bytesRead).toString())
        fs.read(fd,buf,0,3,null,function (err,bytesRead,buffer) {
            console.log(buffer.slice(0,bytesRead).toString())
        })
    })
})

