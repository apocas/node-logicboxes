node-logicboxes
===============

## Installation

`npm install logicboxes`

## Usage

``` js
var config = {
  user: 'johndoe',
  key: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzz'
};

var logicboxesClient = logicboxes.createClient(config);
//...
```


## Implemented functions

### Billing

- getResellerBalance: function (options, callback)


### Contact

- addContact: function (options, callback)
- getContact: function (options, callback)
- search: function (options, callback)


### Customer

- getCustomerbyID: function (options, callback)
- getCustomerbyUsername: function (options, callback)
- addCustomer: function (options, callback)


### Domain

- modifyNS: function (options, callback)
- isAvailable: function (options, callback)
- getInfo: function (options, callback)
- getInfobyName: function (options, callback)
- getOrderId: function (options, callback)
- getDomainLocks: function (options, callback)
- modifyAuth: function (options, callback)
- theftProtection: function (p, options, callback)
- setPrivacyProtection: function (options, callback)
- renew: function (options, callback)
- register: function (options, callback)
- transfer: function (options, callback)
- setContact: function (options, callback)
- addCns: function (options, callback)
- modifyCnsName: function (options, callback)
- modifyCnsIp: function (options, callback)
- deleteCns: function (options, callback)


### Product

- move: function (options, callback)


## License

Pedro Dias - [@pedromdias](https://twitter.com/pedromdias)

Licensed under the Apache license, version 2.0 (the "license"); You may not use this file except in compliance with the license. You may obtain a copy of the license at:

http://www.apache.org/licenses/LICENSE-2.0.html

Unless required by applicable law or agreed to in writing, software distributed under the license is distributed on an "as is" basis, without warranties or conditions of any kind, either express or implied. See the license for the specific language governing permissions and limitations under the license.
