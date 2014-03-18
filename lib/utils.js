var request = require('request');

var utils = exports;


utils.modem = function(uri, method, options, config, callback) {

  function makeRequest() {

    var serverOptions = {
      uri: uri,
      method: method
    };

    if(!options) {
      options = new array();
    }

    options['auth-userid'] = config.user;
    options['api-key'] = config.key;

    if(method == 'POST') {
      //serverOptions.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      serverOptions.body = require('querystring').stringify(options);
    } else {
      serverOptions.uri = serverOptions.uri + '?' + require('querystring').stringify(options);
    }

    //console.log(serverOptions);

    request(serverOptions, function (err, res, body) {
      if(err) return callback(err, undefined);

      var data;
      try {
        data = JSON.parse(body);
      } catch(e) {
        return callback(undefined, body);
      }

      if(data && data.status && data.status == 'ERROR') {
        return callback(data.message);
      } else {
        return callback(undefined, data);
      }

    });
  }

  uri = config.url + '/' + uri;
  makeRequest();
};