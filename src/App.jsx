import React from 'react'
import Header from './components/header/header'
import Sideimg from './components/imageslide/sideimg'
import Movielist from './components/movies/movielist'

function App() {

  const img = [
    { id: 1, image: '/Avatar.jpg', heading: 'Avatar: Fire and Ash', p: 'UA16+ Tamil' },
    { id: 2, image: '/TereIshkMei.jpg', heading: 'TereIshkMei', p: 'UA16+ Tamil' },
    { id: 3, image: '/Padayappa.jpg', heading: 'Padayappa', p: 'UA Tamil' },
    { id: 4, image: '/Kombuseevi.jpg', heading: 'Kombuseevi', p: 'UA13+ Tamil' },
    { id: 5, image: '/SpongeBob.jpg', heading: 'SpongeBob', p: 'UA16+ Tamil, English +2 languages' },
    { id: 6, image: '/dhuran.jpg', heading: 'Dhurandhar', p: 'A Hindi' },
    { id: 7, image: '/webury.jpg', heading: 'We Bury The Dead', p: 'UA16+  English ' },
    { id: 8, image: '/SBM.jpg', heading: 'SBM', p: 'UA16+ Tamil' },
    { id: 9, image: '/Sirai.jpg', heading: 'Sirai', p: 'UA16+ Tamil' },
    { id: 10, image: '/Kalamkaval.jpg', heading: 'Kalamkaval', p: 'UA16+ Malayalam' },
    { id: 11, image: '/BhaBhaBa.jpg', heading: 'Bha BHa BA', p: 'UA13+ Malayalam' },
    { id: 12, image: '/akhada.jpg', heading: 'Akhada', p: 'UA16+ Tamil, Telugu' },
    { id: 13, image: '/Zootopia.jpg', heading: 'Zootopia', p: 'UA7+ Tamil, English ' },
    { id: 14, image: '/45.jpg', heading: '45', p: 'UA16+ Tamil, English +2 languages' },
    { id: 15, image: '/Anaconda.webp', heading: 'Anaconda', p: 'UA16+ Tamil, English +2 languages' },
    { id: 16, image: '/Champion.jpg', heading: 'Champion', p: 'UA16+ Hindi' }
  ]

  return (
    <div>
      <Header />
      <Sideimg />

      <div className="movies">
        {img.map((val) => (
          <Movielist key={val.id} val={val} />
        ))}
      </div>
    </div>
  )
}

export default App
