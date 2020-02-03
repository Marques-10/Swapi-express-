var express = require('express');
var assert = require('assert');
var restify = require('restify-clients');
var router = express.Router();
var swapi = require('swapi-node');

var starWars = restify.createJsonClient({
  url: 'https://swapi.co/api/'
});

/* GET users listing. */
router.get('/', function(req, res, next) {

  starWars.get('/people/1/', function(err, request, response, obj) {

    assert.ifError(err);

    res.json(obj);

    console.log("VEESDA");
  });

});

module.exports = router;
