import React from 'react'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import  {FilterArrAZ} from "./filters/FilterAZ"

export default function BoxOffice(props) {
  const { boxOffice, filterAZ } = props
  let movieArray = boxOffice

  useEffect(() => {
  movieArray = boxOffice
  }, [boxOffice])

  if(filterAZ === true) {
    movieArray = FilterArrAZ(boxOffice)
  } if (filterAZ === false) {
    movieArray = boxOffice
  }
console.log(movieArray)
  return (
    <>
    <nav id="movie-list">
        {movieArray.map((movie, index) => (
            <Link to={`/movie/${movie.id}`}>
             <figure key={index}>
             <div id='figure-image'>
             <img src={movie.image} alt={movie.title} />
             </div>
             <figcaption>
               <p>{movie.title} weeks:{movie.weeks}</p>
             </figcaption>
           </figure>
           </Link>
        ))}
  </nav>
  </>
  )
}

