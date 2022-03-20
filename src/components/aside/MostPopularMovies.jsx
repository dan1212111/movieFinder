import React from 'react'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function MostPopularMovies() {
    const [MostPopularMovies, setMostPopularMovies] = useState(null)
    
    useEffect(() => {
      fetch(`https://imdb-api.com/en/API/MostPopularMovies/k_x9gxptob`)
        .then((res) => res.json())
        .then((data) => setMostPopularMovies(data.items))
    }, [])
    console.log(MostPopularMovies)
  
    if (!MostPopularMovies) {
      return <p>Loading...</p>
    }

  return (
    <>
    <nav id="movie-list">
        {MostPopularMovies.map((movie, index) => (
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

