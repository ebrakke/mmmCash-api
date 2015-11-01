var express = require('express');
var envelope = require('../middlewares/envelope');
var validate = require('../middlewares/validate');
var authorize = require('../middlewares/authorize');
var User = require('../services/user');
var user = express.Router();

user.get('/:id', function(req, res, next) {
    var id = req.params.id;
    var stubbedData = {
        name : 'Bird Person',
        email : 'thebeaconislit@cawcawmotherfucker.com',
        userID : '00000002',
        phoneNum : 2222222222,
        accepting : false,
        amount : 0,
        credit : 10,
        location : {
            latitude : 43902,
            longitude : 2039
        }
    }; /* HERE */
    res.locals.data = stubbedData;
    next();
}, envelope);

user.post('/', validate.user, function(req, res, next) {
    var user = req.body;
    var stubbedData = {
        name : 'Rick Sanchez',
        email : 'wubbalubbadubdub@earth.com',
        userID : '00000001',
        phoneNum : 1111111111,
        accepting : true,
        amount : 110,
        credit : 20,
        location : {
            latitude: 902,
            longitude: 339
        }
    }; /* HERE */
    res.locals.data = stubbedData;
    next();
}, envelope);

user.post('/auth', function(req, res, next) {
    var userData = req.body;
    var stubbedData = {message : 'success'}; /* HERE */
    res.locals.data = stubbedData;
    next();
}, envelope);

user.post('/:id/online', authorize.auth, function(req, res, next) {
    var amount = req.body.amount;
    var user = res.locals.user;
    var stubbedData = {message : 'success'}; /* HERE */
    res.locals.data = stubbedData;
    next();
}, envelope);

user.post('/:id/offline', authorize.auth, function(req, res, next) {
    var stubbedData = {message : 'success'}; /* HERE */
    res.locals.data = stubbedData;
    next();
}, envelope);

module.exports = user;