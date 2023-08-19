import React from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import './Styles/global.css'
import Main from './pages/Main'
import Landing from './pages/LandingPart.jsx'

function App() {

  return (
    <>
      <div className='landing-page'>
        <Navbar/>
        <Landing/>
        <Main/>
      </div>
    </>
  )
}

export default App
