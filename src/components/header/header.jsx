import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import './header.css'



function Header() {
  return (
    <div>
      <div className='nav'>
        <img src="/cinebook.png" alt="" width='200px'/>
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
        
            <input type="text" placeholder="Search movies.cinema and more"  className="search"/>
            <FaSearch className="search-icon" />
            <button className='btn btn-first'>Sing in</button>
      </div>
    </div>
  )
}

export default Header
