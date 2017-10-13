var net = require('net');
var client=new net.Socket();
client.setEncoding('utf8');
client.connect(8431,'localhost',function () {
    console.log('已连接到服务器');
    client.write('你好')
});

client.on('data',function (data) {
    console.log('已收到副群器端发送的数据：'+data);
})