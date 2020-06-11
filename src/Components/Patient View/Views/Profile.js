import React from 'react';
import './Profile.css'
import dp from './dp.jfif'

const Profile =()=>{
    return(
    <div className="profile-wraper">
        <div className="profile-main">
            <table>
                <tr> 
                    <td><h1>Your Profile</h1></td>
                </tr>
                <tr>
                    <td> <img src={dp} alt="Profile pic" /> </td>
                </tr>
                <tr>
                    <td> <button>Upload / Update  pic</button> </td>
                </tr>
                <tr>
                    <td> <h3>Name</h3> </td>
                    <td> <h4>John</h4> </td>
                </tr>
                <tr>
                    <td> <h3>Patient id</h3> </td>
                    <td> <h4>111000</h4> </td>
                </tr>
                <tr>
                    <td> <h3>Long term Health History</h3> </td>
                    <td> <h4>Asthama</h4> </td>
                </tr>
                <tr>
                    <td> <h3>Email</h3> </td>
                    <td> <h4>example@gmail.com</h4> </td>
                </tr>
                <tr>
                    <td> <h3>Date of birth</h3> </td>
                    <td> <h4>15/11/1999</h4> </td>
                </tr>
                <tr>
                    <td> <h3>Gender</h3> </td>
                    <td> <h4>Male</h4> </td>
                </tr>
                <tr>
                    <td> <h3>Age</h3> </td>
                    <td> <h4>20</h4> </td>
                </tr>
                <tr>
                    <td><h3>Address</h3></td>
                    <td><h4>Format</h4></td>
                </tr>
                <tr>
                    <td><button>Edit Details</button></td>
                </tr>
            </table>
        </div>
    </div>    
    );
}

export default Profile; 
 


/*
<h1>Your Profile</h1>
            <div>
                <img src={dp} alt="Profile pic" />
            </div>
                <button>Upload / Update  pic</button>
            <div>
                <div className="Content">
                    <h3>Name</h3>
                </div>
                <div className="value">
                    <h4>John</h4>   
                </div>
            </div>
            <div>
                <h3>Patient id</h3>
            </div>
            <div>
                <h3>Long term Health History</h3>
            </div>
            <div>
                <h3>Email</h3>
            </div>
            <div>
                <h3>Date of birth</h3>
                <h3>Gender</h3>
                <h3>Age</h3>
            </div>
            <div>
                <h3>Address</h3>
            </div>
            <button>Edit Details</button>      
*/