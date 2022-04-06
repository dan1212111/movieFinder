import React from 'react'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import  {FilterArrAZ} from "./filters/FilterAZ"
import  {FilterDescendingImdbRating} from "./filters/FilterDescendingImdbRating"
import  {FilterAscendingYearRelease} from "./filters/FilterAscendingYearRelease"
import  {FilterDescendingYearRelease} from "./filters/FilterDescendingYearRelease"
import {handleTrailer} from "/Users/danielmccarthy/movieFinder/src/components/main/handleTrailer.js"
import Aside from "/Users/danielmccarthy/movieFinder/src/aside.jsx"
import "/Users/danielmccarthy/movieFinder/src/styles/header.css"

export default function Top250Movies(props) {
  const { top250Movies,  } = props
  const [check, setCheck] = useState(false);
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

  function handleClick(event) {
    const inputValue = event
    if(inputValue === false) {
      event = 'true'
    } if (inputValue === true) {
      event = 'false'
    }
    setCheck(inputValue)
    console.log(inputValue)
}

  return (
    <>
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
              <Link to={`/movie/${movie.id}`}>
                <div className="imageOptionsRightSide">
                  <h3>More Info</h3>
                </div>
              </Link>
            </div>
          </div>
          <input
              type="checkbox"
              value="false"
              onChange={(e) => handleClick(e.target.checked)}
              id="input_star"
              name="starInput"
            ></input>
        </figure>
      ))}
    </nav>
    <header>
    <nav id="main-header">
      <div className= "main-header-navigation">
      <ul>
        <Link to="/myMovies">
          <li><h3>WatchList</h3></li>
        </Link>
      </ul>
      </div>
    </nav>
  </header>
    </main>
    </>
  )
}
