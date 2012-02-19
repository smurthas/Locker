var strava = require('strava-js');

module.exports.handler = function (host, apiKeys, done, req, res) {
  var method = req.method.toUpperCase();
  if(method === 'GET') showForm(res);
  else if(method === 'POST') doAuth(req, res, done);
}

function showForm(res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<html><form method='POST'>");
  res.write("Email: <input name='email'>");
  res.write("Password: <input name='password' type='password'>");
  res.write("<input type='submit'>");
  res.write("</form></html>");
  res.end();
}

function doAuth(req, res, done) {
  var email = req.body.email;
  var password = req.body.password;
  strava.getToken(email, password, function(err, resp, auth) {
    if (err || resp.statusCode !== 200) {
      console.error("error authenticating strava", err, resp.statusCode);
      return showForm(res);
    }
    return done(err, auth);
  });
}