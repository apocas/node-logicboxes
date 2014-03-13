var utils = require('./utils');

module.exports = {

  getCustomerbyID: function (options, callback) {
    utils.modem('/api/customers/details-by-id.json', 'GET', options, this.config, function(err, data) {
      callback(err, data);
    });
  },

  getCustomerbyUsername: function (options, callback) {
    utils.modem('/api/customers/details.json', 'GET', options, this.config, function(err, data) {
      callback(err, data);
    });
  },

  addCustomer: function (options, callback) {
    utils.modem('/api/customers/signup.json', 'POST', options, this.config, function(err, data) {
      callback(err, data);
    });
  }
  
};
