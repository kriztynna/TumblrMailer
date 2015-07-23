var keys = require('./keys.js');
var tumblr = require('tumblr.js');
var postGetter = require('./posts.js')

var client = tumblr.createClient({
  consumer_key: keys.consumer_key,
  consumer_secret: keys.consumer_secret,
  token: keys.token,
  token_secret: keys.token_secret
});

client.posts('cortadita.tumblr.com', postGetter.getLatestPosts);