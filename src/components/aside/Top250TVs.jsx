import React from 'react'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Top250TVs() {
    const [Top250TVs, setTop250TVs] = useState(null)
    
    useEffect(() => {
      fetch(`https://imdb-api.com/en/API/Top250TVs/k_x9gxptob`)
        .then((res) => res.json())
        .then((data) => setTop250TVs(data.items))
    }, [])
    console.log(Top250TVs)
  
    if (!Top250TVs) {
      return <p>Loading...</p>
    }

  return (
    <>
    <nav id="movie-list">
        {Top250TVs.map((movie, index) => (
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
