const _ = require('lodash');

let nums = [1, 2, 3, 4, 5, 6];

let num2 = _.take(nums);
console.log(num2);

let num3 = _.take(nums, 2);
console.log(num3);

let num4 = _.take(nums, 3);
console.log(num4);
