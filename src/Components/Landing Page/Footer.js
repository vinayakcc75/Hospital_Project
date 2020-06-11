import React,{Component} from 'react';

var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
}

var phantom = {
display: 'block',
padding: '20px',
height: '60px',
width: '100%',
}

function Footer() {
  return (
      <div>
          <div style={phantom} />
          <div style={style}>
          <div className="foot">
            <p>CONTACT US</p>
            <p className="contactus">
                        Telephone : +21 2289373, +21 2341245<br/>
                        Email : hospital@gmail.com<br/>
                        Address : Delhi, India<br/>
            </p>
            
        </div>
          </div>
      </div>
  )
}

export default Footer