import React from 'react'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import  {FilterArrAZ} from "./filters/FilterAZ"
import  {FilterAscendingYearRelease} from "./filters/FilterAscendingYearRelease"
import  {FilterDescendingYearRelease} from "./filters/FilterDescendingYearRelease"

export default function ComingSoon(props) {
  const { comingSoon, filterAZ, ascendingYearRelease, descendingYearRelease } = props
  let movieArray = comingSoon

  useEffect(() => {
  movieArray = comingSoon
  }, [comingSoon])

  if(filterAZ === true) {
    movieArray = FilterArrAZ(movieArray)
  } if(ascendingYearRelease === true) {
    movieArray = FilterAscendingYearRelease(movieArray)
  } if(descendingYearRelease === true) {
    movieArray = FilterDescendingYearRelease(movieArray)
  }



  return (
    <>
    <nav id="movie-list">
        {movieArray.map((movie, index) => (
            <Link to={`/movie/${movie.id}`}>
             <figure key={index}>
             <div id='figure-image'>
             <img src={movie.image} alt={movie.fullTitle} />
             </div>
             <figcaption>
               <p>{movie.fullTitle} ImDb:{movie.imDbRating}</p>
             </figcaption>
           </figure>
           </Link>
        ))}
  </nav>
  </>
  )
}
