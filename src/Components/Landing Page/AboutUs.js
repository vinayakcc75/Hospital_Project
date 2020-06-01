import React from 'react';
import './AboutUs.css';
import doc from './OQ6UTW0.jpg';
const arr=[1,2,3,4,5,6,7,8,9,10];

    const Doctor=(props)=>{
        return (
              <div className="card">
            <img src={doc} width="80" height="80" alt="Doctor's pic" /><br/>
                <a href="#">{props.name}</a>
                <h4>{props.designation}</h4>
              </div>
        )
      }
  
  function People(){
   
    return(
      <>
       <h1>Crew</h1>
       <div className="containerr">
          {arr.map(()=>{return <Doctor name="Doctor's Name" designation="Designation"/>})}
       </div>
      </>
    )
  }
  
  function Achievement(props){
    return (
          <div class="card">
            <img src={doc} width="80" height="80" alt="Conent" />
            <h3>{props.heading}</h3>
            <a href="#">{props.link}</a>
          </div>
    )
  }
  
  function AchievementSection(){
    return(
      <div>
       <h1>Achievements</h1>
       <div className="containerr">
        {
          arr.map(()=>{return (<Achievement heading="Main Heading" link="Read Full Article"/>)})
        }
        </div>
      </div>
    )
  }
  
  function History(){
    return (
        <div>
            <h1>About us</h1>
            <h5>Some content About Hospital</h5>
            <p>
             A hospital is a place where a person goes to be healed when he or she is sick or injured. Doctors and nurses work at                  hospitals. Doctors  make use of advanced  medical technology to heal patients. The hospital may charge money for                      treatments checkups or the treatment may be free or the money will be paid by the government on behalf of the patient.
            </p>
          </div>
    )
  }
  
  function OurApp(){
    
    return(
        <>
          <History/>
          <hr />
          <People/>
          <hr />
          <AchievementSection/>
        </>
    )
  }
  
  class AboutUs extends React.Component{

      render(){
        return(
        <div>
          <OurApp/>
        </div>
        )
        }
  }
   
export default AboutUs;
 
