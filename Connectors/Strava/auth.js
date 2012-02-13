var strava = require('strava-js');

module.exports = {
    handler : function (host, apiKeys, done, req, res) {
        var method = req.method.toUpperCase();
        if(method === 'GET') {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write("<html><form method='POST'>");
            res.write("Email: <input name='email'>");
            res.write("Password: <input name='password' type='password'>");
            res.write("<input type='submit'>");
            res.write("</form></html>");
            res.end();
        } else if(method === 'POST') {
            var email = req.body.email;
            var password = req.body.password;
            strava.getToken(email, password, done);
        }
    }
}