var net=require('net');
var server=net.createServer(function () {
    console.log("客户端与服务器端连接已建立");
});
server.listen(8888,'localhost',function () {
    console.log('服务器开始监听')
})

