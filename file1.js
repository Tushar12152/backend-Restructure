const as = require('./file2');
const {a:a3,b:b3,add:add3}= require('./file3')


const {a,add,b}=as

console.log(b,a)
console.log('add=', add(2,5))

console.log(a3,b3, add(5,5,5))