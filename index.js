const express = require('express');
// const hb = require ('express-handlebars');
const app = express();
const compression = require('compression');
const bodyParser = require('body-parser');
var csurf = require('csurf');
const csrfSecurity = csurf();
// var api = require('./api');
// var request = require('request');
// var secrets= require('./secrets.json');
var db = require('./config/db');


app.use(compression());
if (process.env.NODE_ENV != 'production') {
    app.use('/bundle.js', require('http-proxy-middleware')({
        target: 'http://localhost:8081/'
    }));
}
// app.use(cookieSession({
//     secret: 'my super secret',
//     maxAge: 1000 * 60 * 60 * 24 * 14
// }));
// app.use(cookieParser());

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(require("cookie-session")({
    secret: process.env.COOKIE_SESSION_KEY ||
            "mySecret",
    maxAge: 1000 * 60 * 60 * 24,
}));

// app.engine('handlebars', hb());
// app.set('view engine', 'handlebars');
app.use(express.static('./public'));
app.use(csurf());
app.use(function(req, res, next){
    res.cookie('mytoken', req.csrfToken());
    next();
});




// var client_id = secrets.client_id; // Your client id
// var client_secret = secrets.client_secret; // Your secret
// var redirect_uri = 'http://localhost:8080/callback'; // Your redirect uri
// // var stateKey = 'spotify_auth_state';
// var querystring = require('querystring');
// var scope = 'user-read-private user-read-email playlist-read-private user-read-recently-played';

// var generateRandomString = function(length) {
//     var text = '';
//     var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//
//     for (var i = 0; i < length; i++) {
//         text += possible.charAt(Math.floor(Math.random() * possible.length));
//     }
//     return text;
// };

// app.get('/login', function(req, res) {
//
//     // var state = generateRandomString(16);
//     // res.cookie(stateKey, state);
//
//     // your application requests authorization
//     res.redirect('https://accounts.spotify.com/authorize?' +
//     querystring.stringify({
//         response_type: 'code',
//         client_id: client_id,
//         scope: scope,
//         redirect_uri: redirect_uri,
//         state: '34fFs29kd09'
//     }));
// });
// app.get('/callback', function(req, res) {
//
//     // your application requests refresh and access tokens
//     // after checking the state parameter
//     console.log(req);
//
//     var code = req.query.code || null;
//     var state = req.query.state || null;
//     // var storedState = req.cookies ? req.cookies[stateKey] : null;
//     if (state === null ) {
//         res.redirect('/#' +
//       querystring.stringify({
//           error: 'state_mismatch'
//       }));
//     } else {
//         // res.clearCookie(stateKey);
//         var authOptions = {
//             url: 'https://accounts.spotify.com/api/token',
//             form: {
//                 code: code,
//                 redirect_uri: redirect_uri,
//                 grant_type: 'authorization_code'
//             },
//             headers: {
//                 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
//             },
//             json: true
//         };
//
//         request.post(authOptions, function(error, response, body) {
//             if (!error && response.statusCode === 200) {
//
//                 var access_token = body.access_token,
//                     refresh_token = body.refresh_token;
//
//                 var options = {
//                     url: 'https://api.spotify.com/v1/me',
//                     headers: { 'Authorization': 'Bearer ' + access_token },
//                     json: true
//                 };
//
//                 // use the access token to access the Spotify Web API
//                 request.get(options, function(error, response, body) {
//                     console.log(body);
//                 });
//
//                 // we can also pass the token to the browser to make requests from there
//                 res.redirect('/#' +
//           querystring.stringify({
//               access_token: access_token,
//               refresh_token: refresh_token
//           }));
//             } else {
//                 res.redirect('/#' +
//           querystring.stringify({
//               error: 'invalid_token'
//           }));
//             }
//         });
//     }
// });
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});


app.get('/cm', csrfSecurity, (req, res)=>{

    res.render('postlinks', {
        layout: 'main',
        csrfToken: req.csrfToken()
    });

});

app.post('/post-links', csrfSecurity, function(req, res){
    console.log('hello',req.body);
    db.postLink(req.body.title, req.body.description, req.body.link);
    res.redirect('/');

});
app.post('/upload-posts', csrfSecurity, function(req, res){
    // console.log('hello',req.body);
    db.uploadPost(req.body.title, req.body.description);
    res.redirect('/');

});

app.get('/get-links', (req,res)=>{
    db.getLinks().then((result)=>{
        res.json(result);
    });
});

app.get('/get-posts', (req,res)=>{
    db.getPosts().then((result)=>{
        res.json(result);
    });
});


app.get('*', function(req, res){
    res.sendFile(__dirname + '/index.html');
});



app.listen(process.env.PORT || 8080);
