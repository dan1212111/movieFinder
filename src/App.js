import { Link, Routes, Route, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
// import "./styles/styles.css"
import "/Users/danielmccarthy/movieFinder/src/styles/aside.css"
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
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movie/:id" element={<ViewMovie />} />
          <Route path="/myMovies" element={<MyMovies />} />
          <Route
            path="/movies/fTop250Movies"
            element={
              <Top250Movies
                top250Movies={top250Movies}
              />
            }
          />
          <Route
            path="/movies/fComingSoon"
            element={
              <ComingSoon
                comingSoon={comingSoon}
              />
            }
          />
          <Route
            path="/movies/fTop250TVs"
            element={
              <Top250TVs
                top250TVs={top250TVs}
              />
            }
          />
          <Route
            path="/movies/fBoxOffice"
            element={
              <BoxOffice
                boxOffice={boxOffice}
              />
            }
          />
          <Route
            path="/movies/fMostPopularMovies"
            element={
              <MostPopularMovies
                mostPopularMovies={mostPopularMovies}
              />
            }
          />
        </Routes>
    </body>
  )
}

export default App
