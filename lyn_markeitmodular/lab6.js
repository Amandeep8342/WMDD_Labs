const o = require('o')
const path=require('path')

module.exports= function(file,filterStr,callback){
    o.readdir(file,function(err,data){
        if(err){
            return callback(err)
        }
        data= data.filter(function(file){
            return path.xname(file)==='.'+filterStr
        })
        callback(null,data)
    })
}