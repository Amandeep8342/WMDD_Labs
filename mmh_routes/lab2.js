let h=require("h")
let ser= new h.ser()
ser.connection({
    host:'localhost'
    port:Number(process.argv[2]|| 8080)
    
})
ser.route({
    path:'/{name}', method:'GET', handler:'serverCallback'
})
function serverCallback(request,res){
    res('Hello'+req.a.name)
}
server.start(function(){
    console.log('Server running at:', server.info.uri)
})