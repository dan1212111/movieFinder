import React from "react"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import "../../styles/header.css"

export default function Header() {
  const location = useLocation()
  const [linkButton, setLinkButton] = useState("/watchlist")
  const [buttonName, setButtonName] = useState("Watchlist")

  useEffect(() => {
    if (
      location.pathname.includes("/about-movie") ||
      location.pathname.includes("/watchlist")
    ) {
      setLinkButton("/")
      setButtonName("Home")
    }
  }, [location])

  return (
    <header>
      <nav id="main-header">
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
