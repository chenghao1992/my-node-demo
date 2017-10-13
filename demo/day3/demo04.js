var net = require('net');
var file=require('fs').createWriteStream('./message.txt');
var server = net.createServer();
server.on('connection',function (socket) {
    socket.setEncoding('utf8');
    socket.pipe(file,{end:false});
    socket.on('end',function () {
        file.end('再见')
    })
})
server.listen(8431,'localhost');