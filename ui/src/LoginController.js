import React from 'react';
import Login from "./Login";


class LoginController extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            password: ""
        }
        this.setPassword = this.setPassword.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.captchaChange = this.captchaChange.bind(this);
        this.recaptchaRef = React.createRef();
    }

    setPassword(event) {
        this.setState({password: event.target.value});
    }

    onLogin(event) {
        if (this.valid()) {
            this.props.onLogin({password: this.state.password, captcha: this.state.captcha})
            this.recaptchaRef.current.reset()
            this.setState({captcha:''})
        } else {
            console.log(this.state)
        }
        event.preventDefault();
    }

    captchaChange(captcha) {
        this.setState({captcha})
    }

    valid() {
        return !!this.state.captcha & !!this.state.password;
    }

    render() {
        const {password} = this.state;
        const valid = this.valid();
        return <Login password={password} setPassword={this.setPassword} {...this.props} onLogin={this.onLogin}
                      captchaChange={this.captchaChange} valid={valid} recaptchaRef={this.recaptchaRef}/>
    }
}

export default LoginController