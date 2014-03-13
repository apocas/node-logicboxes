var utils = require('./utils');

module.exports = {

  move: function (options, callback) {
    utils.modem('/api/products/move.json', 'POST', options, this.config, function(err, data) {
      callback(err, data);
    });
  }
  
};
