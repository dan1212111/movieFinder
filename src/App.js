import { Link, Routes, Route } from "react-router-dom"
import "./styles/styles.css"
import Main from "./components/main/Main"

function App() {
  return (
    <body>
      <main>
        <header>
          <nav id="main-navigation">
            <ul>
              <li>Home</li>
              <li>My movies</li>
            </ul>
          </nav>
        </header>
        <Main/>
      </main>
      <aside id="left-side-navigation">
        <h5>MOVIE FINDER</h5>
        <br></br>
        <h5>Filter</h5>
      </aside>
      {/* <Routes>
          <Route path="/" element={<Main />}/>
          </Routes> */}
    </body>
  )
}

export default App
