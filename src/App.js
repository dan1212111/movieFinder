import { Link, Routes, Route } from "react-router-dom"
// import "./styles/styles.css"
import Main from "./components/main/Main"
import ViewMovie from "./components/main/ViewMovie"
import MyMovies from "./components/main/MyMovies"
import Aside from "./components/aside/Aside"
import Top250Movies from "./components/aside/Top250Movies"
import ComingSoon from "./components/aside/ComingSoon"
import Top250TVs from "./components/aside/Top250TVs"
import BoxOffice from "./components/aside/BoxOffice"
import MostPopularMovies from "./components/aside/MostPopularMovies"

function App() {
  return (
    <body>
      <main>
        <header>
          <nav id="main-navigation">
            <ul>
              <Link to="/"><li>Home</li></Link>
              <Link to="/myMovies"><li>My movies</li></Link>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/movie/:id" element={<ViewMovie />}/>
          <Route path="/myMovies" element={<MyMovies />} />
          <Route path="/movies/fTop250Movies" element={<Top250Movies />} />
          <Route path="/movies/fComingSoon" element={<ComingSoon />} />
          <Route path="/movies/fTop250TVs" element={<Top250TVs />} />
          <Route path="/movies/fBoxOffice" element={<BoxOffice />} />
          <Route path="/movies/fMostPopularMovies" element={<MostPopularMovies />} />
          </Routes>
      </main>
      <Aside />
    </body>
  )
}

export default App
