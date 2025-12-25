import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import "./newmve.css";

const movies = [
  {
    id: "1",
    title: "Avatar: Fire and Ash",
    rating: "8.1/10",
    votes: "46.9K Votes",
    duration: "3h 17m",
    genre: "Action, Adventure, Fantasy, Sci-Fi",
    censor: "UA16+",
    release: "19 Dec, 2025",
    formats: "2D, ICE 3D, 4DX 3D, MX4D",
    languages: "English, Hindi +4",
    poster: "/Avatar.jpg",
    banner: "/avatarbanner.jpg",
    about:"About the movie",
    content:"The biggest film in the world goes even bigger with Avatar:Fire and Ash. Jake Sully and Neytiri face a new danger on Pandora."
  },
  {
    id: "2",
    title: "TereIshkMei",
    rating: "8.2/10",
    votes: "83.1K Votes",
    duration: "2h 49m",
    genre: "Drama Romantic",
    censor: "UA16+",
    release: "28 Nov, 2025",
    formats: "2D",
    languages: "Hindi,Tamil",
    poster: "/TereIshkMei.jpg",
    banner: "/TereIshkMeibann.jpg",
    about:"About the movie",
    content:"Some souls are meant to collide. Some love stories are destined to burn brighter."
  },
  {
    id: "3",
    title: "Sirai",
    rating: "8/10",
    votes: "2.9K Votes",
    duration: "2h 5m",
    genre: "Action, Drama,Thriller",
    censor: "UA13+",
    release: "25 Dec, 2025",
    formats: "2D",
    languages: "Tamil",
    poster: "/Sirai.jpg",
    banner: "/siraiban.jpg",
    about:"About the movie",
    content:"Sirai is a Tamil movie starring Vikram Prabhu and Anishma Anilkumar in prominent roles. It is directed by Suresh Rajakumari."
  },
  {
    id: "4",
    title: "Kombuseevi",
    rating: "7.6/10",
    votes: "510+ Votes",
    duration: "2h 19m",
    genre: "Action, Crime,Drama",
    censor: "UA13+",
    release: "19 Dec, 2025",
    formats: "2D",
    languages: "Tamil",
    poster: "/Kombuseevi.jpg",
    banner: "/Kombuseeviban.jpg",
    about:"About the movie",
    content:"Having a miserable past of being evacuated from their homeland and losing their livelihood, Rokkapuli and Pandi are among the main people of the village who aspire to become millionaires by peddling ganja (marijuana). Can they successfully achieve their dream?"
  },
  {
    id: "5",
    title: "Kalamkaval",
    rating: "8.6/10",
    votes: "56.7K Votes",
    duration: "2h 19m",
    genre: "Action,Crime,Mystery,Thriller",
    censor: "UA16+",
    release: "05 Dec, 2025",
    formats: "2D",
    languages: "Malayalam",
    poster: "/Kalamkaval.jpg",
    banner: "/Kalamkaval.webp",
    about:"About the movie",
    content:"A routine Kerala Police inquiry in the quiet village of Kottayikonam takes an unexpected turn when a trail of seemingly minor clues unravels a series of disturbing, long-buried cases. As the officers dig deeper, they find themselves confronting mysteries that have haunted the village for years and a web of brilliant, calculated obstructions designed to block every step of their investigation."
  },
  {
    id: "6",
    title: "Dhurandhar",
    rating: "9.3/10",
    votes: "353K Votes",
    duration: "3h 34m",
    genre: "Action, Thriller",
    censor: "A+",
    release: "05 Dec, 2025",
    formats: "2D, DOLBY CINEMA 2D,IMAX 2D",
    languages: "Hindi ",
    poster: "/dhuran.jpg",
    banner: "/dhurandharban.avif",
    about:"About the movie",
    content:"Dhurandhar is a genre-bending, edge-of-the-seat action thriller with big stars playing iconic characters. Told with audacious swagger, the story follows a mysterious traveller as he slips into the heart of Karachi's underbelly and rises through its ranks with lethal precision, only to tear the notorious ISI-Underworld nexus apart from within."
  },
  {
    id: "7",
    title: "Bha. Bha. Ba.",
    rating: "7.2/10",
    votes: "32.1K Votes",
    duration: "3h 34m",
    genre: "Action, Comedy,Thriller",
    censor: "UA13+",
    release: "18 Dec, 2025",
    formats: "2D",
    languages: "Malayalam ",
    poster: "/BhaBhaBa.jpg",
    banner: "/BhaBhaBaban.jpg",
    about:"About the movie",
    content:"A faceless nobody unleashes statewide chaos to carve his identity, fueled by vengeance and a haunting past. As his power rises, the system launches an all-out war to stop the storm he has become. "
  },
  {
    id: "8",
    title: "vinnaithandi varuvaya",
    rating: "9/10",
    votes: "12.9K Votes",
    duration: "2h 45m",
    genre: "Drama,Romantic",
    censor: "UA",
    release: "12 Feb, 2010",
    formats: "2D",
    languages: "Tamil ",
    poster: "/vv.avif",
    banner: "/VTV.avif",
    about:"About the movie",
    content:"A young, aspiring filmmaker falls in love with a girl who moves into the house above his, but her sophisticated nature does more harm than good to him. "
  },
  {
    id: "9",
    title: "Anaconda",
    rating: "Add your rating & review",
    votes: "5.5/10",
    duration: "1h 39m",
    genre: "Action,Adventure,Comedy,Horror,Thriller",
    censor: "UA16+",
    release: "25 Dec, 2025",
    formats: "2D,4DX,MX4D",
    languages: "English,Tamil,+2",
    poster: "/Anaconda.webp",
    banner: "/Anacondaban.jpeg",
    about:"About the movie",
    content:"A group of friends is going through a mid-life crisis. They decide to remake a favourite movie from their youth, but encounter unexpected events when they enter the jungle. "
  },
  {
    id: "10",
    title: "Retta Thala",
    rating: "8.3/10",
    votes: "15.1K Votes",
    duration: "1h 53m",
    genre: "Action, Thriller",
    censor: "UA16+",
    release: "25 Dec, 2025",
    formats: "2D",
    languages: "Tamil",
    poster: "/RettaThala.jpg",
    banner: "/RettaThalaban.jpg",
    about:"About the movie",
    content:"Retta Thala is a Tamil movie starring Arun Vijay, Siddhi Idnani, Yogesh Samy and John Vijay in prominent roles. It is written and directed by Kris Thirukumaran "
  },
  {
    id: "11",
    title: "Mission Santa",
    rating: "7.3/10",
    votes: "3K Votes",
    duration: "1h 35m",
    genre: "Adventure,Animation,Family",
    censor: "U",
    release: "25 Dec, 2025",
    formats: "2D",
    languages: "English",
    poster: "/MissionSanta.jpg",
    banner: "/xmasban.jpg",
    about:"About the movie",
    content:"Mission Santa: Yoyo to the Rescue is a pulse-pounding, laugh-out-loud animated adventure where Santa teams up with daring kids to save Christmas from the ultimate naughty nemesis! "
  },
    {
    id: "12", 
    title: "Zootopia-2", 
    rating: "9.1/10", 
    votes: "17.6K Votes", 
    duration: "1h 48m", 
    genre: "Adventure, Adventure, Comedy", 
    censor: "UA7+", 
    release: "28 Dec, 2016", 
    formats: "2D,4DX 3D,MX4D 3D,", 
    languages: "English,Tamil,+2", 
    poster: "/Zootopia.jpg", 
    banner: "/zootopiaban.avif",
  },
];

function Newmve() {
  const navigate = useNavigate();


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

              <button className="book-btn" onClick={() => navigate(`/book/${movie.id}`)}> Book tickets</button>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <h3>{movie.about}</h3>
        <p className="abp">
          {movie.content}
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

export default Newmve;
