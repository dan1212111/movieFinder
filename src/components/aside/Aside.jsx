import React from 'react'
import "/Users/daniel/my-app/src/styles/aside.css"
import { Link } from "react-router-dom"

export default function Aside() {




  return (
    <aside id="left-side-navigation">
    <div className="title">Movie Finder</div>
    <div className="filter_Big_Container">
    <Link to="/movies/fTop250Movies"><button>Top250Movies</button></Link>
    <Link to="/movies/fComingSoon"><button>Coming Soon</button></Link>
    <Link to="/movies/fTop250TVs"><button>Top250TVs</button></Link>
    <Link to="/movies/fBoxOffice"><button>BoxOffice</button></Link>
    <Link to="/movies/fMostPopularMovies"><button>MostPopularMovies</button></Link>
    </div>
  </aside>
  )
}
