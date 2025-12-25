import React from 'react'
import { FaHeart } from "react-icons/fa";
import './theatres.css'


const theatreData = [
  {
    id: 1,
    name: "Sangam Cinemas 4K RGB Laser Dolby Atmos",
    distance: "2.4 km away • Non-cancellable",
    times: ["02:10 PM", "06:30 PM", "10:50 PM"]
  },
  {
    id: 2,
    name: "PVR Grand Mall Velachery",
    distance: "5.1 km away • Non-cancellable",
    times: ["11:30 AM", "03:45 PM", "07:20 PM"]
  },
  {
    id: 3,
    name: "INOX Marina Mall OMR",
    distance: "12 km away • Cancellation available",
    times: ["10:00 AM", "01:30 PM", "06:00 PM"]
  },
  {
    id: 4,
    name: "AGS Cinemas T Nagar",
    distance: "3.2 km away • Non-cancellable",
    times: ["09:45 AM", "02:15 PM", "09:30 PM"]
  },
  {
    id: 5,
    name: "SPI Palazzo Nexus Mall",
    distance: "6.8 km away • Non-cancellable",
    times: ["12:00 PM", "04:20 PM", "08:40 PM"]
  },
  {
    id: 6,
    name: "Luxe Cinemas Phoenix",
    distance: "7.5 km away • Cancellation available",
    times: ["10:30 AM", "01:50 PM", "06:10 PM"]
  },
  {
    id: 7,
    name: "Rohini Silver Screens",
    distance: "4.6 km away • Non-cancellable",
    times: ["11:00 AM", "03:00 PM", "07:45 PM"]
  },
  {
    id: 8,
    name: "Sathyam Cinemas Royapettah",
    distance: "5 km away • Non-cancellable",
    times: ["09:30 AM", "01:00 PM", "09:15 PM"]
  },
  {
    id: 9,
    name: "PVR VR Mall Anna Nagar",
    distance: "6.3 km away • Cancellation available",
    times: ["10:15 AM", "02:40 PM", "06:55 PM"]
  },
  {
    id: 10,
    name: "INOX Citi Centre",
    distance: "4 km away • Non-cancellable",
    times: ["11:45 AM", "04:10 PM", "08:30 PM"]
  }
];

function Theatres() {
  return (
    <div>
      <img src="buy.jpg" alt="" className='mvbanner' />
       <div className="showtime-page">
      <h1>Available Theatres In Chennai</h1>
      <div className="date-bar">
        <button className="active">24<br/>Wed</button>
        <button>25<br/>Thu</button>
        <button>26<br/>Fri</button>
        <button>27<br/>Sat</button>
        <button>28<br/>Sun</button>
      </div>

      <div className="filters">
        <button>Filters</button>
        <button className="active">Tamil</button>
        <button>3D</button>
        <button>Morning</button>
        <button>After 5 PM</button>
      </div>

      {theatreData.map((theatre) => (
        <div className="theatre-card" key={theatre.id}>
          <div className="theatre-header">
            <div>
              <h3>{theatre.name}</h3>
              <p>{theatre.distance}</p>
            </div>
            <FaHeart />
          </div>

          <div className="showtime-list">
            {theatre.times.map((time, index) => (
              <button key={index}>
                {time}<br/>
                <span>3D</span>
              </button>
            ))}
          </div>
        </div>
      ))}

    </div>
    </div>
  )
}

export default Theatres
