// import React from 'react';
// import './rightPart.css';

// import Skills from '../Skills/skills';
// import Projects from'../Projects/projects';
// import Experience from '../Experience/experience'

// function RightPart() {
//   return (
//     <div className="RightSlides">
//      <Skills/>
//      <Projects/>
//      <Experience/>
//     </div>
//   );
// }

// export default RightPart;

import React from 'react';
import {useState} from 'react';
import content from '../content';
import './rightPart.css';
import nxt from '../Assets/right-arrow.svg';
import pre from '../Assets/left-arrow.svg';

function RightPart() {
  const[current,setCount]=useState(0);

  var next=()=>{
    var nxIndex=current===content.length-1?0:current+1;
    setCount(nxIndex);
  }

  var prev=()=>{
    var prIndex=current===0?content.length-1:current-1;
    setCount(prIndex);
  }

  return (
    <div className="RightSlides">
      {content.map((item, index) => {
          if(index === current){
            return (
            <div
              className="center"
              key={index}
              style={{ backgroundColor: item.bgColor }}>
                <div className="contentPart">{item.component}</div>
            
            </div>
            );
            
          }
          else return;
      })}
      <div className="navDots">
        <div role="button" onClick={prev} className="navButton prev">
        <img className="navIc" src={pre} alt="logo" />
        </div>
          {
            content.map((val, ind) => {
              
                if(ind === current){
                  return (
                    <div className="dot act" key={ind}>
                </div>
                  );
                }else{
                  return (
                    <div role="button" onClick={(e) => setCount(ind, e)}  className="dot" key={ind}>
                </div>
              );
                }
                
            })
          }
      
          <div role="button" onClick={next} className="navButton next">
              <img className="navIc" src={nxt} alt="logo" />
          </div>
       </div>  
    </div>
  );
}

export default RightPart;


