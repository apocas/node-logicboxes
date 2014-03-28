var utils = require('./utils');

var Customers = function(config) {
  this.config = config;
};

Customers.prototype.getCustomerbyID = function (options, callback) {
  utils.modem('/api/customers/details-by-id.json', 'GET', options, this.config, function(err, data) {
    callback(err, data);
  });
};

Customers.prototype.getCustomerbyUsername = function (options, callback) {
  utils.modem('/api/customers/details.json', 'GET', options, this.config, function(err, data) {
    callback(err, data);
  });
};

Customers.prototype.addCustomer = function (options, callback) {
  utils.modem('/api/customers/signup.json', 'POST', options, this.config, function(err, data) {
    callback(err, data);
  });
};
  
module.exports = Customers;
