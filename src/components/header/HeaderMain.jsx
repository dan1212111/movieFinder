import React from "react"
import { Link} from "react-router-dom"
import "../../styles/header.css"

export default function HeaderMain() {
  
  return (
    <header>
      <nav id="main-header">
        <div className="main-header-navigation">
          <ul>
            <li>
              <Link to="/watchlist">
                <button>
                  <h3>Watchlist</h3>
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