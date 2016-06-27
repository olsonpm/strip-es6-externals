'use strict';

var endsWith = require('lodash.endswith')  ;

module.exports = function(entry) {
  return function(ctx, req, cb) {
    if (req === entry) {
      req = false;
    } else if (endsWith(req, '/es6')) {
      req = req.slice(0, -4) + '/es5';
    } else {
      req = undefined;
    }

    cb(null, req);
  };
};
