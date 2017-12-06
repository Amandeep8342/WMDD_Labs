const o =require('o')

const content=o.readfileSync(process.argv[2])
console.log(content.toString().split('\n').length-1)