import React, { useEffect, useRef } from 'react';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import './Styles/global.css';
import Main from './pages/Main';
import Landing from './pages/LandingPart.jsx';

function App() {
  const targetRef = useRef(null);
  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div>
        <div className='landing-page'>
          <Navbar 
          scrollToTarget = {scrollToTarget}
          />
          <Landing />
        </div>
        <Main className="target" ref={targetRef}/>
      </div>
    </>
  );
}

export default App;
