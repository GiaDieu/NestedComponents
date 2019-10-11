import React from 'react';
import './App.css';
import Objective from './components/Objective';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Mock from './Mock/Mock';

const App = () => {
  const {Basic_info} = Mock;
  return (
      <div className="App">
          <Objective />
          <Experience />
          <Contact info={Basic_info}/>   
      </div>
  );
}

export default App;