var mongo=require('mongodb');
var host="localhost";
var fs=require('fs');
var port=27017;
var server=new mongo.Server(host,port,{auto_reconnect:true})
var db=new mongo.Db('nodeMongo',server,{safe:true})
var docs=[
    {type:'food',price:11},
    {type:'food',price:10},
    {type:'food',price:9},
    {type:'food',price:8},
    {type:'book',price:8}
];
db.open(function (err,db) {
    if(err)throw err;
    else {
        db.collection('goods',function (err,collection) {
            collection.insert(docs,function (err,docs) {
                if(err)throw err;
                else {
                    collection.find({type:'food',price:{$lt:10}}).toArray(function (err,docs) {
                        if(err)throw err;
                        else {
                            var out=fs.createWriteStream('./docs_list.txt');
                            console.log(docs);
                            out.write(JSON.stringify(docs),function (data) {
                                console.log(JSON.stringify(docs))
                            })
                            db.close();
                        }
                    })
                }
            })
        })
    }
})