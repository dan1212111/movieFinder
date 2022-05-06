import React from 'react'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import  {FilterArrAZ} from "./filters/FilterAZ"
import  {FilterDescendingImdbRating} from "./filters/FilterDescendingImdbRating"
import  {FilterAscendingYearRelease} from "./filters/FilterAscendingYearRelease"
import  {FilterDescendingYearRelease} from "./filters/FilterDescendingYearRelease"
import {handleTrailer} from "/Users/danielmccarthy/movieFinder/src/components/main/handleTrailer.js"
import { handleClick } from "/Users/danielmccarthy/movieFinder/src/components/main/handleClick.js"
import Header from "/Users/danielmccarthy/movieFinder/src/header/Header.jsx"
import Aside from "./aside.jsx"
import "/Users/danielmccarthy/movieFinder/src/styles/header.css"
import { Checkbox } from 'pretty-checkbox-react';

import '@djthoms/pretty-checkbox'

export default function Top250TVs(props) {
  const { top250TVs } = props
  const [check, setCheck] = useState(false);
  const [filter, setFilter] = useState(null)
  let movieArray = top250TVs


  if(filter === "filterAZ") {
    movieArray = FilterArrAZ(movieArray)
  } if (filter === "descendingImdbRating") {
    movieArray = FilterDescendingImdbRating(movieArray)
  } if(filter === "ascendingYearRelease") {
    movieArray = FilterAscendingYearRelease(movieArray)
  } if(filter === "descendingYearRelease") {
    movieArray = FilterDescendingYearRelease(movieArray)
  } if(filter === "none") {
    movieArray = top250TVs
  }


  return (
    <>
    < Aside setFilter={setFilter}/>
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
              <button onClick= {() => {handleTrailer(movie.id)}}><div className="imageOptionsLeftSide"><h3>Trailer</h3></div></button>
              <Link to={`/about-movie/${movie.id}`}>
                <div className="imageOptionsRightSide">
                  <h3>More Info</h3>
                </div>
              </Link>
            </div>
          </div>
          <div className="heartIcon">
            <Checkbox  shape="round" style={{ fontSize: "40px" }} className="mdiHeartIcon" onChange={(e) => handleClick(e, movie)} icon={<i className="mdi mdi-heart-outline"  />} animation="jelly" />
            </div>
        </figure>
      ))}
    </nav>
<Header />
    </main>
    </>
  )
}
