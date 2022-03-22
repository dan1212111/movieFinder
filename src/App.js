import { Link, Routes, Route } from "react-router-dom"
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
  const [filterAZ, setFilterAZ] = useState(false)
  const [ascendingImdbRating, setAscendingImdbRating] = useState(false)
  const [descendingImdbRating, setDescendingImdbRating] = useState(false)
  const [ascendingYearRelease, setAscendingYearRelease] = useState(false)
  const [descendingYearRelease, setDescendingYearRelease] = useState(false)
    
  useEffect(() => {
    fetch(`https://imdb-api.com/en/API/Top250Movies/k_x9gxptob`)
      .then((res) => res.json())
      .then((data) => setTop250Movies(data.items))
  }, [])
    
  useEffect(() => {
    fetch(`https://imdb-api.com/en/API/ComingSoon/k_x9gxptob`)
      .then((res) => res.json())
      .then((data) => setComingSoon(data.items))
  }, [])

  useEffect(() => {
    fetch(`https://imdb-api.com/en/API/Top250TVs/k_x9gxptob`)
      .then((res) => res.json())
      .then((data) => setTop250TVs(data.items))
  }, [])

  useEffect(() => {
    fetch(`https://imdb-api.com/en/API/BoxOffice/k_x9gxptob`)
      .then((res) => res.json())
      .then((data) => setBoxOffice(data.items))
  }, [])

  useEffect(() => {
    fetch(`https://imdb-api.com/en/API/MostPopularMovies/k_x9gxptob`)
      .then((res) => res.json())
      .then((data) => setMostPopularMovies(data.items))
  }, [])
  

  function handleFilterAZ(event) {
    const inputValue = event.target.checked
    setFilterAZ(inputValue)
  }

  function handleFilterAscendingImdbRating(event) {
    const inputValue = event.target.checked
    setAscendingImdbRating(inputValue)
  }

  function handleFilterDescendingImdbRating(event) {
    const inputValue = event.target.checked
    setDescendingImdbRating(inputValue)
  }

  function handleFilterAscendingYearRelease(event) {
    const inputValue = event.target.checked
    console.log(inputValue)
    setAscendingYearRelease(inputValue)
  }

  function handleFilterDescendingYearRelease(event) {
    const inputValue = event.target.checked
    console.log(inputValue)
    setDescendingYearRelease(inputValue)
  }



  if (!mostPopularMovies && !comingSoon && !top250TVs && !boxOffice && !mostPopularMovies) {
    return <p>Loading...</p>
  }

  return (
    <body>
      <main>
        <header>
          <nav id="main-navigation">
            <ul>
              <Link to="/"><li>Home</li></Link>
              <Link to="/myMovies"><li>My movies</li></Link>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/movie/:id" element={<ViewMovie />}/>
          <Route path="/myMovies" element={<MyMovies />} />
          <Route path="/movies/fTop250Movies" element={<Top250Movies top250Movies={top250Movies} filterAZ={filterAZ} ascendingImdbRating={ascendingImdbRating} descendingImdbRating={descendingImdbRating} ascendingYearRelease={ascendingYearRelease} descendingYearRelease={descendingYearRelease}/>} />
          <Route path="/movies/fComingSoon" element={<ComingSoon comingSoon={comingSoon} filterAZ={filterAZ} ascendingImdbRating={ascendingImdbRating} descendingImdbRating={descendingImdbRating} ascendingYearRelease={ascendingYearRelease} descendingYearRelease={descendingYearRelease}/>} />
          <Route path="/movies/fTop250TVs" element={<Top250TVs top250TVs={top250TVs} filterAZ={filterAZ} ascendingImdbRating={ascendingImdbRating} descendingImdbRating={descendingImdbRating} ascendingYearRelease={ascendingYearRelease} descendingYearRelease={descendingYearRelease}/>} />
          <Route path="/movies/fBoxOffice" element={<BoxOffice boxOffice={boxOffice} filterAZ={filterAZ} ascendingImdbRating={ascendingImdbRating} descendingImdbRating={descendingImdbRating} ascendingYearRelease={ascendingYearRelease} descendingYearRelease={descendingYearRelease}/>} />
          <Route path="/movies/fMostPopularMovies" element={<MostPopularMovies mostPopularMovies={mostPopularMovies} filterAZ={filterAZ} ascendingImdbRating={ascendingImdbRating} descendingImdbRating={descendingImdbRating} ascendingYearRelease={ascendingYearRelease} descendingYearRelease={descendingYearRelease}/>} />
          </Routes>
      </main>
      {/* <Aside /> */}
      <aside id="left-side-navigation">
    <div className="title">Movie Finder</div>
    <div className="filter_Big_Container1">
    <Link to="/movies/fTop250Movies"><button>Top250Movies</button></Link>
    <Link to="/movies/fComingSoon"><button>Coming Soon</button></Link>
    <Link to="/movies/fTop250TVs"><button>Top250TVs</button></Link>
    <Link to="/movies/fBoxOffice"><button>BoxOffice</button></Link>
    <Link to="/movies/fMostPopularMovies"><button>MostPopularMovies</button></Link>
    </div>
    <div className="filter_Big_Container2">
    <label>
    <input type="checkbox" name="filterAZ" id="filterAZ" onChange={handleFilterAZ} checked={filterAZ}/>
    Filter A-z
    </label>
    <label>
    <input type="checkbox" name="filterAscendingImdbRating" id="filterAscendingImdbRating" onChange={handleFilterAscendingImdbRating} checked={ascendingImdbRating}/>
    Ascending Imdb Rating
    </label>
    <label>
    <input type="checkbox" name="filterDescendingImdbRating" id="filterDescendingImdbRating" onChange={handleFilterDescendingImdbRating} checked={descendingImdbRating}/>
    Descending Imdb Rating
    </label>
    <label>
    <input type="checkbox" name="filterAscendingYearRelease" id="filterAscendingYearRelease" onChange={handleFilterAscendingYearRelease} checked={ascendingYearRelease}/>
    Ascending Year Release
    </label>
    <label>
    <input type="checkbox" name="filterDescendingYearRelease" id="filterDescendingYearRelease" onChange={handleFilterDescendingYearRelease} checked={descendingYearRelease}/>
    Descending Year Release
    </label>


    </div>
  </aside>
    </body>
  )
}

export default App
