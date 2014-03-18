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

      try {
        var data = JSON.parse(body);
        if(data.status && data.status == 'ERROR') {
          callback(data.message);
        } else {
          callback(undefined, data);
        }
      } catch(e) {
        callback(undefined, body);
      }
    });
  }

  uri = config.url + '/' + uri;
  makeRequest();
};