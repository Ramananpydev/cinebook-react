import { useParams } from "react-router-dom";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import "./newmve.css";

const movies = [
  {
    id: "13", 
    title: "Zootopia", 
    rating: "7.8/10", 
    votes: "32K Votes", 
    duration: "1h 48m", 
    genre: "Animation, Adventure, Comedy", 
    censor: "UA7+", 
    release: "4 Mar, 2016", 
    formats: "2D, 3D", 
    languages: "Tamil, English", poster: "/Zootopia.jpg", 
    banner: "/zootopiabanner.jpg",
  },
];

function TereIshkMei() {

  const offers = [
    "YES Private Debit Card Offer",
    "Buy One Get One Movie Ticket Free",
    "Flat ₹150 off on first booking",
    "Free popcorn on weekends",
  ];

  const [offerIndex, setOfferIndex] = useState(0);

  const prevOffer = () => {
    setOfferIndex((prev) =>
      prev === 0 ? offers.length - 1 : prev - 1
    );
  };

  const nextOffer = () => {
    setOfferIndex((prev) =>
      prev === offers.length - 1 ? 0 : prev + 1
    );
  };

  const { id } = useParams();
  const movie = movies.find((m) => m.id === id);

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <>
      <div
        className="movie-banner"
        style={{ backgroundImage: `url(${movie.banner})` }}
      >
        <div className="overlay">
          <div className="movie-content">
            <img src={movie.poster} className="poster" alt="" />

            <div className="details">
              <h1>{movie.title}</h1>

              <div className="rating">
                <i className="fa-solid fa-star"></i>
                {movie.rating}
                <span>({movie.votes})</span>
                <button className="rate-btn">Rate now</button>
              </div>

              <p className="meta">
                {movie.duration} • {movie.genre} • {movie.censor} •{" "}
                {movie.release}
              </p>

              <div className="tags">
                <span>{movie.formats}</span>
                <span>{movie.languages}</span>
              </div>

              <button className="book-btn">Book tickets</button>
            </div>
          </div>
        </div>
      </div>
      <div className="showtime-page">
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

        <div className="theatre-card">
          <div className="theatre-header">
            <div>
              <h3>Sangam Cinemas 4K RGB Laser Dolby Atmos</h3>
              <p>2.4 km away • Non-cancellable</p>
            </div>
            <FaHeart />
          </div>

          <div className="showtime-list">
            <button>02:10 PM<br/><span>3D</span></button>
            <button>06:30 PM<br/><span>3D</span></button>
            <button>10:50 PM<br/><span>3D</span></button>
          </div>
        </div>
      </div>
      <div className="about">
        <h3>About the movie</h3>
        <p className="abp">
          The biggest film in the world goes even bigger with Avatar:
          <span> Fire and Ash. Jake Sully and Neytiri face a new danger on Pandora.</span>
        </p>
      </div>
      <div className="top-offer">
        <h3>Top offers for you</h3>

        <div className="offer">
          <button onClick={prevOffer} className="btns">❮</button>

          <p className="offer-text">{offers[offerIndex]}</p>

          <button onClick={nextOffer} className="btns btn-four">❯</button>
        </div>
      </div>
    </>
  );
}

export default TereIshkMei;
