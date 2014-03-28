var utils = require('./utils');

var Contacts = function(config) {
  this.config = config;
};

Contacts.prototype.addContact = function (options, callback) {
  utils.modem('/api/contacts/add.json', 'POST', options, this.config, function(err, data) {
    callback(err, data);
  });
};

Contacts.prototype.getContact = function (options, callback) {
  utils.modem('/api/contacts/details.json', 'GET', options, this.config, function(err, data) {
    callback(err, data);
  });
};
  
module.exports = Contacts;
