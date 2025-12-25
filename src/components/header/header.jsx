import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { Link } from "react-router-dom";
import SignIn from '../signin/signin';
import './header.css'

function Header() {
        const [open, setOpen] = useState(false);

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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/movies">Movie</Link></li>
              <li><Link to="/theatres">Theatres</Link></li>
              <li><Link to="/orders">Order</Link></li>
          </ul>
        </nav>

        <input type="text"  placeholder="Search movies, cinema and more"  className="search" />
        <FaSearch className="search-icon" />

        <button className='btn btn-first' onClick={() => setOpen(true)}>  Sign in</button>
      </div>
      {open && <SignIn onClose={() => setOpen(false)} />}

    </>
  )
}

export default Header
