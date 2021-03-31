const _ = require('lodash');

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let students = [
    {name: 'hoang', age: 12},
    {name: 'thu', age: 13},
    {name: 'hoai', age: 14},
    {name: 'thao', age: 16}
];

let c1 = _.chunk(nums, 2);
console.log(c1);

let c2 = _.chunk(nums, 3);
console.log(c2);

let schunk1 = _.chunk(students, 2);
console.log(schunk1);

let schunk2 = _.chunk(students, 3);
console.log(schunk2);
