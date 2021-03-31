const _ = require('lodash');

let vals = [1, 2, 'good', [1, 2], {name: 'Peter', age: 32}];

vals.forEach((e) => {
    if (_.isNumber(e)) {
        console.log(`${e} is Number`);
    }
    if (_.isString(e)) {
        console.log(JSON.stringify(e) + 'is String');
    }
    if (_.isArray(e)) {
        console.log(JSON.stringify(e) + 'is Array');
    }
    if (_.isObject(e)) {
        console.log(JSON.stringify(e) + 'is Object');
    }
});
