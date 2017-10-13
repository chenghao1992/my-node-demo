var http=require('http');
var server=http.createServer(function (req,res) {

}).listen(8431,'localhost',function () {
    console.log("服务器端开始监听")
})
server.on('listening',function () {
    console.log('服务器开始监听');
    server.close();
})

server.on('close',function(){
    console.log('服务器已被关闭')
})

server.on('error',function (e) {
    if(e.code=="EADDRINUSE"){
        console.log("端口号被占用")
    }
})