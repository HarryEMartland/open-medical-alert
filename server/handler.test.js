const nock = require('nock')

const password = "changeme"
const captchaSecret = "fdasfekwelwkdoid"
const captcha = "3klj3lj2j2"
const invalidCaptcha = "1f54we7x5e"

describe('handler', () => {

    let handler;
    let scope;

    beforeAll(() => {

        process.env.PASSWORD = password;
        process.env.CAPTCHA_SECRET_KEY = captchaSecret;
        process.env.CORS_HOST = 'example.com';
        process.env.DATA_FILE_LOCATION = './data.example.json';

        jest.mock('./data.example.json', () => ({
            example: "data"
        }));
        handler = require('./handler')
    })

    beforeEach(() => {
        scope = nock('https://www.google.com')
            .post('/recaptcha/api/siteverify', /form-data; name="response"[^]*3klj3lj2j2/m)
            .reply(200, {
                "success": true,
            })

        nock('https://www.google.com')
            .post('/recaptcha/api/siteverify', /form-data; name="response"[^]*1f54we7x5e/m)
            .reply(200, {
                "success": false,
            })
    })

    afterAll(() => {
        delete process.env.DATA_FILE_LOCATION;
        delete process.env.CORS_HOST;
    })

    it('should return data', async () => {
        const result = await handler.hello({body: JSON.stringify({password, captcha})});

        expect(result).toEqual(expect.objectContaining({
            statusCode: 200,
            body: JSON.stringify({
                example: "data"
            })
        }))
    })

    it('should set CORS headers', async () => {
        const result = await handler.hello({body: JSON.stringify({password, captcha})});

        expect(result).toEqual(expect.objectContaining({
            headers: {
                "Access-Control-Allow-Credentials": true,
                "Access-Control-Allow-Origin": "example.com"
            }
        }))
    })

    it('should return 401 when password is incorrect', async () => {
        const result = await handler.hello({body: JSON.stringify({password: "no", captcha})})

        expect(result).toEqual(expect.objectContaining({
            statusCode: 401,
            body: JSON.stringify({message:"Invalid password"}),
            headers: {
                "Access-Control-Allow-Credentials": true,
                "Access-Control-Allow-Origin": "example.com"
            }
        }))
    })

    it('should validate captcha', async () => {
        await handler.hello({body: JSON.stringify({password, captcha})})
        scope.done();
    })

    it('should error if captcha is invalid', async () => {
        const result = await handler.hello({body: JSON.stringify({password, captcha: invalidCaptcha})})
        expect(result).toEqual(expect.objectContaining({
            statusCode: 403,
            body: JSON.stringify({message:"Invalid CAPTCHA"}),
            headers: {
                "Access-Control-Allow-Credentials": true,
                "Access-Control-Allow-Origin": "example.com"
            }
        }))
    })

})