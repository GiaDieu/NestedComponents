import React from 'react';
import Contact from './components/Contact';
import Objective from './components/Objective';
import Experience from './components/Experience';
import Mock from './Mock/Mock';

const App = () => {
  const {Basic_info} = Mock;
  return (
      <div className="ui two column grid">
        <div className="column"  style={{'width': '30%'}}>
            <Contact info={Basic_info}/>
        </div>
        <div className="column" style={{'width': '70%'}}>
            <Objective />
            <Experience />
        </div>
      </div>
  );
}

export default App;