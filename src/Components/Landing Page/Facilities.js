import React from 'react';
import './Facilities.css';

import temp from './facility.jpg'


function FacilityDetails(){
    return(
      <div className="facility-card">
          <img src={temp} alt="facility"/>
          <h3> Heading</h3>
      </div>
    );
  }
  



const Facilities =()=>{
    return(
    <div className="facility-wraper">
        <div className="facility-main">
            <h1>Facilities</h1>
           <table>
                <tr>
                    <td><FacilityDetails/></td> 
                    <td><FacilityDetails/></td> 
                    <td><FacilityDetails/></td> 
                </tr>
                <tr>
                    <td><FacilityDetails/></td> 
                    <td><FacilityDetails/></td> 
                    <td><FacilityDetails/></td> 
                </tr>
            </table>
        </div>
    </div>
    );
}
 export default Facilities; 
 