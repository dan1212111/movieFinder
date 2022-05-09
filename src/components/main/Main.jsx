import React from "react"
import Header from "/Users/danielmccarthy/movieFinder/src/header/Header.jsx"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { handleTrailer } from "./handlers/handleTrailer"
import Aside from "../sideBar/SideBar.jsx"
import { FilterArrAZ } from "/Users/danielmccarthy/movieFinder/src/components/sideBar/filters/FilterAZ.js"
import { FilterDescendingImdbRating } from "/Users/danielmccarthy/movieFinder/src/components/sideBar/filters/FilterDescendingImdbRating.js"
import { FilterAscendingYearRelease } from "/Users/danielmccarthy/movieFinder/src/components/sideBar/filters/FilterAscendingYearRelease.js"
import { FilterDescendingYearRelease } from "/Users/danielmccarthy/movieFinder/src/components/sideBar/filters/FilterDescendingYearRelease.js"
import { handleClick } from "./handlers/handleClick.js"
import { Checkbox, useCheckboxState } from "pretty-checkbox-react"
import "@djthoms/pretty-checkbox"

export default function Main(props) {
  const [popularMovies, setPopularMovies] = useState(null)
  const [checked, setChecked] = useState(false);
  const { top250Movies } = props
  const [filter, setFilter] = useState(null)
  const [watchlist, setWatchlist] = useState(null)
  let movieArray = top250Movies
  let imDbId = []
  // const checkbox = useCheckboxState()

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

  //add a filter options that checked movie ID to see if they match/ if yes - then check the checkbox

  useEffect(() => {
    const options = {
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    }
    fetch(`http://localhost:4000/movie`, options)
      .then((res) => res.json())
      .then((data) => getWatchlistMovieId(data.data.watchlist))
  }, [])

  if (!popularMovies) {
    return <p>Loading...</p>
  }

  function getWatchlistMovieId(data) {
    for (const movie of data) {
      imDbId.push(movie.imDbId)
    }
    console.log(imDbId)
  }

  const getChecked = (movie) =>  {
    // for(let i = 0; i <popularMovies.length; i++) {
      if (movie.id === 'tt0068646') {
        // setChecked(true)
      //   console.log(event)
        // checkbox.state = true
        // console.log(checkbox)
        // checkbox = {checked: "true"}
        console.log("works")
        // Checkbox = true
      }
    // }
  }
  
  const toggleChecked = () => setChecked(value => !value);


  return (
    <div className="body">
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
                  <Link to={`/about-movie/${movie.id}`}>
                    <div className="imageOptionsRightSide">
                      <h3>More Info</h3>
                    </div>
                  </Link>
                </div>
                <div className="heartIcon">
                  <Checkbox
                    // checked = {checked}
                    shape="round"
                    style={{ fontSize: "40px" }}
                    className="mdiHeartIcon"
                    onChange={(e) => {handleClick(e, movie); toggleChecked() }}
                    icon={<i className="mdi mdi-heart-outline" />}
                    animation="jelly"
                    // onLoad = {getChecked(movie)}
                  />
                  {getChecked(movie)}
                </div>
              </div>
            </figure>
          ))}
        </nav>
        <Header />
      </main>
      </div>
  )
}
