import React from 'react';
import './LoginPopup.css';
import Backdrop from './Backdrop';
import google from './google-plus.svg';
import person from './icons8-person-64.png';

class LoginPopup extends React.Component{
    constructor(props){
        super(props)
        this.state={
            captcha:false,
            choice:"",
            user:{
                password:"",
                email:"",
                username:"",
                user_id:"",
                phone:"",
                user_type:""
        }
    }
}

    passChange=(event)=>{
        // var email=function(event) { //Validates the email address
        //     var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        //     return emailRegex.test(event.target.value);
        // }
        // var phone=function(event) { //Validates the phone number
        //     var phoneRegex = /^(\+91-|\+91|0)?\d{10}$/; // Change this regex based on requirement
        //     return phoneRegex.test(event.target.value);
        // }

        // if(email) this.setState({choice:"email"});
        // else if(phone) this.setState({choice:"phone"});
        this.setState(Object.assign(this.state.user,{password:event.target.value}));
    }
    emailChange=(event)=>{
        if(event.target.value)
        this.setState(Object.assign(this.state.user,{email:event.target.value}));
    }
    
     verify=()=>{
    console.log('entered');
    fetch('http://localhost:8080/api/authenticate', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        choice:this.state.choice,
        email:this.state.user.email,
        password:this.state.user.password
      })
    })
    .then(response => response.json())
    .then(ret => {
        if(ret.status===true){
            this.setState(Object.assign(this.state.user,{username:ret.results[0].username}));
            this.setState(Object.assign(this.state.user,{user_id:ret.results[0].user_id}));
            this.setState(Object.assign(this.state.user,{phone:ret.results[0].phone}));
            this.setState(Object.assign(this.state.user,{user_type:ret.results[0].user_type}));
            this.props.loadUser(this.state.user);
            console.log(this.state.user);
            this.props.giveAccess();
            if(ret.results[0].user_type===0)
                this.props.history.push(`/patient/${this.state.user_id}`);
            else
                this.props.history.push(`/doctor/${this.state.user_id}`);
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

                <input type="email" placeholder="Enter Phone No./Email"
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