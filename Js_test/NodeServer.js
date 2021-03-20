//METHOD-1 : EXPORTING AND IMPORTING 
const sasNums = require("./addNums");

const sum = sasNums(2,2);
console.log(sum);


/* //METHOD-2 : EXPORTING AND IMPORTING : ES6
import {sasNums} from './addNums.mjs'

const sum = sasNums(2,3);
console.log(sum);


//METHOD-3 : EXPORTING AND IMPORTING : ES6-package.json
import {sasNums} from './addNums.js'

const sum = sasNums(2,10);
console.log(sum); */
