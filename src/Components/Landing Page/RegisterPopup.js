import React from 'react';
import './RegisterPopup.css';
import Backdrop from './Backdrop';
import person from './icons8-person-64.png';

const RegisterPopup =({onRouteChange})=>{
    return(
        <div>
        <Backdrop onRouteChange={onRouteChange}/>
        <div className="container1" >
        <img src={person} alt="google" height='40' width='40'/>
            <h1 className="heading">REGISTER </h1><br/>
            <form method='PUT'>
                <input type="text" placeholder="Enter Full Name"></input><br/><br/>
                <input type="password" placeholder="Enter Email"></input><br/><br/>
                <input type="password" placeholder="Enter Contact Info"></input><br/><br/>
                <button type="reset">Reset</button><hr/>
                <button >Register</button>
            </form>
        </div>
        </div>
    )
}
export default RegisterPopup;