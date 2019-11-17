import React from 'react';
import './text-intro.css';
import fb from '../../Assets/facebook.svg';
import li from '../../Assets/linkedin.svg';
import gm from '../../Assets/gmail.svg';

function TextIntro() {
  var FBRedirect=()=>{
    window.open("https://www.facebook.com/soumyadip.chattopadhyay.1", "_blank");
  }
    
  var LIRedirect=()=>{
    window.open("https://www.linkedin.com/in/soumyadip-c-95106186", "_blank");
  }
  
  var GMRedirect=()=>{
    let emailTo="soumya.c11@gmail.com";
    window.open('mailto:'+emailTo, '_blank');
  }

  return (
    <div className="TextBox">
     <div className="LargeText">
        <p className="Para">WEB DEVELOPER.</p>
        <p className="Para brownCol">DESIGNER.</p>
        <p className="Para">EXPLORER.</p>
     </div>
     <div className="MediumText">
       <c className="blueColor">Angular</c> 6 and <c className="blueColor">Java</c> Developer. 
       Minor Experience in <c className="blueColor">ReactJS</c> and <c className="blueColor">Android Studio</c>. 
       Currently working as Technology Associate at <c className="blueColor">Morgan Stanley</c>.
       Located in <c className="blueColor">Bangalore, India</c>. 
     </div>
     <div className="icons">
         <img role="button" onClick={LIRedirect} className="icon" src={li} alt="logo" />
        <img role="button" onClick={GMRedirect} className="icon" src={gm} alt="logo" />
        <img role="button" onClick={FBRedirect} className="icon" src={fb} alt="logo" />
     </div>
    </div>
  );
}

export default TextIntro;