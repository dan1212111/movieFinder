import React from 'react'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import  {FilterArrAZ} from "../sideBar/filters/FilterAZ"
import  {FilterDescendingImdbRating} from "../sideBar/filters/FilterDescendingImdbRating"
import  {FilterAscendingYearRelease} from "../sideBar/filters/FilterAscendingYearRelease"
import  {FilterDescendingYearRelease} from "../sideBar/filters/FilterDescendingYearRelease"
import { handleTrailer } from "./handlers/handleTrailer.js"
import { handleClick } from "./handlers/handleClick.js"
import Header from "../header/Header.jsx"
import Aside from "../sideBar/SideBar.jsx"
import "/Users/danielmccarthy/movieFinder/src/styles/header.css"
import { Checkbox } from 'pretty-checkbox-react';

import '@djthoms/pretty-checkbox'

export default function Top250Movies(props) {
  const { top250Movies,  } = props
  let movieArray = top250Movies
  const [filter, setFilter] = useState(null)

  if(filter === "filterAZ") {
    movieArray = FilterArrAZ(movieArray)
  } if(filter === "descendingImdbRating") {
    movieArray = FilterDescendingImdbRating(movieArray)
  } if(filter === "ascendingYearRelease") {
    movieArray = FilterAscendingYearRelease(movieArray)
  } if(filter === "descendingYearRelease") {
    movieArray = FilterDescendingYearRelease(movieArray)
  } if(filter === "none") {
    movieArray = top250Movies
  }

  console.log(filter)
  console.log(filter)


  return (

        <div className="body">
    < Aside setFilter={setFilter} />
    <main>
    <nav id="movie-list">
      {movieArray.map((movie, index) => (
        <figure key={index} id="figure">
          <div id="figure-image">
            <img src={movie.image} alt={movie.fullTitle} />
          </div>
          <div className="figcaption">{movie.fullTitle}</div>
          <div className="figureImdbRating">
            <div className="figureRating">
              <p>⭐️{movie.imDbRating}</p>
            </div>
            <div className="imageOptions">
              <button onClick= {() => {handleTrailer(movie.id)}}><div className="imageOptionsLeftSide"><h3>Trailer</h3></div></button>
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
<Header />
    </main>
    </div>
  )
}
