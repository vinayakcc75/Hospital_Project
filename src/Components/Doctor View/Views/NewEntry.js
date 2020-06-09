import React from 'react';
import './NewEntry.css'
const NewEntry =()=>{
    return(
        <div className="entry">
         <h1>New Entry</h1>
         <form>
             <br/><br/>
            <input type="number" placeholder="Enter Patient Id"></input><br/><br/>
            <input type="text" placeholder="Enter Patient Name"></input><br/><br/>
            <input type="text" placeholder="Symptoms"></input><br/><br/>
            <input type="text" placeholder="Medications Given"></input><br/><br/>
            <button type="button">Submit</button>
         </form>
        </div>
    );
}
 export default NewEntry; 
 