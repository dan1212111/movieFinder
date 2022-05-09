import { Routes, Route, Navigate, Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import "/Users/danielmccarthy/movieFinder/src/styles/sideBar.css"
import Main from "./components/main/Main"
import AboutMovie from "./components/aboutMovie/AboutMovie"
import Top250Movies from "./components/main/Top250Movies"
import ComingSoon from "./components/main/ComingSoon"
import Top250TVs from "./components/main/Top250TVs"
import BoxOffice from "./components/main/BoxOffice"
import MostPopularMovies from "./components/main/MostPopularMovies"
import WatchList from "./components/main/Watchlist.jsx"
import Login from "/Users/danielmccarthy/movieFinder/src/client/components/Login.jsx"
import Register from "/Users/danielmccarthy/movieFinder/src/client/components/Register.jsx"
import "./styles/movieList.css"

function App() {
  const [top250Movies, setTop250Movies] = useState(null)
  const [comingSoon, setComingSoon] = useState(null)
  const [top250TVs, setTop250TVs] = useState(null)
  const [boxOffice, setBoxOffice] = useState(null)
  const [mostPopularMovies, setMostPopularMovies] = useState(null)

  useEffect(() => {
    if (!top250Movies) {
      fetch(`https://imdb-api.com/en/API/Top250Movies/k_x9gxptob`)
        .then((res) => res.json())
        .then((data) => setTop250Movies(data.items))
    }
  }, [top250Movies])

  useEffect(() => {
    if (!comingSoon) {
      fetch(`https://imdb-api.com/en/API/ComingSoon/k_x9gxptob`)
        .then((res) => res.json())
        .then((data) => setComingSoon(data.items))
    }
  }, [comingSoon])

  useEffect(() => {
    if (!top250TVs) {
      fetch(`https://imdb-api.com/en/API/Top250TVs/k_x9gxptob`)
        .then((res) => res.json())
        .then((data) => setTop250TVs(data.items))
    }
  }, [top250TVs])

  useEffect(() => {
    if (!boxOffice) {
      fetch(`https://imdb-api.com/en/API/BoxOffice/k_x9gxptob`)
        .then((res) => res.json())
        .then((data) => setBoxOffice(data.items))
    }
  }, [boxOffice])

  useEffect(() => {
    if (!mostPopularMovies) {
      fetch(`https://imdb-api.com/en/API/MostPopularMovies/k_x9gxptob`)
        .then((res) => res.json())
        .then((data) => setMostPopularMovies(data.items))
    }
  }, [mostPopularMovies])

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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<AuthenticateUser />} >
        <Route path="/" element={<Main top250Movies={top250Movies} />} />
        <Route path="/about-movie/:id" element={<AboutMovie />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route
          path="/movies/fTop250Movies"
          element={<Top250Movies top250Movies={top250Movies} />}
        />
        <Route
          path="/movies/fComingSoon"
          element={<ComingSoon comingSoon={comingSoon} />}
        />
        <Route
          path="/movies/fTop250TVs"
          element={<Top250TVs top250TVs={top250TVs} />}
        />
        <Route
          path="/movies/fBoxOffice"
          element={<BoxOffice boxOffice={boxOffice} />}
        />
        <Route
          path="/movies/fMostPopularMovies"
          element={<MostPopularMovies mostPopularMovies={mostPopularMovies} />}
        />
         </Route>
      </Routes>
    </body>
  )
}
function isLoggedIn() {
  const loadedToken = localStorage.getItem("jwt");
  return !(loadedToken === "" || loadedToken === null);
}

export default App

const AuthenticateUser = ({ children, redirectPath = "/login" }) => {
  if (!isLoggedIn()) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};