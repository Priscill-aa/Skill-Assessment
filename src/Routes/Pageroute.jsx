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
import Assessment from '../Pages/assessment'
import ResultBreakdown from '../Pages/resultBreakdown'
import Congrats from '../Pages/congrats'




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
      <Route path="/assessment/:title"   element={<Assessment />} />
      <Route path="/result"   element={<ResultBreakdown />} />
      <Route path="/congrats" element={<Congrats />} />

     
    </Routes>
    </div>
  )
}

export default PageRoute