var fs = require('fs');
var me = JSON.parse(fs.readFileSync('../../Me/strava/me.json'));
var synclet = require('./' + process.argv[2]);

synclet.sync({auth:me.auth, config: me.config}, function(err, resp) {
  console.error("DEBUG: err", err);
  console.error("DEBUG: resp", resp);
});