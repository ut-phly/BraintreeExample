'use strict';

var braintree = require('braintree');
var environment, gateway;

require('dotenv').config();

gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    // Use your own credentials from the sandbox Control Panel here
    merchantId: '98qqx5ndq89tcb6q',
    publicKey: 'r497tfpzm3nq7tdy',
    privateKey: 'b7f5a6ec854487c53eba59dc5817b555'
});

module.exports = gateway;
