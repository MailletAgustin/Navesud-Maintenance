// Express simple app on port 80, ejs and render index on all requests

var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('*', function(req, res) {
    res.render('index');
    }
);

app.listen(80, function() {
    console.log('Mantenimiento en curso');
});