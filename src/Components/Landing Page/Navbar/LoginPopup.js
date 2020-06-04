import React from 'react';
import './LoginPopup.css';
import Backdrop from './Backdrop';
import google from './google-plus.svg';
import person from './icons8-person-64.png';
import {Link} from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
//secret :6Lel8P8UAAAAADgd_O85aUsSWW5E5KVuybvPhcD-
//site key:6Lel8P8UAAAAAP138sOhaPP9rVfjB1A89H3dIbuU


class LoginPopup extends React.Component{
    constructor(props){
        super(props)
        this.state={
            captcha:false
        }
    }
    onChange=()=>{
        return(
           this.setState({captcha:true})
        )
    }
    recaptchaRef = React.createRef();
    
    onSubmit = () => {
        const recaptchaValue = this.recaptchaRef.current.getValue();
        this.props.onSubmit(recaptchaValue);
        }
    render(){
    const {onRouteChange}=this.props;
     return(
        <div>
        <Backdrop onRouteChange={onRouteChange}/>
        <div className="login-container">
        <img src={person} alt="google" height='40' width='40'/>
                <h1 className="heading">LOGIN </h1>
            <form method='PUT'>
                <input type="text" placeholder="Enter Username"></input><br/><br/>
                <input type="password" placeholder="Enter Password"></input>
                <a href="#"><p>Forgot password?</p></a>
                <form className="recaptcha" onSubmit={this.onSubmit} >
                    <ReCAPTCHA
                        ref={this.recaptchaRef}
                        sitekey="6Lel8P8UAAAAAP138sOhaPP9rVfjB1A89H3dIbuU"
                        onChange={this.onChange}
                    />
                 </form>
                    {(this.state.captcha===true)?(
                     <Link to='/patient'>
                        <button>Login</button>
                    </Link>):<div></div>
                }
                 
                <hr/>
                <p>or</p>
                <p>Sign up with</p>
                <img src={google} alt="google" height='20' width='20'/>
                    
            </form>
        </div>
        </div>
    )}
}
export default LoginPopup;