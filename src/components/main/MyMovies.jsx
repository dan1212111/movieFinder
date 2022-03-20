import React from "react"
import { Link } from "react-router-dom"
import "/Users/daniel/my-app/src/styles/myMovie.css"
import { useState, useEffect } from "react"

export default function MyMovies() {
  const [myMovieInfo, setMyMovieInfo] = useState("")

  useEffect(() => {
    fetch(`http://localhost:4000/movies`)
      .then((res) => res.json())
      .then((data) => setMyMovieInfo(data))
  }, [])

  function formatDateToString() {
    const d = new Date()
    var dd = (d.getDate() < 10 ? "0" : "") + d.getDate()
    var MM = (d.getMonth() + 1 < 10 ? "0" : "") + (d.getMonth() + 1)
    var yyyy = d.getFullYear()
    return yyyy + "-" + MM + "-" + dd
  }

  function filterAfterReleaseDate() {
    const cDate = formatDateToString()
    const afterReleaseDateArr = myMovieInfo.filter(
      (movie) => movie.releaseDate <= cDate
    )
    return afterReleaseDateArr
  }
  function filterBeforeReleaseDate() {
    const cDate = formatDateToString()
    const beforeReleaseDateArr = myMovieInfo.filter(
      (movie) => movie.releaseDate > cDate
    )
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
      <div className="header">
        <h2>MY MOVIES</h2>
      </div>
      <div className="main1">
        <h3>UPCOMING RELEASE:</h3>
        <div className="container1">
          {filterBeforeReleaseDate().map((movie) => (
               <Link to={`/movie/${movie.id}`}>
            <div className="movieFigure">
              <div className="movieFigureImage">
                <img src={movie.image} alt={movie.name}></img>
              </div>
              <div className="movieFigcaption">
                {" "}
                <h4>{movie.fullTitle}</h4>
                <h5>{movie.releaseDate}</h5>
                {/* <p>{movie.imDbRating}</p> */}
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="main2">
        <h3>OUT NOW:</h3>
        <div className="container2">
        {filterAfterReleaseDate().map((movie) => (
               <Link to={`/movie/${movie.id}`}>
            <div className="movieFigure">
              <div className="movieFigureImage">
                <img src={movie.image} alt={movie.name}></img>
              </div>
              <div className="movieFigcaption">
                {" "}
                <h4>{movie.fullTitle}</h4>
                {/* <p>{movie.imDbRating}</p> */}
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
