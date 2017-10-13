var http=require("http");
var server=http.createServer(function (req,res) {
    if(req.url!=='/favicon.ico'){
        // var allowOrigins=['http://localhost:63343','http://localhost:8885'];
        res.setHeader('Content-Type','text/plain');
        res.setHeader('Access-Control-Allow-Origin','http://localhost:63343');
        res.write('{"name":"ch","age":23}');
        console.log(res.getHeader('Access-Control-Allow-Origin'))
    }
    res.end()
}).listen(1337,'localhost');