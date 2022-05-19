import React from "react"
import HeaderMain from "../header/HeaderMain.jsx"
import { useState, useEffect } from "react"
import Aside from "../sideBar/SideBar.jsx"
import { FilterArrAZ } from "../../components/sideBar/filters/FilterAZ.js"
import { FilterDescendingImdbRating } from "../../components/sideBar/filters/FilterDescendingImdbRating.js"
import { FilterAscendingYearRelease } from "../../components/sideBar/filters/FilterAscendingYearRelease.js"
import { FilterDescendingYearRelease } from "../../components/sideBar/filters/FilterDescendingYearRelease.js"
import MovieList from "./movieList/movieList"
import "@djthoms/pretty-checkbox"
const API_URL = process.env.REACT_APP_API_URL

export default function Main(props) {
  const [popularMovies, setPopularMovies] = useState(null)
  const { top250Movies } = props
  const [filter, setFilter] = useState(null)
  let movieArray = top250Movies
  let imDbId = []

  if (filter === "filterAZ") {
    movieArray = FilterArrAZ(movieArray)
  }
  if (filter === "descendingImdbRating") {
    movieArray = FilterDescendingImdbRating(movieArray)
  }
  if (filter === "ascendingYearRelease") {
    movieArray = FilterAscendingYearRelease(movieArray)
  }
  if (filter === "descendingYearRelease") {
    movieArray = FilterDescendingYearRelease(movieArray)
  }
  if (filter === "none") {
    movieArray = top250Movies
  }

  useEffect(() => {
    if (!popularMovies) {
      fetch(`https://imdb-api.com/en/API/MostPopularMovies/k_x9gxptob`)
        .then((res) => res.json())
        .then((data) => setPopularMovies(data.items))
    }
  }, [popularMovies])

  //add a filter options that checked movie ID to see if they match/ if yes - then check the checkbox

  useEffect(() => {
    const options = {
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    }
    fetch(`${API_URL}/movie`, options)
      .then((res) => res.json())
      .then((data) => getWatchlistMovieId(data.data.watchlist))
  }, [getWatchlistMovieId])

  if (!popularMovies) {
    return <p>Loading...</p>
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function getWatchlistMovieId(data) {
    for (const movie of data) {
      imDbId.push(movie.imDbId)
    }
    console.log(imDbId)
  }

  return (
    <div className="body">
      <Aside setFilter={setFilter} />
      <main>
        <MovieList movieArray={movieArray} />
        <HeaderMain />
      </main>
    </div>
  )
}
