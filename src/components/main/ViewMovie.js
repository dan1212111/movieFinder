import React from "react"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import "/Users/daniel/my-app/src/styles/viewMovie.css"
import Button from "./Button.jsx"

export default function ViewMovie() {
  const params = useParams()
  const [movieInfo, setMovieInfo] = useState("")
  const [starListInfo, setStarListInfo] = useState(null)

  useEffect(() => {
    fetch(
      `https://imdb-api.com/en/API/Title/k_x9gxptob/${params.id}/FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia,`
    )
      .then((res) => res.json())
      .then((data) => setMovieInfo(data))
  }, [params])

  function getStarListId() {
    const starListID = []
    for (const starId of movieInfo.starList) {
      starListID.push(starId.id)
    }
    return starListID
  }

  const findStarListInfo = () => {
    const starArr = []
    const starList = getStarListId()
    for (const actor of movieInfo.actorList) {
      for (const actorF of starList) {
        if (actor.id === actorF) {
          starArr.push(actor)
        }
      }
    }
    return starArr
  }

  if (!movieInfo) {
    return <p>Loading...</p>
  }

  return (
    <div className="movie_Container">
      <div className="movieTitle">
        <h3>{movieInfo.fullTitle}</h3>
      </div>
      <div className="movieRating">
        <div className="imDbRating">ImDbRating:{movieInfo.imDbRating}</div>
        <div className="contentRating">{movieInfo.contentRating}</div>
      </div>
      <div className="movieDescription">
        {movieInfo.plot}
        <Button imDbRating={movieInfo.imDbRating} fullTitle={movieInfo.fullTitle} image={movieInfo.image} releaseDate={movieInfo.releaseDate} id={movieInfo.id}/>
      </div>

      <div className="moviePoster">
        <img src={movieInfo.image} alt={movieInfo.title} />
      </div>
      <div className="movieCast">
        <h4>STARCAST:</h4>
        <div className="movieCastBigContainer">
          {findStarListInfo().map((star) => (
            <div className="movieCast_Container">
              <div className="movieCastImage">
                <img src={star.image} alt={star.name}></img>
              </div>
              <div className="movieCastName">
                <h4>{star.asCharacter}</h4>
                <h5>{star.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
