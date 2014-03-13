var utils = require('./utils');

module.exports = {

  modifyNS: function (options, callback) {
    utils.modem('/api/domains/modify-ns.json', 'POST', options, this.config, function(err, data) {
      callback(err, data);
    });
  },

  getInfo: function (options, callback) {
    utils.modem('/api/domains/details.json', 'GET', options, this.config, function(err, data) {
      callback(err, data);
    });
  },
  
  getInfobyName: function (options, callback) {
    utils.modem('/api/domains/details-by-name.json', 'GET', options, this.config, function(err, data) {
      callback(err, data);
    });
  },

  getOrderId: function (options, callback) {
    utils.modem('/api/domains/orderid.json', 'GET', options, this.config, function(err, data) {
      callback(err, data);
    });
  },

  getDomainLocks: function (options, callback) {
    utils.modem('/api/domains/locks.json', 'GET', options, this.config, function(err, data) {
      callback(err, data);
    });
  },

  modifyAuth: function (options, callback) {
    utils.modem('/api/domains/modify-auth-code.json', 'POST', options, this.config, function(err, data) {
      callback(err, data);
    });
  },

  theftProtection: function ($d, $options, callback) {
    utils.modem('/api/domains/' + $d + '-theft-protection.json', 'POST', options, this.config, function(err, data) {
      callback(err, data);
    });
  },

  setPrivacyProtection: function (options, callback) {
    utils.modem('/api/domains/modify-privacy-protection.json', 'POST', options, this.config, function(err, data) {
      callback(err, data);
    });
  },

  renew: function (options, callback) {
    utils.modem('/api/domains/renew.json', 'POST', options, this.config, function(err, data) {
      callback(err, data);
    });
  },

  register: function (options, callback) {
    utils.modem('/api/domains/register.json', 'POST', options, this.config, function(err, data) {
      callback(err, data);
    });
  },

  transfer: function (options, callback) {
    utils.modem('/api/domains/transfer.json', 'POST', options, this.config, function(err, data) {
      callback(err, data);
    });
  },

  setContact: function (options, callback) {
    utils.modem('/api/domains/modify-contact.json', 'POST', options, this.config, function(err, data) {
      callback(err, data);
    });
  }

};
