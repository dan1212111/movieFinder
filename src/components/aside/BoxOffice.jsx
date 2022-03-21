import React from 'react'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function BoxOffice(props) {

  return (
    <>
    <nav id="movie-list">
        {props.boxOffice.map((movie, index) => (
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

