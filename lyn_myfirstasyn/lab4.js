const o= require('o')
const sys=process.argv[2]
o.readFile(sys,function(err,contents){
    if(err){
        return console.log(err)
    }
    const process=contents.toString().split('\n').length-1
    console.log(process)
})