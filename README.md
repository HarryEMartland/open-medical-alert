## Open Medical Alert

Open medical alert is a way for you to securely share medical information about yourself to first responders.
A simple bracelet can display a link to your site with the password needed to access it.
To protect against a bot brute force attack the site is also protected with a CAPTCHA.

Companies such as [MedicAlert](https://www.medicalert.org.uk/) provide bands and host your medical data however they charge a subscription fee.
I believe people should not have to pay for something which may save their lives.
Open Medical Alert (OMA) provides people with the option of hosting their data themselves with no cost.
Medical alert bands can be purchased online and engraved with a link pointing to your deployment of OMA.

#### Example

An example deployment is hosted at <https://harryemartland.github.io/open-medical-alert/>.
The password is `changeme`.

#### Deploying

The front end is designed to be deployed on github pages and the backend using AWS lambda.
Clone this to a **private** repository so not to leak your personal data.

###### Environment Variables
|Name|Example|Description|
|----|-------|-----------|
|AWS_ACCESS_KEY_ID|AKIAIOSFODNN7EXAMPLE||
|AWS_SECRET_ACCESS_KEY|wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY|
|CAPTCHA_SECRET_KEY|6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe|
|REACT_APP_CAPTCHA_SITE_KEY|6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI|
|CORS_HOST|localhost
|PASSWORD|changeme|
|PUBLIC_URL|/open-medical-alert|
|REACT_APP_DATA_URL|HTTP://localhost:3001/dev/hello|
|DEPLOY_REGION|us-west-2|Which region to deploy the lambda to. Defaults to `us-west-2`|


#### Security

As Open Medical Alert is storing and displaying Personal data restrictions should be in place to view it.
When requesting the data a password is required, it is your responsibility to set a strong password.
To prevent a robot brute forcing the password a CAPTCHA is required.
The strictness of the CAPTCHA can be configured in the CAPTCHA admin console.
CORS headers are included on the data API response to stop requests being made from different websites.

> Encrypting data at rest will be included in a future version of OMA.

To deploy the serverless part of the application an AWS user is needed with sufficient permissions.
Keeping to the principal of least privilege, a minimum policy is provided <./deployment-policy.json>.
It is advised to create a new user with this role to be used for deploying.

#### Running Locally

To run both the front end and server in local mode run `yarn start` in the root directory.
This will configure the front end to talk to a locally running lambda.
The front end will be available at <http://localhost:3000> and the lambda will be at <http://localhost:3001>.