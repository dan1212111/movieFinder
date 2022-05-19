import React from "react"
import { useState, useEffect } from "react"
import { handleTrailer } from "../handlers/handleTrailer.js"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import "@djthoms/pretty-checkbox"
import HeartIcon from "./heartIcon"

export default function MovieList({ movieArray }) {
  const [figureRating, setFigureRating] = useState("⭐️")
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === "/movies/fComingSoon") {
      setFigureRating(null)
    }
  }, [location.pathname])

  return (
    <nav id="movie-list">
      {movieArray.map((movie, index) => (
        <figure key={index} id="figure">
          <div id="figure-image">
            <img src={movie.image} alt={movie.fullTitle} />
          </div>
          <div className="figcaption">{movie.fullTitle}</div>
          <div className="figureImdbRating">
            <div className="figureRating">
              <p>
                {figureRating}
                {movie.imDbRating}
              </p>
            </div>
            <div className="imageOptions">
              <button
                onClick={() => {
                  handleTrailer(movie.id)
                }}
              >
                <div className="imageOptionsLeftSide">
                  <h3>Trailer</h3>
                </div>
              </button>
              <Link to={`/about-movie/${movie.id}`}>
                <div className="imageOptionsRightSide">
                  <h3>More Info</h3>
                </div>
              </Link>
            </div>
          </div>
          <HeartIcon movie={movie} />
        </figure>
      ))}
    </nav>
  )
}
