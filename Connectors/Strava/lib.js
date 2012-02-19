var strava = require('strava-js');

var auth;

exports.init = function(_auth) {
  strava.init(_auth);
  auth = _auth;
}

exports.getRidesWithDetails = strava.getRidesWithDetails;