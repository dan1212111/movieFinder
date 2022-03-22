import React from 'react'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import  {FilterArrAZ} from "./filters/FilterAZ"
import  {FilterAscendingImdbRating} from "./filters/FilterAscendingImdbRating"
import  {FilterDescendingImdbRating} from "./filters/FilterDescendingImdbRating"

export default function MostPopularMovies(props) {
  const { mostPopularMovies, filterAZ, ascendingImdbRating, descendingImdbRating } = props
  let movieArray = mostPopularMovies

  useEffect(() => {
  movieArray = mostPopularMovies
  }, [mostPopularMovies])

  if(filterAZ === true) {
    movieArray = FilterArrAZ(mostPopularMovies)
  } if(filterAZ === false && ascendingImdbRating === true) {
    movieArray = FilterAscendingImdbRating(mostPopularMovies)
  } if (filterAZ === true && ascendingImdbRating === false) {
    movieArray = FilterArrAZ(mostPopularMovies)
  } if(filterAZ === true && ascendingImdbRating === true) {
    FilterArrAZ(FilterAscendingImdbRating(mostPopularMovies))
  } if(filterAZ === false && ascendingImdbRating === false) {
    movieArray = mostPopularMovies
  }if(descendingImdbRating === true) {
    movieArray = FilterDescendingImdbRating(mostPopularMovies)
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

