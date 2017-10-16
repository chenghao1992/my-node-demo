var mongo=require('mongodb');
var server=new mongo.Server('localhost',27017,{auto_reconnect:true});
var db=new mongo.Db('testDataBase',server,{safe:true})
db.open(function (err,db) {
    if(err)throw err;
    else {
        console.log('成功连接数据库')
        db.collection('test',function (err,collection) {
            if(err)throw err;
            collection.find({}).toArray(function (err,docs){
                console.log("查询到的所有数据：",docs);
            })
            collection.find({username:'程浩'}).toArray(function (err,docs){
                console.log("查询到的数据：",docs);
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