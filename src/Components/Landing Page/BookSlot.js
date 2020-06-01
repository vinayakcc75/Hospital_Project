import React from 'react';
import './AboutUs.css';
import moment from 'moment';
import ReactTimeslotCalendar from 'react-timeslot-calendar';
let timeslots = [
    ['13', '14'], // 1:00 AM - 2:00 AM
    ['14', '15'], // 2:00 AM - 3:00 AM
    ['16', '17'], // 4:00 AM - 6:00 AM
    '18', // 5:00 AM
    ['19', '20'] // 4:00 AM - 6:00 AM - 7:00AM - 8:00AM
];

// let disabledTimeslots = [
//     {
//         startDate: 'April 30th 2017, 12:00:00 AM',
//         format: 'MMMM Do YYYY, h:mm:ss A',
//     },
//     {
//         startDate: 'May 1st 2017, 3:00:00 PM',
//         format: 'MMMM Do YYYY, h:mm:ss A',
//     },
//     {
//         startDate: 'May 5th 2017, 6:00:00 PM',
//         format: 'MMMM Do YYYY, h:mm:ss A',
//     },
// ];

let startDateInputProps = {
    class: 'some-random-class',
    name: 'May 28th 2020, 6:00:00 PM',
};

class BookSlot extends React.Component{
    constructor(){
        super();
    }
    render(){
    return(
        <div>
            <br/><br/>
        <h1>SLOT BOOKING</h1>
        <form style={{marginLeft:'20%',justifyContent:'center', width:'60%'}} method='PUT'>
        {'Email : '}<input type="text" placeholder="Enter Full Name" name="email"></input>
        <br/><br/>
        {'Name : '}<input type="email" placeholder="Enter Email" name="patient-name"></input><br/><br/>
        {'Contact Info : '}<input type="password" placeholder="Enter Contact No" name="contact"></input><br/><br/>
        {'Select your Doctor : '}
        <select>
            <option>Doc1 : Surgeon</option>
            <option>Doc2 : Cardiologist</option>
            <option>Doc3 : Orthopaedic</option>
        </select>
        <br/><br/>
        <button >Book Slot</button>
        </form>
        <br/>
        <br/>
        <h3>Select a slot</h3>
        <div className='head'>
        <ReactTimeslotCalendar
        timeslots={timeslots}
        startDateInputProps={startDateInputProps} 
        initialDate={moment().format()}
        />
        </div>
        </div>
    );}
}

 export default BookSlot; 
 