import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from './Component/Profile';
import About from './Component/About';

function App() {
  const [state, setState] = useState('');

  return (
    <div className='App'>
      <button onClick={() => setState('about')}>About</button>
      <button onClick={() => setState('profile')}>Profile</button>
      <button onClick={() => setState('')}>Reset</button>
      <Router>
        <Route path='/about' Component={About} />
      </Router>
    </div>
  );
}

export default App;
