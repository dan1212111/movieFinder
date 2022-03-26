import React from "react"
import "/Users/daniel/my-app/src/styles/styles.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { handleTrailer } from "./handleTrailer"

export default function Main() {
  const [popularMovies, setPopularMovies] = useState(null)
  // const navigate = useNavigate()
  // When the use clicked - triggeres event param find trailer link and then sent you to it. This

  useEffect(() => {
    if (!popularMovies) {
      fetch(`https://imdb-api.com/en/API/MostPopularMovies/k_x9gxptob`)
        .then((res) => res.json())
        .then((data) => setPopularMovies(data.items))
    }
  }, [popularMovies])
  console.log(popularMovies)

  if (!popularMovies) {
    return <p>Loading...</p>
  }

  return (
    <nav id="movie-list">
      {popularMovies.map((movie, index) => (
        <figure key={index} id="figure">
          {/* Code underneath works wells */}
          <div id="figure-image">
            <img src={movie.image} alt={movie.fullTitle}/>
          </div>
          <div className="figcaption">{movie.fullTitle}</div>
          {/* Code underneath on second line */}
          <div className="figureImdbRating">
            <div className="figureRating">
              <p>⭐️{movie.imDbRating}</p>
            </div>
            <div className="imageOptions">
              <button
                onClick={() => {
                  handleTrailer(movie.id)
                }}
              >
                <div className="imageOptionsLeftSide">Trailer</div>
              </button>
              <Link to={`/movie/${movie.id}`}>
                <div className="imageOptionsRightSide">
                  <h3>About</h3>
                </div>
              </Link>
            </div>
          </div>
        </figure>
      ))}
    </nav>
  )
}
