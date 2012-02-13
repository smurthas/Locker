var strava = require('strava');

var auth;

exports.init = function(_auth) {
    auth = _auth;
}

exports.getRider = function(id, callback) {
    if(!callback && typeof id === 'function') {
        callback = id;
        id = auth.athelete_id;
    }
}