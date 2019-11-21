import React from 'react';
import './about.css';
import aboutMatrix from './aboutMatrix'


function About() {
  return (
    <div className="about">
       <div className="expHeader">
        About Me
      </div>
      <div className="congestedSkills">
          {aboutMatrix.map((skills,index) => {
              return (
                <div className="skillIndv abouts">
                    <img className="skillIc" src={skills.icon} alt="logo" />
                   <div className="skillHeader">
                    {skills.header} 
                   </div>
                   <div className="skillDesc">
                   {skills.shortDesc}
                   </div> 
                </div>
              )
          })}
      </div>
    </div>
  );
}

export default About;