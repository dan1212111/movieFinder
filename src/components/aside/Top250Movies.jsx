import React from 'react'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Top250Movies() {
    const [top250Movies, setTop250Movies] = useState(null)
    
    useEffect(() => {
      fetch(`https://imdb-api.com/en/API/Top250Movies/k_x9gxptob`)
        .then((res) => res.json())
        .then((data) => setTop250Movies(data.items))
    }, [])
    console.log(top250Movies)
  
    if (!top250Movies) {
      return <p>Loading...</p>
    }

  return (
    <>
    <nav id="movie-list">
        {top250Movies.map((movie, index) => (
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
