'use strict';
const patterns=require('../patterns');
const XRegExp = require('xregexp');

let matchPattern = (str, cb) => {
    let getResult = patterns.find((item) => {
        return XRegExp.test(str, XRegExp(item.pattern, "ig"));
    });
    if (getResult) {
        return cb({
            intent: getResult.intent
        });
    } else {
        return cb({
            intent: 'Irrelevant',
        });
    }
};
module.exports=matchPattern;