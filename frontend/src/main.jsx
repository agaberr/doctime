import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import {AuthContextProvider} from './context/AuthContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
    <ToastContainer position="top-right" autoClose={1000} closeOnClick pauseOnHover/>
      <App />
    </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
