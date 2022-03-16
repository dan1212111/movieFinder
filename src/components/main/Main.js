import React from "react"
import { useState, useEffect } from "react"

export default function Main() {
  const [top250Movies, setTop250Movies] = useState(null)

  useEffect(() => {
    fetch(`https://imdb-api.com/en/API/MostPopularMovies/k_x9gxptob`)
      .then((res) => res.json())
      .then((data) => setTop250Movies(data.items))
  }, [])
  console.log(top250Movies)

  if (!top250Movies) {
    return <p>Loading...</p>
  }

  return (
    <nav id="movie-list">
    <figure>
      <div id='figure-image'>
      {/* <img src="image.jpg" /> */}
      div
      </div>
      <figcaption>
        <p>CapTion</p>
      </figcaption>
    </figure>
  </nav>
  )
}
