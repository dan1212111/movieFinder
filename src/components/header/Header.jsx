import React from "react"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import "../../styles/header.css"

export default function Header() {
  const location = useLocation()
  const [linkButton, setLinkButton] = useState("/watchlist")
  const [buttonName, setButtonName] = useState("Watchlist")

  useEffect(() => {
    console.log(location.pathname)
    if (location.pathname.includes("/about-movie")) {
      setLinkButton("/watchlist")
      setButtonName("Watchlist")
    }
    if (location.pathname.includes("/watchlist")) {
      setLinkButton("/")
      setButtonName("Home")
    }
  }, [location])

  return (
    <header>
      <nav id="main-header">
        <div className="logo-header">
          <Link to="/">
            <h2>Movie Finder</h2>
          </Link>
        </div>
        <div className="main-header-navigation">
          <ul>
            <li>
              <Link to={linkButton}>
                <button>
                  <h3>{buttonName}</h3>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <button>
                  <h3>LogOut</h3>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
