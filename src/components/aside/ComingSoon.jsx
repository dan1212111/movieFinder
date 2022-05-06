import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { FilterArrAZ } from "./filters/FilterAZ"
import { FilterAscendingYearRelease } from "./filters/FilterAscendingYearRelease"
import Header from "/Users/danielmccarthy/movieFinder/src/header/Header.jsx"
import { FilterDescendingYearRelease } from "./filters/FilterDescendingYearRelease"
import { handleTrailer } from "/Users/danielmccarthy/movieFinder/src/components/main/handleTrailer.js"
import "/Users/danielmccarthy/movieFinder/src/styles/header.css"
import Aside from "./aside.jsx"
import { Checkbox } from 'pretty-checkbox-react';
import { handleClick } from "/Users/danielmccarthy/movieFinder/src/components/main/handleClick.js"

import '@djthoms/pretty-checkbox'

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
    <>
    < Aside setFilter={setFilter}/>
    <main>
    <nav id="movie-list">
      {movieArray.map((movie, index) => (
        <figure key={index} id="figure">
          <div id="figure-image">
            <img src={movie.image} alt={movie.fullTitle} />
          </div>
          <div className="figcaption">{movie.fullTitle}</div>
          <div className="figureImdbRating">
            <div className="imageOptions">
              <button
                onClick={() => {
                  handleTrailer(movie.id)
                }}
              >
                 <div className="imageOptionsLeftSide"><h3>Trailer</h3></div>
              </button>
              <Link to={`/about-movie/${movie.id}`}>
                <div className="imageOptionsRightSide">
                  <h3>More Info</h3>
                </div>
              </Link>
            </div>
          </div>
          <div className="heartIcon">
            <Checkbox  shape="round" style={{ fontSize: "40px" }} className="mdiHeartIcon" onChange={(e) => handleClick(e, movie)} icon={<i className="mdi mdi-heart-outline"  />} animation="jelly" />
            </div>
        </figure>
      ))}
    </nav>
<Header/>
    </main>
    </>
  )
}
