import React from 'react';
import './AboutUs.css';
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import doc from './OQ6UTW0.jpg';
const arr=[1,2,3,4,5,6,7,8,9,10];

function Doctor(props){
  return (
    <div className="card swiper-slide">
      <img src={doc} width="80" height="80" alt="Doctor's pic" /><br/>
      <a href="#">{props.name}</a>
      <h4>{props.designation}</h4>
    </div>
  );
}
  
class  People extends React.Component{

  componentDidMount(){
    this.swiper=new Swiper('.s1',
      {
        slidesPerView: 4,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }
    );
  }


  render(){
    return(
      <div>
        <h1>Crew</h1>
        <div className=" s1 swiper-container">
          <div className="swiper-wrapper">
            {arr.map(()=>{return <Doctor name="Doctor's Name" designation="Designation"/>})}
          </div> 
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
         </div>
        </div>
      );
    }  
}
  
function Achievement(props){
  return (
    <div className="card swiper-slide">
      <img src={doc} width="80" height="80" alt="Conent" />
      <h3>{props.heading}</h3>
      <a href="#">{props.link}</a>
    </div>
  );
}
  
class AchievementSection extends React.Component{

  componentDidMount(){
    this.swiper=new Swiper('.s2',
      {
        slidesPerView: 4,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }
    );
  }
  render(){
    return(
      <div>
        <h1>Achievements</h1>
        <div className="s2 swiper-container">
          <div className="swiper-wrapper">
            {
              arr.map(()=>{return (<Achievement heading="Main Heading" link="Read Full Article"/>)})
            }
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    );
  }
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
  );
}
  
function OurApp(){    
  return(
    <div>
      <History/>
      <hr />
      <People/>
      <hr/>
      <AchievementSection/>
    </div>
  );
}
  

class AboutUs extends React.Component{

  render(){
    return(
      <div>
        <OurApp/>
      </div>
    );
  }
}
   
export default AboutUs;