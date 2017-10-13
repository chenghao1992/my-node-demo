var http=require('http');
var server=http.createServer().listen(1337,'localhost');
server.on('request',function (req,res) {
    if(req.url!=="/favicon.ico"){
        req.on('data',function (data) {
            console.log("服务端接收到数据：",data.toString());
            res.write('确认数据-->'+data);
        });

        req.on('end',function () {
            res.end();
        })
    }
})