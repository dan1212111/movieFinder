import React from "react"
import { Link } from "react-router-dom"
import "/Users/danielmccarthy/movieFinder/src/styles/watchlist.css"
import "/Users/danielmccarthy/movieFinder/src/styles/header.css"
import { handleClick } from "/Users/danielmccarthy/movieFinder/src/components/main/handleClick.js"
import Header from "../../header/Header"
import { handleTrailer } from "./handleTrailer"
import { useState, useEffect } from "react"
import { Checkbox } from "pretty-checkbox-react"
import "@djthoms/pretty-checkbox"

export default function Watchlist() {
  const [myMovieInfo, setMyMovieInfo] = useState("")

  useEffect(() => {
    const options = {
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    }
    fetch(`http://localhost:4000/movie`, options)
      .then((res) => res.json())
      .then((data) => setMyMovieInfo(data.data.watchlist))
  }, [])

  function formatDateToString() {
    const d = new Date()
    // var dd = (d.getDate() < 10 ? "0" : "") + d.getDate()
    // var MM = (d.getMonth() + 1 < 10 ? "0" : "") + (d.getMonth() + 1)
    var yyyy = d.getFullYear()
    return yyyy
  }

  function filterAfterReleaseDate() {
    const cDate = formatDateToString()
    const afterReleaseDateArr = myMovieInfo.filter(
      (movie) => movie.year < cDate
    )
    console.log(afterReleaseDateArr)
    console.log(cDate)
    return afterReleaseDateArr
  }
  function filterBeforeReleaseDate() {
    const cDate = formatDateToString()
    const beforeReleaseDateArr = myMovieInfo.filter(
      (movie) => movie.year >= cDate
    )
    console.log(beforeReleaseDateArr)
    return beforeReleaseDateArr
  }

  console.log(myMovieInfo)
  if (!myMovieInfo) {
    return <p>Loading...</p>
  }
  if (myMovieInfo) {
    filterAfterReleaseDate()
    filterBeforeReleaseDate()
  }

  return (
    <div className="main_Container">
      <div className="main_container1">
        <div className="headerTitle">
          <h2>MY MOVIES</h2>
          <h3>UPCOMING RELEASE:</h3>
        </div>
        <nav id="movie-list-main">
          {filterBeforeReleaseDate().map((movie, index) => (
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
                  <Link to={`/movie/${movie.imDbId}`}>
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
                    onChange={(e) => {
                      handleClick(e, movie)
                    }}
                    icon={<i className="mdi mdi-heart-outline" />}
                    animation="jelly"
                    // onLoad = {getChecked(movie)}
                  />
                  {/* {getChecked(movie)} */}
                </div>
              </div>
            </figure>
          ))}
        </nav>
      </div>
      <div className="main_container2">
        <div className="headerTitle2">
          <h3>OUT NOW:</h3>
        </div>
        <nav id="movie-list-main2">
          {filterAfterReleaseDate().map((movie, index) => (
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
                    // checked = {checked}
                    shape="round"
                    style={{ fontSize: "40px" }}
                    className="mdiHeartIcon"
                    onChange={(e) => {
                      handleClick(e, movie)
                    }}
                    icon={<i className="mdi mdi-heart-outline" />}
                    animation="jelly"
                    // onLoad = {getChecked(movie)}
                  />
                  {/* {getChecked(movie)} */}
                </div>
              </div>
            </figure>
          ))}
        </nav>
      </div>
      <Header />
    </div>
  )
}
