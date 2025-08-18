import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from '../Pages/landingPage'
import Login from '../Pages/login'
import SignUp from '../Pages/signUp'
import Onboarding from '../Pages/onboarding'
import Homepage from '../Pages/homePage'
import { UseAuth } from '../context/usercontextprovider'
import ResetPassword from '../Pages/resetPassword'
import NewPassword from '../Pages/newPassword'




function PageRoute() {
const {isAuthenticated} = UseAuth()
  return (
    <div>
      <Routes>
      <Route path="/" element={isAuthenticated ? <Homepage/> : <LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/onboarding" element ={<Onboarding />} />
      <Route path="/homePage" element={<Homepage />} />  
      <Route path="/resetPassword"  element={<ResetPassword />} />
      <Route path="/newPassword" element={<NewPassword />} />
      
    </Routes>
    </div>
  )
}

export default PageRoute