var fs=require('fs');
var watcher=fs.watch('./a.txt');
watcher.on('change',function (event,filename) {
    console.log(event,filename);
})