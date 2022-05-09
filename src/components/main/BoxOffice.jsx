import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { FilterArrAZ } from "../sideBar/filters/FilterAZ"
import { handleTrailer } from "./handlers/handleTrailer.js"
import Header from "/Users/danielmccarthy/movieFinder/src/header/Header.jsx"
import Aside from "../sideBar/SideBar"
import { Checkbox } from "pretty-checkbox-react"
import { handleClick } from "./handlers/handleClick.js"


import "@djthoms/pretty-checkbox"

export default function BoxOffice(props) {
  const { boxOffice } = props
  const [check, setCheck] = useState(true)
  let movieArray = boxOffice
  const [filter, setFilter] = useState(null)

  if (filter === "filterAZ") {
    movieArray = FilterArrAZ(movieArray)
  }
  if (filter === "none") {
    movieArray = boxOffice
  }

  return (
      <div className="body">
      <Aside setFilter={setFilter} />
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
        <Header />
      </main>
      </div>
  )
}
