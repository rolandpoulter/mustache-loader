'use strict';

var Hogan = require('hogan.js');

module.exports = function(source) {
    if (this.cacheable) {
        this.cacheable();
    }

    return 'module.exports = ' + Hogan.compile(source).toString() + ';';
};
