const _ = require('lodash');

let nums = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(_.nth(nums, 3)); /* --> it will print 4 because index of 0  */
console.log(_.nth(nums, -3)); /* --> it will print 5 because of minus sign*/
