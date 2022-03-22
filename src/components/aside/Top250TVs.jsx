import React from 'react'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import  {FilterArrAZ} from "./filters/FilterAZ"
import  {FilterDescendingImdbRating} from "./filters/FilterDescendingImdbRating"

export default function Top250TVs(props) {
  const { top250TVs, filterAZ, descendingImdbRating } = props
  let movieArray = top250TVs

  useEffect(() => {
  movieArray = top250TVs
  }, [top250TVs])

  if(filterAZ === true) {
    movieArray = FilterArrAZ(top250TVs)
  } if(filterAZ === false && descendingImdbRating === true) {
    movieArray = FilterDescendingImdbRating(top250TVs)
  } if (filterAZ === true && descendingImdbRating === false) {
    movieArray = FilterArrAZ(top250TVs)
  } if(filterAZ === true && descendingImdbRating === true) {
    FilterArrAZ(FilterDescendingImdbRating(top250TVs))
  } if(filterAZ === false && descendingImdbRating === false) {
    movieArray = top250TVs
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
