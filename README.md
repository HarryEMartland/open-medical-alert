## Open Medical Alert

Open medical alert is a way for you to securely share medical information about yourself to first responders.
A simple bracelet can display a link to your site with the password needed to access it.
To protect against a bot brute force attack the site is also protected with a CAPTCHA.

#### Deploying

The front end is designed to be deployed on github pages and the backend using AWS lambda.
Clone this to a **private** repository so not to leak your personal data.

//TODO


#### Running Locally

To run both the front end and server in local mode run `yarn start` in the root directory.
This will configure the front end to talk to a locally running lambda.
The front end will be available at <http://localhost:3000> and the lambda will be at <http://localhost:3001>.