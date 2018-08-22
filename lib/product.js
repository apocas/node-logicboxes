var utils = require('./utils');

var Products = function(config) {
  this.config = config;
};

Products.prototype.move = function (options, callback) {
  utils.modem('api/products/move.json', 'POST', options, this.config, function(err, data) {
    callback(err, data);
  });
};

module.exports = Products;
