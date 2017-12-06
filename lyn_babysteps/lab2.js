var total=0;

var i=2;

while(process.argv[i])
{
    
    total+=Number(process.argv[i]);
    i++;
    
}
console.log(total);