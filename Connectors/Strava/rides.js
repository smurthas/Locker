/*
*
* Copyright (C) 2011, The Locker Project
* All rights reserved.
*
* Please see the LICENSE file for more information.
*
*/

var strava = require('./lib.js');

exports.sync = function(processInfo, callback) {
  strava.init(processInfo.auth);
  var connectorConfig = processInfo.config || {};
  var ridesConfig = connectorConfig.rides || {startId: 0, newest: 0, offset: 0};
  getRides(ridesConfig, function (err, rides) {
    if (err) {
      console.error(err);
      return callback(err, rides);
    }
    delete connectorConfig.nextRun;
    if (ridesConfig.offset !== 0) connectorConfig.nextRun = -1;
    connectorConfig.rides = ridesConfig;
    callback(undefined, {data: {ride: rides}, config: connectorConfig});
  });
};

function getRides(config, callback) {
  strava.getRides({offset: config.offset, startId: config.startId}, function(err, rides, resp) {
    if (err || resp.statusCode !== 200) return callback(err, rides);
    // none returned, all done for now
    if (!rides || rides.length === 0) {
      config.startId = config.newest;
      config.offset = 0;
    } else {
      for(var i in rides) if (rides[i].id > config.newest) config.newest = rides[i].id;
      config.offset += rides.length;
    }
    callback(undefined, rides);
  });
}
