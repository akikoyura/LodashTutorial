const _ = require('lodash');

let nums = [4, -5, 3, 2, -1, 7, -6, 8, 9];
let [nums2, nums3] = _.partition(nums, (e) => {
    return e < 0;
});

console.log(nums2);
console.log(nums3);
