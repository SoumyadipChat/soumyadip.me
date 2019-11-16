import React from 'react';
import './text-intro.css';
import fb from '../../Assets/facebook.svg';
import li from '../../Assets/linkedin.svg';
import gm from '../../Assets/gmail.svg';

function TextIntro() {
  return (
    <div className="TextBox">
     <div className="LargeText">
        <p className="Para">WEB DEVELOPER.</p>
        <p className="Para">DESIGNER.</p>
        <p className="Para">EXPLORER.</p>
     </div>
     <div className="MediumText">
        Angular 6 and Java Developer. Minor Experience in ReactJS and Android Studio. Currently working as Technology Associate at Morgan Stanley Advantage Services. Located in Bangalore, India. 
     </div>
     <div className="icons">
        <img className="icon" src={gm} alt="logo" />
        <img className="icon" src={li} alt="logo" />
        <img className="icon" src={fb} alt="logo" />
     </div>
    </div>
  );
}

export default TextIntro;