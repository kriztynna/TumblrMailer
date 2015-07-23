var friends = require('./friends.js');
var distribute = require('./distribute.js')

function getLatestPosts (err, blog){
	var currTimestamp = Math.round((new Date).getTime()/1000) // seconds since the epoch
	var posts = blog.posts;
	var postList = [];
	// loop through posts, stopping at the 10th post 
	// or the end of the posts, whichever comes sooner
	for (var i=0;i<posts.length && i<10;i++) {
		var newPost = {
			href: posts[i].short_url,
			date: posts[i].date,
			title: posts[i].title || posts[i].type,
			timestamp: posts[i].timestamp
		};
		// 604800 seconds in 7 days
		if (currTimestamp - newPost.timestamp < 604800){
			postList.push(newPost);			
		}
	}
	composeEmails(postList);
}

function composeEmails(postList) {
	for (var i=0;i<friends.friends.length;i++){
		distribute.personalizeEmail(friends.friends[i],postList);
	}
}

module.exports.getLatestPosts = getLatestPosts;