var utils = require('./utils');

module.exports = {

  addContact: function (options, callback) {
    utils.modem('/api/contacts/add.json', 'POST', options, this.config, function(err, data) {
      callback(err, data);
    });
  },

  getContact: function (options, callback) {
    utils.modem('/api/contacts/details.json', 'GET', options, this.config, function(err, data) {
      callback(err, data);
    });
  }
  
};
