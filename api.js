var request = require('request-promise');


exports.getSpotifyAuthCode = function(){
    var scopes = 'user-read-private user-read-email playlist-read-private';
    return request.get('https://accounts.spotify.com/authorize' +
  '?response_type=code' +
  '&client_id=' + '31cc8672a5c14cf394b42ed47dd5347d' +
  (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
  '&redirect_uri=' + encodeURIComponent('https://localhost:8080/try')
        // data: {
        //     "redirect_uri":  'localhost:8080/about',
        //     'client_id':'31cc8672a5c14cf394b42ed47dd5347d',
        // },
    ).then((results) => {
        console.log('results in api call: ', results);
        return JSON.stringify(results);
    }).catch((err) => {
        return err;
    });
};

exports.getSpotifyToken = function(code){

    return request.post('https://accounts.spotify.com/api/token', {
        data: {
            "grant_type":    "authorization_code",
            "code":          code,
            "redirect_uri":  'localhost:8080/about',
            "client_secret": '2a50578b0db3437ca26c0668db1a35d5',
            "client_id":     '31cc8672a5c14cf394b42ed47dd5347d',
        },
    });
};
