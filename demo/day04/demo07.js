var mongo=require('mongodb');
var db=new mongo.Db('testDataBase',new mongo.Server('localhost',27017,{auto_reconnection:true}),{safe:true});
db.open(function (err,db) {
    db.collection('test',function (err,collection) {
        if(err)throw err;
        else {
            collection.update({},{$set:{username:'update1',age:100}},{multi:true},function (err,result) {
                if(err)throw err;
                else {
                    console.log(result);
                    collection.find({}).toArray(function (err,docs) {
                        if(err)throw err;
                        else {
                            console.log("更新后的数据：",docs);
                            db.close();
                        }
                    })
                }
            })
        }
    })
})