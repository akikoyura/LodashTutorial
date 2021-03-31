const _ = require('lodash');

let vals = [-3, 4, 0, 12, 43, 9, -12];

let min = _.min(vals);
console.log(min);

let max = _.max(vals);
console.log(max);

let obs = [{n: 12}, {n: 14}, {n: -4}, {n: -11}];

/* --> minBy key values */
min = _.minBy(obs, 'n');
console.log(min);

/* --> maxBy key values */
max = _.maxBy(obs, 'n');
console.log(max);
