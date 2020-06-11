import React from 'react';
import './NewEntry.css'
const NewEntry =()=>{
    return(
        <div className="entry">
        <br/>
         <h1>New Entry</h1>
         <form>
             <br/><br/>
            Patient Id   : <input type="number" ></input><br/><br/><br/>
            {'Patient Name : '}<input type="text" ></input><br/><br/><br/>
            {'Diagnosis    : '} <span className="span"  contenteditable="true" /><br/><br/><br/>
            {'Prescription : '}<span className="span"  contenteditable="true" /><br/><br/><br/>
            <button type="button">Submit</button>
         </form>
        </div>
    );
}
 export default NewEntry; 
 