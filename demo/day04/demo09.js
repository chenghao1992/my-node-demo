var mongo=require('mongodb');
var host='localhost';
var port=27017;
var server=new mongo.Server(host,port,{auto_reconnect:true});
var db=new mongo.Db('testDataBase',server,{safe:true});
db.open(function (err,db) {
    if(err)throw err;
    else {
        db.collection('test',function (err,collection) {
            if(err)throw err;
            else {
                collection.find({}).toArray(function (mongoError,docs) {
                    console.log('删除前数据：')
                    console.log(docs);
                })
                collection.remove({username:'xys'},function (err,result) {
                    if(err)throw err;
                    else {
                        collection.find({}).toArray(function (mongoError,docs) {
                            console.log('删除后数据：')
                            console.log(docs);
                            db.close();
                        })
                    }
                })
            }
        })
    }
})