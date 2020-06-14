import React from 'react';
import './AboutUs.css';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
import doc from './OQ6UTW0.jpg';
import doc1 from './assets/doctor1.jfif';
import doc2 from './assets/doctor2.jfif';
import doc3 from './assets/doctor3.jfif';

const arr=[1,2,3,4,5,6,7,8,9,10];



function Doctor(props){
  return (
    <div className="aboutUs-card">
      <img src={props.image} width="80" height="80" alt="Doctor's pic" /><br/>
      <h2>{props.name}</h2>
      <h3>{props.designation}</h3>
    </div>
  );
}
  
class  People extends React.Component{
  render(){
    return(
      <div className="people-wraper">
      <div className="people-main">
        <h1>Crew</h1>
        <div>
          <table>
            <tr>
                <td><Doctor image={doc3} name="Jafar" designation="Oncologist"/></td> 
                <td><Doctor image={doc1} name="Jareena" designation="Cardiologist"/></td> 
                <td><Doctor image={doc2} name="John" designation="Gynaecalogist"/></td> 
            </tr>  
          </table>  
        </div>
      </div>
      </div>
      );
    }  
}
  
function Achievement(props){
  return (
    <div className="aboutUs-card swiper-slide">
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
    <div >
      <h1>About us</h1>
      <h2>Some content About Hospital</h2>
      <p>
        A hospital is a place where a person goes to be healed when he or she is sick or injured. Doctors and nurses work at                  hospitals. Doctors  make use of advanced  medical technology to heal patients. The hospital may charge money for                      treatments checkups or the treatment may be free or the money will be paid by the government on behalf of the patient.
      </p>
    </div>
  );
}
  


class AboutUs extends React.Component{

  render(){
    return(
        <div className="aboutUs-main">
          <History/><hr/>
          <People/>
        </div>
    );
  }
}
   
export default AboutUs;