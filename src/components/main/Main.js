import React from "react"
import "/Users/daniel/my-app/src/styles/styles.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


export default function Main() {
  const [popularMovies, setPopularMovies] = useState(null)
  // When the use clicked - triggeres event param find trailer link and then sent you to it. This
  
  useEffect(() => {
    fetch(`https://imdb-api.com/en/API/MostPopularMovies/k_x9gxptob`)
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.items))
  }, [])
  console.log(popularMovies)

  if (!popularMovies) {
    return <p>Loading...</p>
  }


  return (
      <>
    <nav id="movie-list">
        {popularMovies.map((movie, index) => (
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
