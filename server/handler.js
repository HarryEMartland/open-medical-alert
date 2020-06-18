const fetch = require('node-fetch');
const FormData = require('form-data');

const DATA = require(process.env.DATA_FILE_LOCATION);

const DATA_RESPONSE = {
    statusCode: 200,
    headers: {
        'Access-Control-Allow-Origin': process.env.CORS_HOST,
        'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(DATA),
};

const INVALID_PASSWORD_RESPONSE = {
    statusCode: 401,
    body: JSON.stringify({message: "Invalid password"})
}

const CAPTCHA_FAIL_RESPONSE = {
    statusCode: 403,
    body: JSON.stringify({message: "Invalid CAPTCHA"})
}

module.exports.hello = async event => {

    const requestBody = JSON.parse(event.body);
    const passedCaptcha = await checkCaptcha(requestBody.captcha)

    if (!passedCaptcha) {
        return CAPTCHA_FAIL_RESPONSE
    }

    if (requestBody.password !== process.env.PASSWORD) {
        return INVALID_PASSWORD_RESPONSE;
    }

    return DATA_RESPONSE;
};

function checkCaptcha(captcha) {

    const form = new FormData();
    form.append('secret', process.env.CAPTCHA_SECRET_KEY);
    form.append('response', captcha || '');

    return fetch('https://www.google.com/recaptcha/api/siteverify',
        {method: 'POST', body: form})
        .then(r => r.json())
        .then(r => r.success);
}
