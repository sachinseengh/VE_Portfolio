import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import './app.css'; // this line is required to apply font-face definitions

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
