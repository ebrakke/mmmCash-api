var dbConnector = require('../helper/dbConnector');
var _ = require('lodash');
var q = require('q');
var bcrypt = require('bcryptjs');
var generateToken = require('../helper/utilities').generateToken;
var Auth = function() {
    //this.db = new dbConnector();
};

Auth.prototype.validateAuthToken = function(authToken) {

};

Auth.prototype.createAuth = function(uid, update) {
    var authToken = generateToken();
    return authToken;
};

module.exports = Auth;
