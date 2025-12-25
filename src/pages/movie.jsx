import React from 'react'
import Movielist from '../components/movies/movielist'
import './movie/movie.css'

function Movie({movies}) {
  return (
    <div>
      <img src="pop.jpg" alt="" className="mvbanner"/>
    <div className='movie-page'>
      <h1>Movies showing in theatres</h1>
    <div className="movies">
      {movies.map((val) => (
        <Movielist key={val.id} val={val} />
      ))}
    </div>

    </div>
    </div>
  )
}

export default Movie
