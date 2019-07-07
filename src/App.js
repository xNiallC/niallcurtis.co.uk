import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Home from './screens/home'

library.add(fab)


function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
