import React from 'react';
import './photo-intro.css';
import wa from '../../Assets/whatsapp.svg';

function PhotoIntro() {

  var WARedirect=()=>{
    window.open("https://wa.me/919564879899", "_blank");
  }
  return (
    <div className="PhotoIntr">
        <div className="NameField">
            <p className="contact">SOUMYADIP</p>
            <p className="contact lastname">CHATTOPADHYAY</p> 
          <div className="ContactField">
            <div onClick={WARedirect} role="button" className="HeyButton">
              <img className="waicon" src={wa} alt="logo" />
              <div className="Hey">Hey There!</div>
            </div>     
          </div>    
        </div>
        
    </div>
    
  );
}

export default PhotoIntro;