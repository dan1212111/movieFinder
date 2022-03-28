import { Link, Routes, Route, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
// import "./styles/styles.css"
import "/Users/daniel/my-app/src/styles/aside.css"
import Main from "./components/main/Main"
import ViewMovie from "./components/main/ViewMovie"
import MyMovies from "./components/main/MyMovies"
// import Aside from "./components/aside/Aside"
import Top250Movies from "./components/aside/Top250Movies"
import ComingSoon from "./components/aside/ComingSoon"
import Top250TVs from "./components/aside/Top250TVs"
import BoxOffice from "./components/aside/BoxOffice"
import MostPopularMovies from "./components/aside/MostPopularMovies"

function App() {
  const [top250Movies, setTop250Movies] = useState(null)
  const [comingSoon, setComingSoon] = useState(null)
  const [top250TVs, setTop250TVs] = useState(null)
  const [boxOffice, setBoxOffice] = useState(null)
  const [mostPopularMovies, setMostPopularMovies] = useState(null)
  const [filter, setFilter] = useState(null)
  const location = useLocation()
  const [visibilityAZ, setVisibilityAZ] = useState("visible")
  const [visibilityAscRating, setVisibilityAscRating] = useState("visible")
  const [visibilityDescRating, setVisibilityDescRating] = useState("visible")
  const [visibilityAscYear, setVisibilityAscYear] = useState("visible")
  const [visibilityDescYear, setVisibilityDescYear] = useState("visible")
  const [visibilityNone, setVisibilityNone] = useState("visible")


console.log(location.pathname)

/* FILTER VISIBILITY */
if(location.pathname === "/movies/fTop250Movies") {
  // visibilityAscRating = ("")
//  setVisibilityAscRating("hidden")
console.log("works")
}

// MAYBE WRITE THIS AS A RETURN STATEMENT IN REACT

// location()


  useEffect(() => {
    if(!top250Movies) {
      fetch(`https://imdb-api.com/en/API/Top250Movies/k_x9gxptob`)
        .then((res) => res.json())
        .then((data) => setTop250Movies(data.items))
  }
 }, [top250Movies])

  useEffect(() => {
    if(!comingSoon) {
    fetch(`https://imdb-api.com/en/API/ComingSoon/k_x9gxptob`)
      .then((res) => res.json())
      .then((data) => setComingSoon(data.items))
  }
 }, [comingSoon])

  useEffect(() => {
    if(!top250TVs) {
    fetch(`https://imdb-api.com/en/API/Top250TVs/k_x9gxptob`)
      .then((res) => res.json())
      .then((data) => setTop250TVs(data.items))
  }
}, [top250TVs])

  useEffect(() => {
    if(!boxOffice) {
    fetch(`https://imdb-api.com/en/API/BoxOffice/k_x9gxptob`)
      .then((res) => res.json())
      .then((data) => setBoxOffice(data.items))
  }
 }, [boxOffice])

  useEffect(() => {
    if(!mostPopularMovies) {
    fetch(`https://imdb-api.com/en/API/MostPopularMovies/k_x9gxptob`)
      .then((res) => res.json())
      .then((data) => setMostPopularMovies(data.items))
  }
},[mostPopularMovies])

  function handleFilter(event) {
    const inputValue = event.target.value
    console.log(inputValue)
    setFilter(inputValue)
  }

  if (
    !mostPopularMovies &&
    !comingSoon &&
    !top250TVs &&
    !boxOffice &&
    !mostPopularMovies
  ) {
    return <p>Loading...</p>
  }

  return (
    <body>
      <main>
        <header>
          <nav id="main-navigation">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/myMovies">
                <li>My movies</li>
              </Link>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movie/:id" element={<ViewMovie />} />
          <Route path="/myMovies" element={<MyMovies />} />
          <Route
            path="/movies/fTop250Movies"
            element={
              <Top250Movies
                filter={filter}
                top250Movies={top250Movies}
              />
            }
          />
          <Route
            path="/movies/fComingSoon"
            element={
              <ComingSoon
              filter={filter}
                comingSoon={comingSoon}
              />
            }
          />
          <Route
            path="/movies/fTop250TVs"
            element={
              <Top250TVs
              filter={filter}
                top250TVs={top250TVs}
              />
            }
          />
          <Route
            path="/movies/fBoxOffice"
            element={
              <BoxOffice
              filter={filter}
                boxOffice={boxOffice}
              />
            }
          />
          <Route
            path="/movies/fMostPopularMovies"
            element={
              <MostPopularMovies
              filter={filter}
                mostPopularMovies={mostPopularMovies}
              />
            }
          />
        </Routes>
      </main>
      {/* <Aside /> */}
      <aside id="left-side-navigation">
        <div className="title">Movie Finder</div>
        <div className="filter_Big_Container1">
          <Link to="/movies/fTop250Movies">
            <button>Top250Movies</button>
          </Link>
          <Link to="/movies/fComingSoon">
            <button>Coming Soon</button>
          </Link>
          <Link to="/movies/fTop250TVs">
            <button>Top250TVs</button>
          </Link>
          <Link to="/movies/fBoxOffice">
            <button>BoxOffice</button>
          </Link>
          <Link to="/movies/fMostPopularMovies">
            <button>MostPopularMovies</button>
          </Link>
        </div>
        <div className="filter_Big_Container2">
          <label style={{visibility: visibilityAZ}}>
            <input
              type="radio"
              name="filterAZ"
              value="filterAZ"
              id="filterAZ"
              onChange={handleFilter}
              checked={filter === "filterAZ"}
            />
            Filter A-z
          </label >
          <label style={{visibility: visibilityAscRating}}>
            <input
              type="radio"
              name="filterAscendingImdbRating"
              value="ascendingImdbRating"
              id="filterAscendingImdbRating"
              onChange={handleFilter}
              checked={filter === "ascendingImdbRating"}
            />
            Ascending Imdb Rating
          </label>
          <label style={{visibility: visibilityDescRating}}>
            <input
              type="radio"
              name="filterDescendingImdbRating"
              id="filterDescendingImdbRating"
              value="descendingImdbRating"
              onChange={handleFilter}
              checked={filter === "descendingImdbRating"}
            />
            Descending Imdb Rating
          </label>
          <label style={{visibility: visibilityAscYear}}>
            <input
              type="radio"
              name="filterAscendingYearRelease"
              id="filterAscendingYearRelease"
              value="ascendingYearRelease"
              onChange={handleFilter}
              checked={filter === "ascendingYearRelease"}
            />
            Ascending Year Release
          </label>
          <label style={{visibility: visibilityDescYear}}>
            <input
              type="radio"
              name="filterDescendingYearRelease"
              id="filterDescendingYearRelease"
              value="descendingYearRelease"
              onChange={handleFilter}
              checked={filter === "descendingYearRelease"}
            />
            Descending Year Release
          </label>
          <label style={{visibility: visibilityNone}}>
            <input
              type="radio"
              name="filterNone"
              id="filterNone"
              value="none"
              onChange={handleFilter}
              checked={filter === "none"}
            />
            None
          </label>
        </div>
      </aside>
    </body>
  )
}

export default App
