import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import "react-bootstrap";
import './css/App.css';
import DisplayInfo from './components/displayInfo';

function App() {
  return (
    <div className="App">
      <DisplayInfo />
    </div>
  );
}

export default App;
