var spicedPg = require('spiced-pg');

var dbUrl;

if (process.env.DATABASE_URL){
    dbUrl = process.env.DATABASE_URL;
}
else{
    var userInfo = require('../secrets.json');
    var user = userInfo.username;
    var pass = userInfo.password;
    dbUrl = `postgres:${user}:${pass}psql@localhost:5432/website`;
}
var db = spicedPg(dbUrl);


// exports.postLink =function(title, description, link) {
//     return db.query(
//         'INSERT INTO links (title, description, link) VALUES ($1, $2, $3)',
//         [title, description, link]
//     ).then((results) => {
//         return results.rows;
//     });
// };
//
exports.getLinks =function() {
    return db.query(
        'SELECT title, description, link FROM links order by id desc limit 5;'
    ).then((results) => {
        return results.rows;
    });
};

// exports.uploadPost =function(title, description) {
//     return db.query(
//         'INSERT INTO posts (title, description) VALUES ($1, $2)',
//         [title, description]
//     ).then((results) => {
//         return results.rows;
//     });
// };

exports.getPosts =function() {
    return db.query(
        'SELECT title, description, link FROM posts order by id desc limit 5;'
    ).then((results) => {
        return results.rows;
    });
};
