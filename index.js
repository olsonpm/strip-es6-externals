'use strict';

var endsWith = require('lodash.endswith')  ;

module.exports = function(ctx, req, cb) {
  this.cacheable && this.cacheable();
  console.log('this.resourcePath: ' + this.resourcePath);

  if (endsWith(req, '/es6')) {
    req = req.slice(0, -4);
  }

  cb(null, req);
};

module.exports.raw = true;
