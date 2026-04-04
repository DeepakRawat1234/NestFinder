import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Register from './pages/Register.jsx'
import VerifyOTP from './pages/VerifyOtpEmail.jsx'
import Step2Form from './pages/RegistrationDetails.jsx'
import Login from './pages/Login.jsx'
import Footer from './components/Footer.jsx'
import Landing from './pages/Landing.jsx'
import PropertiesDetails from './pages/PropertiesDetails.jsx'

function App() {
  
  return (
    <>
   
      
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/home' element={<Home />} />
    <Route path='/Register' element={<Register/>}/>
    <Route path='/VerifyOtpEmail' element={<VerifyOTP/>}/>
    <Route path='/RegistrationDetails' element={<Step2Form/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/properties' element={< PropertiesDetails/>} />
    </Routes>
    

      
    </>
  )
}

export default App
