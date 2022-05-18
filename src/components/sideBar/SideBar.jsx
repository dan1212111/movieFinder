import React from "react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "../../styles/sideBar.css"

export default function SideBar(props) {
  const [filterValue, setFilterValue] = useState(null)
  const location = useLocation()
  let visibilityAZ = "visible"
  let visibilityAscRating = "visible"
  let visibilityDescRating = "visible"
  let visibilityAscYear = "visible"
  let visibilityDescYear = "visible"
  let visibilityNone = "visible"

  function handleFilter(event) {
    const inputValue = event.target.value
    props.setFilter(inputValue)
    setFilterValue(inputValue)
  }

  if (location.pathname === "/movies/fBoxOffice") {
    visibilityAscRating = "none"
    visibilityDescRating = "none"
    visibilityAscYear = "none"
    visibilityDescYear = "none"
  }
  if (location.pathname === "/movies/fComingSoon") {
    visibilityAscRating = "none"
    visibilityDescRating = "none"
  }
  if (
    location.pathname === "/movies/fTop250Movies" ||
    location.pathname === "/movies/fTop250TVs" ||
    location.pathname === "/"
  ) {
    visibilityAscRating = "none"
  }

  return (
    <>
      <aside id="left-side-navigation">
        <div className="movie-title">
          <h2>Movie Finder</h2>
        </div>
        <div className="filter_Big_Container1">
          <Link to="/movies/fBoxOffice">
            <button>
              <h4>BoxOffice</h4>
            </button>
          </Link>
          <Link to="/movies/fComingSoon">
            <button>
              <h4>Coming Soon</h4>
            </button>
          </Link>
          <Link to="/movies/fTop250Movies">
            <button>
              <h4>Top250Movies</h4>
            </button>
          </Link>
          <Link to="/movies/fTop250TVs">
            <button>
              <h4>Top250TVs</h4>
            </button>
          </Link>
          <Link to="/movies/fMostPopularMovies">
            <button>
              <h4>MostPopularMovies</h4>
            </button>
          </Link>
        </div>
        <div className="filter_Big_Container2">
          <div className="filterTxt">
            <h3>Optional Filters:</h3>
          </div>
          <div className="filterOptions">
            <label style={{ display: visibilityAZ }}>
              <input
                type="radio"
                name="filterAZ"
                value="filterAZ"
                id="filterAZ"
                onChange={handleFilter}
                checked={filterValue === "filterAZ"}
              />
              <h3>A-Z</h3>
            </label>
            <label style={{ display: visibilityAscRating }}>
              <input
                type="radio"
                name="filterAscendingImdbRating"
                value="ascendingImdbRating"
                id="filterAscendingImdbRating"
                onChange={handleFilter}
                checked={filterValue === "ascendingImdbRating"}
              />
              <h3>Desc Rating</h3>
            </label>
            <label style={{ display: visibilityDescRating }}>
              <input
                type="radio"
                name="filterDescendingImdbRating"
                id="filterDescendingImdbRating"
                value="descendingImdbRating"
                onChange={handleFilter}
                checked={filterValue === "descendingImdbRating"}
              />
              <h3>Asc Rating</h3>
            </label>
            <label style={{ display: visibilityAscYear }}>
              <input
                type="radio"
                name="filterAscendingYearRelease"
                id="filterAscendingYearRelease"
                value="ascendingYearRelease"
                onChange={handleFilter}
                checked={filterValue === "ascendingYearRelease"}
              />
              <h3>Desc Year</h3>
            </label>
            <label style={{ display: visibilityDescYear }}>
              <input
                type="radio"
                name="filterDescendingYearRelease"
                id="filterDescendingYearRelease"
                value="descendingYearRelease"
                onChange={handleFilter}
                checked={filterValue === "descendingYearRelease"}
              />
              <h3>Asc Year</h3>
            </label>
            <label style={{ display: visibilityNone }}>
              <input
                type="radio"
                name="filterNone"
                id="filterNone"
                value="none"
                onChange={handleFilter}
                checked={filterValue === "none"}
              />
              <h3>None</h3>
            </label>
          </div>
        </div>
      </aside>
    </>
  )
}
