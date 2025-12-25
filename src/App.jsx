import React from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Header from './components/header/header'
import Sideimg from './components/imageslide/sideimg'
import Movielist from './components/movies/movielist'
import Footer from './components/footer/footer'
import Newmve from './components/upcomemve/newmve'
import BookTicket from './components/booking/booking';
import Movie from './pages/movie';
import Theatres from './pages/theatres';
import Orders from './pages/order/order';
function App() {

  const img = [
    { id: 1, image: '/Avatar.jpg', heading: 'Avatar: Fire and Ash', p: 'UA16+ Tamil' },
    { id: 2, image: '/TereIshkMei.jpg', heading: 'TereIshkMei', p: 'UA16+ Tamil' },
    { id: 3, image: '/Sirai.jpg', heading: 'Sirai', p: 'UA16+ Tamil' },
    { id: 4, image: '/Kombuseevi.jpg', heading: 'Kombuseevi', p: 'UA13+ Tamil' },
    { id: 5, image: '/Kalamkaval.jpg', heading: 'Kalamkaval', p: 'UA16+ Malayalam' },
    { id: 6, image: '/dhuran.jpg', heading: 'Dhurandhar', p: 'A Hindi' },
    { id: 7, image: '/BhaBhaBa.jpg', heading: 'Bha BHa BA', p: 'UA13+ Malayalam' },
    { id: 8, image: '/VinnaiTV.avif', heading: 'Vinnaithandi Varuvaya', p: 'UA Tamil' },
    { id: 9, image: '/Anaconda.webp', heading: 'Anaconda', p: 'UA16+ Tamil, English +2 languages' },
    { id: 10, image: '/RettaThala.jpg', heading: 'Retta Thala', p: 'UA16+ Tamil' },
    { id: 11, image: '/MissionSanta.jpg', heading: 'Mission Santa', p: 'U  English ' },
    { id: 12, image: '/Zootopia.jpg', heading: 'Zootopia', p: 'UA7+ Tamil, English ' },
    // { id: 13, image: '/akhada.jpg', heading: 'Akhada', p: 'UA16+ Tamil, Telugu' },
    // { id: 14, image: '/45.jpg', heading: '45', p: 'UA16+ Tamil, English +2 languages' },
    // { id: 15, image: '/Padayappa.jpg', heading: 'Padayappa', p: 'UA Tamil' },
    // { id: 16, image: '/Champion.jpg', heading: 'Champion', p: 'UA16+ Hindi' }
  ]

  return (
    <div className="app-layout">
      <Header />
      <main className="page-content">

      <Routes>
          <Route path="/movies" element={<Movie movies={img} />} />
          <Route path="/theatres" element={<Theatres />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/" element={
          <div>
              <Sideimg />
              <div className="movies">
                {img.map((val) => (
                  <Movielist key={val.id} val={val} />
                ))}
              </div>
            </div>
          }/>
        <Route path="/movie/:id" element={<Newmve />} />
        <Route path="/book/:id" element={<BookTicket />} />
      </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
