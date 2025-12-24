import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import './header.css'

function Header() {

  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <div className='nav'>
        <img src="/cinebook.png" alt="" width='150px'/>

        <div className='location'>
          <FaLocationDot className="loc-icon" />
          <span>Chennai</span>
        </div>

        <nav>
          <ul>
            <li>Home</li>
            <li>Movie</li>
            <li>Theatres</li>
            <li>Order</li>
          </ul>
        </nav>

        <input type="text"  placeholder="Search movies, cinema and more"  className="search" />
        <FaSearch className="search-icon" />

        <button className='btn btn-first' onClick={() => setShowForm(true)}>  Sign in</button>
      </div>
      {showForm && (
        <div className="all">
          <div className="signin-form">
            <h2>Sign In</h2>

            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button className="submit">Login</button>

            <p className="close" onClick={() => setShowForm(false)}>✖ Close</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
