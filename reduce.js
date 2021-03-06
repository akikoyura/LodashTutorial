const _ = require('lodash');

let nums = [4, 5, 3, 2, 1, 7, 6, 8, 9];

let sum = _.reduce(nums, (total, next) => {
    return total + next;
});

console.log(sum);

let colour = ["red", "green", "white", "blue", "black"];
let res = _.reduceRight(colour, (next, total) => {
    return `${total} - ${next}`;
});

console.log(res);
