import React from "react"
import { useState } from "react"
import { FilterArrAZ } from "../sideBar/filters/FilterAZ"
import { FilterAscendingImdbRating } from "../sideBar/filters/FilterAscendingImdbRating"
import { FilterDescendingImdbRating } from "../sideBar/filters/FilterDescendingImdbRating"
import { FilterAscendingYearRelease } from "../sideBar/filters/FilterAscendingYearRelease"
import { FilterDescendingYearRelease } from "../sideBar/filters/FilterDescendingYearRelease"
import HeaderMain from "../header/HeaderMain.jsx"
import Aside from "../sideBar/SideBar.jsx"
import "../../styles/header.css"
import MovieList from "./movieList/movieList"

import "@djthoms/pretty-checkbox"

export default function MostPopularMovies(props) {
  const { mostPopularMovies } = props
  const [filter, setFilter] = useState(null)
  let movieArray = mostPopularMovies

  if (filter === "filterAZ") {
    movieArray = FilterArrAZ(movieArray)
  }
  if (filter === "ascendingImdbRating") {
    movieArray = FilterAscendingImdbRating(movieArray)
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
    movieArray = mostPopularMovies
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
