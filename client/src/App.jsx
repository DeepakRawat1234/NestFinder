import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Register from './pages/Register.jsx'
import VerifyOTP from './pages/VerifyOtpEmail.jsx'
import Step2Form from './pages/RegistrationDetails.jsx'
import Login from './pages/Login.jsx'

function App() {
  
  return (
    <>
   
      {/* <Navbar/> */}
    <Routes>
      <Route path='/' element={<Home />} />
    <Route path='/Register' element={<Register/>}/>
    <Route path='/VerifyOtpEmail' element={<VerifyOTP/>}/>
    <Route path='/RegistrationDetails' element={<Step2Form/>}/>
    <Route path='/Login' element={<Login/>}/>
    </Routes>
     

      
    </>
  )
}

export default App
