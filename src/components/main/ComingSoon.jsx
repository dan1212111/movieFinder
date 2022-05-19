import React from "react"
import { useState } from "react"
import { FilterArrAZ } from "../sideBar/filters/FilterAZ"
import { FilterAscendingYearRelease } from "../sideBar/filters/FilterAscendingYearRelease"
import HeaderMain from "../header/HeaderMain.jsx"
import { FilterDescendingYearRelease } from "../sideBar/filters/FilterDescendingYearRelease"
import "../../styles/header.css"
import Aside from "../sideBar/SideBar.jsx"
import MovieList from "./movieList/movieList"

import "@djthoms/pretty-checkbox"

export default function ComingSoon(props) {
  const { comingSoon } = props
  const [filter, setFilter] = useState(null)
  let movieArray = comingSoon

  if (filter === "filterAZ") {
    movieArray = FilterArrAZ(movieArray)
  }
  if (filter === "ascendingYearRelease") {
    movieArray = FilterAscendingYearRelease(movieArray)
  }
  if (filter === "descendingYearRelease") {
    movieArray = FilterDescendingYearRelease(movieArray)
  }
  if (filter === "none") {
    movieArray = comingSoon
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
