import { useParams } from "react-router-dom";
import { WiSunrise, WiDaySunny, WiSunset, WiMoonWaxingCrescent3 } from "react-icons/wi";
import "./booking.css";

const tickets = [
  {
    id: "1",
    movie: "Avatar: Fire and Ash (Tamil)",
    run: "Movie runtime: 3h 17m",
    badge:"UA16+"
  },
  {
    id: "2",
    movie: "TereIshkMei",
    run: "Movie runtime: 2h 49m",
  },
  {
    id: "3",
    movie: "Sirai",
    run: "Movie runtime: 2h 05m",
  },
  {
    id: "4",
    movie: "Kombuseevi",
    run: "Movie runtime: 2h 19m",
  },
  {
    id: "5",
    movie: "Kalamkaval",
    run: "Movie runtime: 2h 19m",
  },
  {
    id: "6",
    movie: "Dhurandhar",
    run: "Movie runtime: 3h 34m",
  },
  {
    id: "7",
    movie: "Bha. Bha. Ba.",
    run: "Movie runtime: 3h 34m",
  },
  {
    id: "8",
    movie: "vinnaithandi varuvaya",
    run: "Movie runtime: 2h 24m",
  },
  {
    id: "9",
    movie: "Anaconda",
    run: "Movie runtime: 1h 39m",
  },
  {
    id: "10",
    movie: "Retta Thala",
    run: "Movie runtime: 1h 53m",
  },
  {
    id: "11",
    movie: "Mission Santa",
    run: "Movie runtime: 1h 35m",
  },
  {
    id: "12",
    movie: "Zootopia-2",
    run: "Movie runtime: 1h 48m",
  },
];

function BookTicket() {
  const { id } = useParams();

  const ticketData = tickets.find((t) => t.id === id);

  if (!ticketData) {
    return <h2 style={{ padding: "40px" }}>Movie not found</h2>;
  }

  return (
    <div >
      <div className="showtime-wrapper">
      <img src="/bookingOffer.jpg" alt="" className="bookoffer" />

        <div className="movie-header">
          <h1>{ticketData.movie}</h1>

          <div className="movie-meta">
            <span>{ticketData.run}</span>
            <span className="badge">UA16+</span>
            <span className="chip">Action</span>
            <span className="chip">Adventure</span>
            <span className="chip">Fantasy</span>
            <span className="chip">Sci-Fi</span>
          </div>
        </div>

        <div className="date-bar">
          <button className="active">THU<br/><b>25</b><span>DEC</span></button>
          <button>FRI<br/><b>26</b><span>DEC</span></button>
          <button>SAT<br/><b>27</b><span>DEC</span></button>
          <button>SUN<br/><b>28</b><span>DEC</span></button>
          <button>MON<br/><b>29</b><span>DEC</span></button>
        </div>

        <div className="filter-bar">
          <select><option>Tamil - 2D</option></select>
          <select>
            <option >Price Range</option>
            <option>₹100-₹200</option>
            <option>₹200-₹300</option>
            <option>₹300-₹400</option>
          </select>
          <select>
            <option>Preferred Time</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
            <option>Night</option>
          </select>
          {/* <select><option>Sort By</option></select> */}
        </div>

        <div className="theatre">

          <div className="theatre-row">
            <div className="theatre-name">
              <h3>INOX: LUXE Phoenix Market City</h3>
              <p>Velachery</p>
            </div>
            <div className="showtimes">
              <button className="time">02:10 PM</button>
              <button className="time">10:20 PM</button>
            </div>
          </div>

          <div className="theatre-row">
            <div className="theatre-name">
              <h3>PVR:Spectrum Mall</h3>
              <p>Perambur</p>
            </div>
            <div className="showtimes">
              <button className="time">03:30 PM</button>
            </div>
          </div>

          <div className="theatre-row">
            <div className="theatre-name">
              <h3>Green Cinemas 4K Atmos</h3>
              <p>Padi</p>
            </div>
            <div className="showtimes">
              <button className="time yellow">03:15 PM</button>
              <button className="time green">07:00 PM</button>
              <button className="time green">10:50 PM</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default BookTicket;
