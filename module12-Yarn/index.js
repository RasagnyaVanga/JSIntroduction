const use_req = require('lodash');
const arr=[1,2,3,4,5];
const chunked = use_req.chunk(arr,2);
console.log(arr);
console.log(chunked);