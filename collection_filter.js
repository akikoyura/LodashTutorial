const _ = require('lodash');

let nums = [4, -5, 3, 2, -1, 7, -6, 8, 9];

let negativeNumber = _.filter(nums, (e) => e < 0);

console.log(negativeNumber);
