var mongo=require('mongodb');
var server=new mongo.Server('localhost',27017,{auto_reconnect:true});
var db=new mongo.Db('testDataBase',server,{safe:true})
db.open(function (err,db) {
    if(err)throw err;
    else {
        console.log('成功连接数据库')
        db.collection('test',function (err,collection) {
            collection.insert({username:'xys',age:23},function (err,docs) {})
            collection.insert({username:'程浩',age:25},function (err,docs) {
                console.log(docs)
                db.close();
            })
        })
    }
});
db.on('close',function (err,db) {
    if(err)throw err;
    else {
        console.log('成功关闭数据库');
    }
})

console.log(server)