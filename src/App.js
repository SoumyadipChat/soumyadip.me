import React from 'react';
import './App.css';
import Intro from './Intoduction/intro';
import RightPart from './RightPart/rightPart'

function App() {
  return (
    <div className="App">
      <div className="Intro">
        <Intro/>
      </div>
      <div className="Right">
        <RightPart/>
      </div>
    </div>
  );
}

export default App;
