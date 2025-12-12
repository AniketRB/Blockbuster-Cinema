import React from 'react'
import { Link } from 'react-router-dom'
import "./nav.css"



function NavBar() {
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <Link to="/" className='nav-link'>BlockBuster</Link>

      </div>
      <div className='navbar-links'>
        <Link to="/" className='nav-link'>Home</Link>
        <Link to="/favourites" className='nav-link'>Favourites</Link>
      </div>
    </nav>
  )
}

export default NavBar
