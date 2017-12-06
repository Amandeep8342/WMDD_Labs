const http= require('http')
const bl= require('bl')
const results=[]
let count=0


function printr(){
    let i;
    for(i=0;i<3;i++){
        console.log(results[i])
    }
}

function httpGet (ind){
    http.get(process.argv[2+ind], function(res){
        res.pipe(bl(function(err,data){
            if(error){
                return console.log(error)
            }
            result[ind]=data.toString()
            count++
            if(count==3)
            {
                printr()
            }
        }))
    })
}
for(let i=0;i<3;i++){
httpGet(i)}