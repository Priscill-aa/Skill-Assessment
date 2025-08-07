import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from '../Pages/landingPage'
import Login from '../Pages/login'
import SignUp from '../Pages/signUp'

function PageRoute() {
  return (
    <div>
        <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
    </div>
  )
}

export default PageRoute