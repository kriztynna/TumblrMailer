Tumblr Mailer is an app that sends tailored emails to a list of contacts, listing your Tumblr posts from the past week. This Node.js app uses the Tumblr and Mandrill APIs alongside the EJS framework for templating.

To customize this app for your own purposes, you'll need to set up a ```keys.js``` file and a ```friend_list.csv``` file.

# How to format friends_list.csv
Create `friend_list.csv` in the app's directory. Make sure it has all the columns as shown below. The order of the columns doesn't matter. 

```firstName,lastName,numMonthsSinceContact,emailAddress
Cristina,Colon,1,cristina.colon@gmail.com
Barack,Obama,1,president@whitehouse.gov
```
*Leave no blank newlines after the last entry.*

# Get your API keys
Create `keys.js` in the app's directory. Add all the fields shown below and fill them in with your own values. They'll flow through to the other modules as needed.

```
// tumblr keys
var consumer_key = 'YOUR_CONSUMER_KEY';
var consumer_secret = 'YOUR CONSUMER_SECRET';
var token = 'YOUR_TOKEN';
var token_secret = 'YOUR_TOKEN_SECRET';

module.exports.consumer_key = consumer_key;
module.exports.consumer_secret = consumer_secret;
module.exports.token = token;
module.exports.token_secret = token_secret;


// mandrill key
var mandrill = 'jUWP7cIDhM4qc6LdAauwOA'
module.exports.mandrill = mandrill;
```

## To get the Tumblr API keys, 
1. Sign up / log in to Tumblr.
2. Visit https://www.tumblr.com/oauth/apps.
3. Fill out and submit the form.
4. Your submitted application will be displayed along with the consumer key and secret key.
5. Click "Explore API" to find the token and token secret.

## To the get the Mandrill API key,
1. Sign up / log in to Mandrill: https://mandrill.com/signup/
2. At the bottom right of your Settings page (https://mandrillapp.com/settings), click "Add API Key"
3. Your API key will be displayed at the bottom of the page.

# Other housekeeping items
## Add a link to your blog
The `posts.js` file pulls from cortadita.tumblr.com, my own Tumblelog. You'll probably want to change that to point to your own blog.

## Customize the email template
Sign your name in `email_template.ejs` and edit the text to your heart's content.

# Send all the emails!
When you're ready, run the app from your command line by navigating to its directory and entering 
```node tumblr_mailer.js```

That's all there is to it!