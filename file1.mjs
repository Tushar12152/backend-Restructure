// const as = require('./file2');
import {a,add,b} from './file2.mjs'
// const {a:a3,b:b3,add:add3}= require('./file3')
import {a as a3, b as b3, add as add3} from './file3.mjs'




console.log(b,a)
console.log('add=', add(2,5))

console.log(a3,b3, add(5,5,5))