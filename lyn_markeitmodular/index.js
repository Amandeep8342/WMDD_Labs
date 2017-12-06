const filterFn= require('./lab6.js')
const dir=process.argv[2]
const filterStr=process.argv[3]

filterFn(dir,filterStr,function(err,data){
    if(err){
        return console.error('This is result',err)
    }
    data.forEach(function(a){
        console.log(a)
    })
})