var utils = require('./utils');

var Domains = function(config) {
  this.config = config;
};

Domains.prototype.modifyNS = function (options, callback) {
  utils.modem('/api/domains/modify-ns.json', 'POST', options, this.config, function(err, data) {
    callback(err, data);
  });
};

Domains.prototype.isAvailable = function (options, callback) {
  utils.modem('/api/domains/available.json', 'GET', options, this.config, function(err, data) {
    callback(err, data);
  });
};

Domains.prototype.getInfo = function (options, callback) {
  utils.modem('/api/domains/details.json', 'GET', options, this.config, function(err, data) {
    callback(err, data);
  });
};

Domains.prototype.getInfobyName = function (options, callback) {
  utils.modem('/api/domains/details-by-name.json', 'GET', options, this.config, function(err, data) {
    callback(err, data);
  });
};

Domains.prototype.getOrderId = function (options, callback) {
  utils.modem('/api/domains/orderid.json', 'GET', options, this.config, function(err, data) {
    callback(err, data);
  });
};

Domains.prototype.getDomainLocks = function (options, callback) {
  utils.modem('/api/domains/locks.json', 'GET', options, this.config, function(err, data) {
    callback(err, data);
  });
};

Domains.prototype.modifyAuth = function (options, callback) {
  utils.modem('/api/domains/modify-auth-code.json', 'POST', options, this.config, function(err, data) {
    callback(err, data);
  });
};

Domains.prototype.theftProtection = function (d, options, callback) {
  utils.modem('/api/domains/' + d + '-theft-protection.json', 'POST', options, this.config, function(err, data) {
    callback(err, data);
  });
};

Domains.prototype.setPrivacyProtection = function (options, callback) {
  utils.modem('/api/domains/modify-privacy-protection.json', 'POST', options, this.config, function(err, data) {
    callback(err, data);
  });
};

Domains.prototype.renew = function (options, callback) {
  utils.modem('/api/domains/renew.json', 'POST', options, this.config, function(err, data) {
    callback(err, data);
  });
};

Domains.prototype.register = function (options, callback) {
  utils.modem('/api/domains/register.json', 'POST', options, this.config, function(err, data) {
    callback(err, data);
  });
};

Domains.prototype.transfer = function (options, callback) {
  utils.modem('/api/domains/transfer.json', 'POST', options, this.config, function(err, data) {
    callback(err, data);
  });
};

Domains.prototype.setContact = function (options, callback) {
  utils.modem('/api/domains/modify-contact.json', 'POST', options, this.config, function(err, data) {
    callback(err, data);
  });
};

Domains.prototype.addCns = function (options, callback) {
  utils.modem('/api/domains/add-cns.json', 'POST', options, this.config, function(err, data) {
    callback(err, data);
  });
};

Domains.prototype.modifyCnsName = function (options, callback) {
  utils.modem('/api/domains/modify-cns-name.json', 'POST', options, this.config, function(err, data) {
    callback(err, data);
  });
};

Domains.prototype.modifyCnsIp = function (options, callback) {
  utils.modem('/api/domains/modify-cns-ip.json', 'POST', options, this.config, function(err, data) {
    callback(err, data);
  });
};

Domains.prototype.deleteCns = function (options, callback) {
  utils.modem('/api/domains/delete-cns-ip.json', 'POST', options, this.config, function(err, data) {
    callback(err, data);
  });
};

module.exports = Domains;
