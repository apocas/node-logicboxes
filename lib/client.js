var Billing = require('./billing'),
  Domains = require('./domain'),
  Customers = require('./customer'),
  Products = require('./product'),
  Contacts = require('./contact');

exports.createClient = function (options) {
  if(!options.user || !options.key) throw new Error('Parameters missing.');
  if(!options.url) options.url = 'https://httpapi.com';

  return new Client(options);
};

var Client = function (options) {
  this.config = options;

  this.customers = new Customers(this.config);
  this.domains = new Domains(this.config);
  this.billing = new Billing(this.config);
  this.products = new Products(this.config);
  this.contacts = new Contacts(this.config);
};












