import React from 'react'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Top250Movies(props) {
  const { top250Movies, filterAZ } = props
let movieArray = top250Movies

  if(filterAZ === true) {
    FilterArrAZ()
  } if (filterAZ === false) {
    movieArray = top250Movies
  }
  

  function FilterArrAZ() {
   const movieList = [...movieArray]
    movieList.sort(function(a, b) {
      let movieA= a.title.toLowerCase(), movieB= b.title.toLowerCase()
      if(movieA < movieB)
      return -1
      if (movieA > movieB)
      return 1
      return 0
    })
    movieArray = movieList
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
