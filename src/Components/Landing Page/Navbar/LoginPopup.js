import React from 'react';
import './LoginPopup.css';
import Backdrop from './Backdrop';
import google from './google-plus.svg';
import person from './icons8-person-64.png';
import ReCAPTCHA from "react-google-recaptcha";

class LoginPopup extends React.Component{
    constructor(props){
        super(props)
        this.state={
            captcha:false,
            user:{
                password:"",
                email:""
        }
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
    passChange=(event)=>{
        this.setState(Object.assign(this.state.user,{password:event.target.value}));
    }
    emailChange=(event)=>{
        this.setState(Object.assign(this.state.user,{email:event.target.value}));
    }
    
     verify=()=>{
    console.log('entered');
    fetch('http://localhost:8080/api/authenticate', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email:this.state.user.email,
        password:this.state.user.password
      })
    })
    .then(response => response.json())
    .then(ret => {
        if(ret.status===true){
            this.props.giveAccess();
            this.props.history.push(`/patient/${this.state.email}`);
            console.log('Successfully Login');
        } 
        else{
          alert('Invalid Email or Password');
          window.location.reload();
        }   
    })
    console.log('exit')
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

                <input type="email" placeholder="Enter Email"
                onChange={this.emailChange}></input><br/><br/>

                <input type="password" placeholder="Enter Password"
                onChange={this.passChange}></input>

                <a href="#"><p>Forgot password?</p></a>
                <button type="button" onClick={this.verify} >Login</button>
                <hr/>
                <p>or</p>
                <p>Sign up with</p>
                <img src={google} alt="google" height='20' width='20'/>
                    
            </form>
        </div>
        </div>
    )
   }
    }
export default LoginPopup;