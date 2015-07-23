var fs = require('fs');
var ejs = require('ejs');
var keys = require('./keys.js');

var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill(keys.mandrill);

var emailTemplateEJS = fs.readFileSync('email_template.ejs','utf-8');

function personalizeEmail(friend, posts){
	var values = {
		"firstName": friend.firstName, 
		"numMonthsSinceContact": friend.numMonthsSinceContact,
		"latestPosts": posts
	};
	var customizedTemplate = ejs.render(emailTemplateEJS, values);
	sendEmail(
		friend.firstName+" "+friend.lastName,
		friend.emailAddress,
		"Hey "+friend.firstName+"! It's been a while and I have exciting news :D",
		customizedTemplate
		);
}

function sendEmail(to_name, to_email, subject, message_html){
    var message = {
        "html": message_html,
        "subject": subject,
        "from_email": "cristina.colon@gmail.com",
        "from_name": "Cristina Colón",
        "to": [{
                "email": to_email,
                "name": to_name
            }],
        "important": false,
        "track_opens": true,    
        "auto_html": false,
        "preserve_recipients": true,
        "merge": false,
        "tags": [
            "Fullstack_Tumblrmailer_Workshop"
        ]    
    };
    var async = false;
    var ip_pool = "Main Pool";
    mandrill_client.messages.send({"message": message, "async": async, "ip_pool": ip_pool}, function(result) {
    }, function(e) {
        console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
    });
 }

module.exports.personalizeEmail = personalizeEmail;