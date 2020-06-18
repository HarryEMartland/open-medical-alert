import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";


function Login({onLogin, loading, setPassword, password, errorMessage, captchaChange, valid}) {

    return <div className='container-fluid'>
        <div className='row justify-content-md-center pt-5 text-center'>
            <div className='col-sm col-md-6 col-lg-4 col-xl-3'>
                <form onSubmit={onLogin} >
                    {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
                    <div className="form-group">
                        <input type='password' className='form-control form-control-lg' disabled={loading} onChange={setPassword}
                               value={password} placeholder='Password'/>
                    </div>
                    <div className="form-group">
                        <ReCAPTCHA
                            sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY}
                            onChange={captchaChange}
                            onExpired={()=>{captchaChange()}}
                        />
                    </div>
                    <div className="form-group">
                        <input type='submit' className='btn btn-success btn-lg' disabled={!valid} value='Login'/>
                    </div>
                </form>
            </div>
        </div>
    </div>
}

export default Login