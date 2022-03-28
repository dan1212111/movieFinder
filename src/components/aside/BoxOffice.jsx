import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FilterArrAZ } from "./filters/FilterAZ"
import { handleTrailer } from "/Users/daniel/my-app/src/components/main/handleTrailer.js"

export default function BoxOffice(props) {
  const { boxOffice, filter } = props
  let movieArray = boxOffice

  if (filter === "filterAZ") {
    movieArray = FilterArrAZ(movieArray)
  }
  if (filter === "none") {
    movieArray = boxOffice
  }
  console.log(movieArray)

  return (
    <nav id="movie-list">
      {movieArray.map((movie, index) => (
        <figure key={index} id="figure">
          <div id="figure-image">
            <img src={movie.image} alt={movie.title} />
          </div>
          <div className="figcaption">{movie.title}</div>
          <div className="figureImdbRating">
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
