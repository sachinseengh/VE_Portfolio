import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Components/HomePage'
import About from './Components/About'

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  

  return (
    <>
    <Router>
    <HomePage/>
    </Router>
    </>
  )
}

export default App
