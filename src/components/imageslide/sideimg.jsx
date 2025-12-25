import React, { useState } from 'react'
import Avatar from '../../assets/Avatar1.jpg'
import Cine from '../../assets/xmas.jpg'
import Ticket from '../../assets/ticket99.jpg'
import './sideimg.css'

function Sideimg() {

  const images = [Avatar, Cine, Ticket]
  const [index, setIndex] = useState(0)

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <div>
      <div className='banner'>
        <img src={images[index]} alt="banner" />
      </div>

      <button className="next" onClick={nextImage}>❯</button>
            <h1 className='place'>Now Showing In Chennai</h1>
      <div className="section">
      <p>Filter</p>
      <p>Top Selling</p>
      <p>English</p>
      <p>Malayalam</p>
      <p>Drama</p>
      <p>Action</p>
      <p>3D</p>
    </div>
    </div>
  )
}

export default Sideimg
