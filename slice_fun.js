const _ = require('lodash');

let students = [
    {name: 'hoang', age: 12},
    {name: 'thu', age: 13},
    {name: 'hoai', age: 14},
    {name: 'thao', age: 16}
];

let studentChunk1 = _.slice(students, 2, 6);
console.log(studentChunk1);

let studentChunk2 = _.slice(students, 0, 8);
console.log(studentChunk2);
