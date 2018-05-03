var spicedPg = require('spiced-pg');

var dbUrl;

if (process.env.DATABASE_URL) {
  dbUrl = process.env.DATABASE_URL;
} else {
  var userInfo = require('../secrets.json');
  var user = userInfo.username;
  var pass = userInfo.password;
  dbUrl = `postgres:${user}:${pass}psql@localhost:5432/website`;
}
var db = spicedPg(dbUrl);

exports.getLinks = function() {
  return db.query('SELECT title, description, link FROM links order by id desc limit 5;').then((results) => {
    return results.rows;
  });
};

exports.getPosts = function() {
  return db.query('SELECT title, description, link FROM posts order by id desc limit 5;').then((results) => {
    return results.rows;
  });
};
