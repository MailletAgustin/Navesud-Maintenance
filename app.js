// Express simple app on port 80, ejs and render index on all requests

var express = require('express');
var app = express();
var fs = require('fs');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Redirect all https to http
app.use(function (req, res, next) {
    if (req.headers['x-forwarded-proto'] == 'https') {
        res.redirect('http://' + req.headers.host + req.url);
    } else {
        next();
    }
});

app.get('*', function (req, res) {
    res.render('index');
}
);

https = require("https").createServer({
    key: fs.readFileSync('/etc/letsencrypt/live/navesud.com.ar/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/navesud.com.ar/cert.pem'),
    ca: fs.readFileSync('/etc/letsencrypt/live/navesud.com.ar/chain.pem'),
    rejectUnauthorized: false,
},
    app).listen(443);
