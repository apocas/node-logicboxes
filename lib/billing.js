var utils = require('./utils');

module.exports = {

  getResellerBalance: function (options, callback) {
    utils.modem('/api/billing/reseller-balance.json', 'GET', options, this.config, function(err, data) {
      callback(err, data);
    });
  }
  
};
