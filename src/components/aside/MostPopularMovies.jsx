import React from 'react'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import  {FilterArrAZ} from "./filters/FilterAZ"
import  {FilterAscendingImdbRating} from "./filters/FilterAscendingImdbRating"
import  {FilterDescendingImdbRating} from "./filters/FilterDescendingImdbRating"
import  {FilterAscendingYearRelease} from "./filters/FilterAscendingYearRelease"
import  {FilterDescendingYearRelease} from "./filters/FilterDescendingYearRelease"
import {handleTrailer} from "/Users/daniel/my-app/src/components/main/handleTrailer.js"

export default function MostPopularMovies(props) {
  const { mostPopularMovies, filter  } = props
  let movieArray = mostPopularMovies

  console.log(mostPopularMovies)

  if(filter ==="filterAZ") {
    movieArray = FilterArrAZ(movieArray)
  } if(filter === "ascendingImdbRating") {
    movieArray = FilterAscendingImdbRating(movieArray)
  } if(filter === "descendingImdbRating") {
    movieArray = FilterDescendingImdbRating(movieArray)
  } if(filter === "ascendingYearRelease") {
    movieArray = FilterAscendingYearRelease(movieArray)
  } if(filter === "descendingYearRelease") {
    movieArray = FilterDescendingYearRelease(movieArray)
  } if(filter === "none") {
    movieArray = mostPopularMovies
  }



  return (
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
              <button onClick= {() => {handleTrailer(movie.id)}}><div className="imageOptionsLeftSide">Trailer</div></button>
              <Link to={`/movie/${movie.id}`}>
                <div className="imageOptionsRightSide">
                  <h3>About</h3>
                </div>
              </Link>
            </div>
          </div>
        </figure>
      ))}
    </nav>
  )
}

