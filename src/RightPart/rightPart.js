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

import React from 'react';
import './rightPart.css';
import content from '../content';
import Slider from 'react-animated-slider';
import horizontalCss from 'react-animated-slider/build/horizontal.css';

function RightPart() {
  return (
    <div className="RightSlides">
      <Slider classNames={horizontalCss}>
        {content.map((item, index) => (
          <div
            key={index}
            style={{ backgroundColor: item.bgColor }}>
            <div className="center">
              <div className="contentPart">{item.component}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default RightPart;


