import React from 'react';
import './LoginPopup.css';
import Backdrop from './Backdrop';
import google from './google-plus.svg';
import person from './icons8-person-64.png';
import {Link} from "react-router-dom";

class LoginPopup extends React.Component{
    constructor(props){
        super(props)
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
                <Link to='/patient'>
                    <button onClick={this.props.hideNavbar}>Login</button>
                </Link>
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