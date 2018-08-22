var utils = require('./utils');

var Billing = function(config) {
  this.config = config;
};


Billing.prototype.getResellerBalance = function(options, callback) {
  utils.modem('api/billing/reseller-balance.json', 'GET', options, this.config, function(err, data) {
    callback(err, data);
  });
};

module.exports = Billing;
