import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FilterArrAZ } from "./filters/FilterAZ"
import { handleTrailer } from "/Users/danielmccarthy/movieFinder/src/components/main/handleTrailer.js"
import Aside from "/Users/danielmccarthy/movieFinder/src/aside.jsx"
import "/Users/danielmccarthy/movieFinder/src/styles/header.css"

export default function BoxOffice(props) {
  const { boxOffice} = props
  const [check, setCheck] = useState(false);
  let movieArray = boxOffice
  const [filter, setFilter] = useState(null)

  if (filter === "filterAZ") {
    movieArray = FilterArrAZ(movieArray)
  }
  if (filter === "none") {
    movieArray = boxOffice
  }
  console.log(movieArray)

  function handleClick(event) {
    const inputValue = event
    if(inputValue === false) {
      event = 'true'
    } if (inputValue === true) {
      event = 'false'
    }
    setCheck(inputValue)
    console.log(inputValue)
}

  return (
    <>
    < Aside setFilter={setFilter}/>
    <main>
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
                  <div className="imageOptionsLeftSide"><h3>Trailer</h3></div>
              </button>
              <Link to={`/movie/${movie.id}`}>
                <div className="imageOptionsRightSide">
                  <h3>About</h3>
                </div>
              </Link>
            </div>
            <input
              type="checkbox"
              value="false"
              onChange={(e) => handleClick(e.target.checked)}
              id="input_star"
              name="starInput"
            ></input>
            
          </div>
        </figure>
      ))}
    </nav>
    <header>
    <nav id="main-header">
      <div className= "main-header-navigation">
      <ul>
        <Link to="/myMovies">
          <li><h3>WatchList</h3></li>
        </Link>
      </ul>
      </div>
    </nav>
  </header>
    </main>
    </>
  )
}
