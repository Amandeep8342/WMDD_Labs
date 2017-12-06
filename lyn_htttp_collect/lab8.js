const http= require('http')
const a= require('bl')

http.get(process.argv[2], function(res){
    res.pipe(a(function(errors, data){
        if(errors){
            return console.error(errors)
        }
        data=data.toString()
        console.log(data.length)
        console.log(data)
    }))
})