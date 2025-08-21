import React, { useState } from 'react'
import '../styles/navbar.css'
import { Bell, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import { UseAuth } from '../context/usercontextprovider'

function Navbar() {
  const { isAuthenticated } = UseAuth()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="header">
      <div className="logo">Skill Checker</div>

      {/* Hamburger toggle  for mobile view*/}
      <div
        className={`menu-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav links */}
      <nav className={`nav ${isOpen ? 'active' : ''}`}>
        <Link to={'/'} onClick={() => setIsOpen(false)}>Home</Link>
        <Link to={'/assessment'} onClick={() => setIsOpen(false)}>Assessments</Link>
        <Link to={'/skills'} onClick={() => setIsOpen(false)}>My Skills</Link>
        <Link to={'/team'} onClick={() => setIsOpen(false)}>My Team</Link>
      </nav>



      {/* Right section */}
      <div className="header-right">
        {isAuthenticated ? (
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
          <Link to={'/login'} className="LogIn_btn">
            <button className='LogInbtn'>
            Log In
            </button>
            </Link>
            
        )}
      </div>
    </header>
  )
}

export default Navbar
