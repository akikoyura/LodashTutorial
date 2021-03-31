const _ = require('lodash');

let words = ['sky', 'forest', 'wood', 'sky', 'rock', 'cloud', 'sky', 'forest', 'rock', 'sky'];

let tally = _.reduce(words, (total, next) => {
    total[next] = (total[next] || 0) + 1;
    return total;
}, {})

/*
--> {} : accumulator
 */

console.log(tally);
