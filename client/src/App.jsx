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
import { ShowProperty } from './components/ShowProperty.jsx'
import PaymentPage from './pages/PaymentPage.jsx'
import PaymentQR from './pages/PaymentQR.jsx'
import Profile from './pages/tenant/Profile.jsx'
import MyProperty from './pages/tenant/Booking.jsx'
import MyBookings from './pages/tenant/Booking.jsx'
import ComplaintsPage from './pages/tenant/Complaint.jsx'
import Dashboard from './pages/owner/Dashboard.jsx'
import AddListing from './pages/owner/AddListing.jsx'
import Mylisting from './pages/owner/MyListings.jsx'
import Complaints from './pages/owner/Complaints.jsx'
import RentTracker from './pages/owner/RentTracker.jsx'


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
    <Route path='/property/:id' element={<ShowProperty/>}></Route>
    <Route path='/payment' element={<PaymentPage/>}></Route>
    <Route path='/paymentQR' element={<PaymentQR/>}></Route>
    <Route path='/profile' element={<Profile/>}></Route>
    <Route path="/mybookings" element={<MyBookings/>}></Route>
    <Route path='/complaints' element={<ComplaintsPage/>}/>
    <Route path='/OwnerDashboard' element={<Dashboard/>}/>
    <Route path='/addlisting' element={<AddListing/>}/>
    <Route path="/mylisting" element={<Mylisting/>}></Route>
    <Route path='/get-complaints' element={<Complaints/>}/>
    <Route path='/rent-tracker' element={<RentTracker/>}/>
    </Routes>
    

      
    </>
  )
}

export default App
