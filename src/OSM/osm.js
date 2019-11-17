import React from 'react';
import './osm.css';
import expSC from '../Assets/scExpanded.svg';
import smlSC from '../Assets/scSmall.svg';
import andr from '../Assets/android.svg';
import web from '../Assets/web.svg';

function OSM() {

    var OSMRedirect=()=>{
        window.open("https://onestopmusic.github.io", "_blank");
      }

    var OSMAppRedirect=()=>{
        window.open("https://docs.google.com/uc?export=download&id=1W8Fyi2kZPdwgRsaoNVVkY-OIJjGl5R8_", "_blank");
    }


  return (
    <div className="osm">
      <div className="scrShts">
      <img className="scrsht" src={expSC} alt="logo" />
      <img className="scrsht" src={smlSC} alt="logo" />
      </div>
     <div className="bottomPart">
        <div className="textOSM">
            <div className="Header">
                    One.Stop.Music
            </div>
            <div className="techstack">
                    TECH STACK: Angular 6, Java Spring-Boot, Postgres SQL, Android Studio
            </div>
            <div className="desc">
                    Audio Player available as Android app and Web app. 
                    Plays audio of Youtube videos, runs in background,with generic music player functionalities.
            </div>
        </div>
            <div className="linkButtons">
                <div onClick={OSMAppRedirect} role="button" className="andrLink">
                <img className="linkicon" src={andr} alt="logo" />
                <div className="linkText">APK</div>
                </div>
                <div onClick={OSMRedirect} role="button" className="webLink">
                <img className="linkicon" src={web} alt="logo" />
                <div className="linkText">Web</div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default OSM;