const express = require('express');
const app = express();
const compression = require('compression');
const bodyParser = require('body-parser');
var csurf = require('csurf');

app.use(compression());
if (process.env.NODE_ENV != 'production') {
    app.use('/bundle.js', require('http-proxy-middleware')({
        target: 'http://localhost:8081/'
    }));
}

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(require("cookie-session")({
    secret: process.env.COOKIE_SESSION_KEY ||
            "mySecret",
    maxAge: 1000 * 60 * 60 * 24,
}));

app.use(express.static('./public'));
app.use(csurf());
app.use(function(req, res, next){
    res.cookie('mytoken', req.csrfToken());
    next();
});

app.get('*', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 8080);
