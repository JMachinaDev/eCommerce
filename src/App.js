import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './css/App.css';
import DisplayInfo from './components/displayInfo';


function App() {
  return (
    <>
      <div className="App"><DisplayInfo /></div>
    </>
  );
}

export default App;
