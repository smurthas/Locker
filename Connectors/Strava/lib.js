var strava = require('strava-js');

var auth;

exports.init = function(_auth) {
  strava.init(_auth);
  auth = _auth;
}

exports.getRides = function(params, callback) {
  strava.getRides(params, callback);
}