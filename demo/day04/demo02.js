var http= require('http');
var fs=require('fs');
var server=http.createServer(function (req,res) {
    if(req.url!=="/favicon.ico"){
        var out =fs.createWriteStream('./request.log');
        out.write('客户端请求方法：'+req.method+'\r\n');
        out.write('客户端请求url：'+req.url+'\r\n');
        out.write('客户端请求头对象：'+JSON.stringify(req.headers)+'\r\n');
        out.write('客户端请求所用http版本：'+req.httpVersion+'\r\n');
    }
    res.end();
}).listen(1337,"localhost");