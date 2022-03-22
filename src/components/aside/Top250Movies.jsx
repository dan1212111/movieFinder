import React from 'react'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import  {FilterArrAZ} from "./filters/FilterAZ"
import  {FilterDescendingImdbRating} from "./filters/FilterDescendingImdbRating"
import  {FilterAscendingYearRelease} from "./filters/FilterAscendingYearRelease"
import  {FilterDescendingYearRelease} from "./filters/FilterDescendingYearRelease"

export default function Top250Movies(props) {
  const { top250Movies, filterAZ, descendingImdbRating, ascendingYearRelease, descendingYearRelease } = props
  let movieArray = top250Movies

  useEffect(() => {
  movieArray = top250Movies
  }, [top250Movies])


  if(filterAZ === true) {
    movieArray = FilterArrAZ(movieArray)
  } if(descendingImdbRating === true) {
    movieArray = FilterDescendingImdbRating(movieArray)
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
