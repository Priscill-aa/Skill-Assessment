import React from 'react'
import '../styles/navbar.css'
import { Bell, Search } from 'lucide-react'
import {  Link } from 'react-router-dom'
function navbar() {
    const is_authenticated=false

    is_authenticated ? '' : ''

  return (
    <div> <header className="header">
   <div className="logo">Skill Checker</div>
    <nav className="nav">
      <Link to={'/'} >Home</Link>
      < Link to={'/assessment'} >Assessments</Link>
      <Link to={'/skills'}>My Skills</Link>
      <Link to={'/team'}>My Team</Link>
   </nav>
  <div className="header-right">
     {is_authenticated ? (
        <>
         <button className="search-box">
       <Search size={20} />
        <span>Search</span>
      </button>
      <button className="bell-btn">
        <Bell size={20} />
      </button>
      <div className="profile-avatar"></div>
        </>
     ) : (
        <Link to={'/login'} className='LogIn_btn'>Log In</Link> 
     )}
  </div>
  </header>
    </div>
  )
}

export default navbar