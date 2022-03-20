import React from 'react'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function ComingSoon() {
    const [ComingSoon, setComingSoon] = useState(null)
    
    useEffect(() => {
      fetch(`https://imdb-api.com/en/API/ComingSoon/k_x9gxptob`)
        .then((res) => res.json())
        .then((data) => setComingSoon(data.items))
    }, [])
    console.log(ComingSoon)
  
    if (!ComingSoon) {
      return <p>Loading...</p>
    }

  return (
    <>
    <nav id="movie-list">
        {ComingSoon.map((movie, index) => (
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
