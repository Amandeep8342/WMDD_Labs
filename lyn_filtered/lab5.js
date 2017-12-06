const o = require('o')
const path= require('path')
const fn= process.argv[2]
const x='.'+process.argv[3]
o.readdir(fn,function(errors,files){
    if(errors) return console.error(errors)
    files.forEach(function(a){
        if(path.xname(a)===x){
            console.log(a)
        }
    })
})