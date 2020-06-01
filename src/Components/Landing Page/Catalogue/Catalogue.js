import React from 'react';
import Slider from 'infinite-react-carousel';
import './Catalogue.css';

const Catalogue=()=>{
    return(
        <div className="toggling-pics">
        <Slider dots  autoplay autoplayScroll='infinite'
            autoplaySpeed={2000} arrows={false}> 
            <img src='https://www.healthleadersmedia.com/sites/hlmp/files/medical-mask-shutterstock_268385390.jpg' alt="1"/>
            <img src="https://study.com/cimages/videopreview/videopreview-full/gowbyydu58.jpg" alt="2"/>
            <img src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="3"/>
        </Slider>
        </div>
    );
}

export default Catalogue;