import React from 'react';
import './Profile.css'
import dp from './dp.jfif'

const Profile =({user})=>{
    return(
        <div className="main">
            <table>                
                <tr>
                    <td> <img src={dp} alt="Profile pic" /> </td>
                </tr>
                <tr>
                    <td> <button>Upload / Update  pic</button> </td>
                </tr>
                <br/><br/>
                <tr>
                <td> <h3>{`${user.username}`}</h3> </td>
                    <td> <h4>HIIIIIII</h4> </td>
                </tr>
                <tr>
                    <td> <h3>{`${user.user_id}`}</h3> </td>
                    <td> <h4>111000</h4> </td>
                </tr>
                <tr>
                    <td> <h3>Long term Health History</h3> </td>
                    <td> <h4>Asthama</h4> </td>
                </tr>
                <tr>
                    <td> <h3>{`${user.email}`}</h3> </td>
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
                <br/><br/>
                <tr>
                    <td><button>Edit Details</button></td>
                </tr>
            </table>
        </div>
    );
}

export default Profile; 
 

