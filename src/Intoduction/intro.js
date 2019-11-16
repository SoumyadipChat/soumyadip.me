import React from 'react';
import './intro.css';

import TextIntro from './Text/text-intro'
import PhotoIntro from './Photo/photo-intro'

function Intro() {
  return (
    <div className="Introdc">
      <div className="Photo">
        <PhotoIntro/>
      </div>
      <div className="Text">
        <TextIntro/>
      </div>
    </div>
  );
}

export default Intro;