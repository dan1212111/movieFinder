
import React from "react"
import "/Users/danielmccarthy/movieFinder/src/styles/styles.css"
import "/Users/danielmccarthy/movieFinder/src/styles/header.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { handleTrailer } from "./handleTrailer"
import { ReactComponent as Bookmark } from "./bookmark.svg"
import Aside from "/Users/danielmccarthy/movieFinder/src/aside.jsx"

export default function Main() {
  const [popularMovies, setPopularMovies] = useState(null)
  const [check, setCheck] = useState(false);
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
      < Aside />
    <main>
    <nav id="movie-list">
      {popularMovies.map((movie, index) => (
        <figure key={index} id="figure">
          {/* Code underneath works wells */}
          <div id="figure-image">
            <img src={movie.image} alt={movie.fullTitle} />
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
                <div className="imageOptionsLeftSide"><h3>Trailer</h3></div>
              </button>
              <Link to={`/movie/${movie.id}`}>
                <div className="imageOptionsRightSide">
                  <h3>More Info</h3>
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
            
            {/* </label> */}
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
