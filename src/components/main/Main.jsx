import React from "react"
import "/Users/danielmccarthy/movieFinder/src/styles/styles.css"
import "/Users/danielmccarthy/movieFinder/src/styles/header.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { handleTrailer } from "./handleTrailer"
import Aside from "../aside/aside.jsx"
import { FilterArrAZ } from "/Users/danielmccarthy/movieFinder/src/components/aside/filters/FilterAZ.js"
import { FilterDescendingImdbRating } from "/Users/danielmccarthy/movieFinder/src/components/aside/filters/FilterDescendingImdbRating.js"
import { FilterAscendingYearRelease } from "/Users/danielmccarthy/movieFinder/src/components/aside/filters/FilterAscendingYearRelease.js"
import { FilterDescendingYearRelease } from "/Users/danielmccarthy/movieFinder/src/components/aside/filters/FilterDescendingYearRelease.js"
import { handleClick } from "/Users/danielmccarthy/movieFinder/src/components/main/handleClick.js"
import { Checkbox } from "pretty-checkbox-react"
import "@djthoms/pretty-checkbox"

export default function Main(props) {
  const [popularMovies, setPopularMovies] = useState(null)
  const [check, setCheck] = useState()
  const { top250Movies } = props
  const [filter, setFilter] = useState(null)
  let movieArray = top250Movies

  if (filter === "filterAZ") {
    movieArray = FilterArrAZ(movieArray)
  }
  if (filter === "descendingImdbRating") {
    movieArray = FilterDescendingImdbRating(movieArray)
  }
  if (filter === "ascendingYearRelease") {
    movieArray = FilterAscendingYearRelease(movieArray)
  }
  if (filter === "descendingYearRelease") {
    movieArray = FilterDescendingYearRelease(movieArray)
  }
  if (filter === "none") {
    movieArray = top250Movies
  }

  useEffect(() => {
    if (!popularMovies) {
      fetch(`https://imdb-api.com/en/API/MostPopularMovies/k_x9gxptob`)
        .then((res) => res.json())
        .then((data) => setPopularMovies(data.items))
    }
  }, [popularMovies])

  if (!popularMovies) {
    return <p>Loading...</p>
  }

  //get all added movies/ if movieID match - set the heart emoji automatically
  

  return (
    <>
      <Aside setFilter={setFilter} />
      <main>
        <nav id="movie-list">
          {movieArray.map((movie, index) => (
            <figure key={index} id="figure">
              <div id="figure-image">
                <img src={movie.image} alt={movie.fullTitle} />
              </div>
              <div className="figcaption">{movie.fullTitle}</div>
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
                    <div className="imageOptionsLeftSide">
                      <h3>Trailer</h3>
                    </div>
                  </button>
                  <Link to={`/movie/${movie.id}`}>
                    <div className="imageOptionsRightSide">
                      <h3>More Info</h3>
                    </div>
                  </Link>
                </div>
                <div className="heartIcon">
                  <Checkbox
                    shape="round"
                    style={{ fontSize: "40px" }}
                    className="mdiHeartIcon"
                    onChange={(e) => handleClick(e, movie)}
                    icon={<i className="mdi mdi-heart-outline" />}
                    animation="jelly"
                  />
                </div>
              </div>
            </figure>
          ))}
        </nav>
        <header>
          <nav id="main-header">
            <div className="main-header-navigation">
              <ul>
                <Link to="/myMovies">
                  <li>
                    <h3>WatchList</h3>
                  </li>
                </Link>
                <Link to="/login">
                  <li>
                    <h3>Login</h3>
                  </li>
                </Link>
              </ul>
            </div>
          </nav>
        </header>
      </main>
    </>
  )
}
