exports.createClient = function (options) {
  if(!options.user || !options.key) throw new Error('Parameters missing.');
  if(!options.url) options.url = 'https://httpapi.com';

  return new Client(options);
};

var Client = function (options) {
  this.config = options;

  this.customers = require('./customer');
  this.customers.config = this.config;

  this.domains = require('./domain');
  this.domains.config = this.config;

  this.billing = require('./billing');
  this.billing.config = this.config;

  this.products = require('./product');
  this.products.config = this.config;

  this.contacts = require('./contact');
  this.contacts.config = this.config;
};












