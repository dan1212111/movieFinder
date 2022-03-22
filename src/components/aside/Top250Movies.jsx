import React from 'react'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import  {FilterArrAZ} from "./filters/FilterAZ"
import  {FilterDescendingImdbRating} from "./filters/FilterDescendingImdbRating"

export default function Top250Movies(props) {
  const { top250Movies, filterAZ, descendingImdbRating } = props
  let movieArray = top250Movies

  useEffect(() => {
  movieArray = top250Movies
  }, [top250Movies])


  if(filterAZ === true) {
    movieArray = FilterArrAZ(top250Movies)
  } if(filterAZ === false && descendingImdbRating === true) {
    movieArray = FilterDescendingImdbRating(top250Movies)
  } if (filterAZ === true && descendingImdbRating === false) {
    movieArray = FilterArrAZ(top250Movies)
  } if(filterAZ === true && descendingImdbRating === true) {
    FilterArrAZ(FilterDescendingImdbRating(top250Movies))
  } if(filterAZ === false && descendingImdbRating === false) {
    movieArray = top250Movies
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
