import React, { useEffect, useRef } from 'react';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import './Styles/global.css';
import Main from './pages/Main';
import Landing from './pages/LandingPart.jsx';

function App() {

  

  return (
    <>
      <div>
        <div className='landing-page'>
          <Navbar 
          />
          <Landing />
        </div>
        <Main className="target"/>
      </div>
    </>
  );
}

export default App;
