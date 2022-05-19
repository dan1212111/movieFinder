import React from "react"
import { useState } from "react"
import { FilterArrAZ } from "../sideBar/filters/FilterAZ"
import { FilterDescendingImdbRating } from "../sideBar/filters/FilterDescendingImdbRating"
import { FilterAscendingYearRelease } from "../sideBar/filters/FilterAscendingYearRelease"
import { FilterDescendingYearRelease } from "../sideBar/filters/FilterDescendingYearRelease"
import HeaderMain from "../header/HeaderMain.jsx"
import Aside from "../sideBar/SideBar.jsx"
import "../../styles/header.css"
import MovieList from "./movieList/movieList"

import "@djthoms/pretty-checkbox"

export default function Top250TVs(props) {
  const { top250TVs } = props
  const [filter, setFilter] = useState(null)
  let movieArray = top250TVs

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
    movieArray = top250TVs
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
