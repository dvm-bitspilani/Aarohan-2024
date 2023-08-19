import { useState } from 'react'
import './App.css'
import Landing from './pages/landing'
import Navbar from './Components/Navbar'
import './Styles/global.css'
import Main from './pages/Main'


function App() {
  const [count, setCount] = useState(0)

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
