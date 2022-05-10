import React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import IconButton from "@mui/material/IconButton"
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined"
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined"
import Header from "../header/Header"
import AddMovieButton from "./AddMovieButton.jsx"
import "../../styles/aboutMovie.css"

export default function ViewMovie() {
  const params = useParams()
  const [movieInfo, setMovieInfo] = useState("")
  const [moviePosterImage, setMoviePosterImage] = useState()
  const [theMoviePosterImage, setTheMoviePosterImage] = useState(
    movieInfo.image
  )
  const [count, setCount] = useState(0)
  let moviePoster = []

  useEffect(() => {
    fetch(
      `https://imdb-api.com/en/API/Title/k_x9gxptob/${params.id}/FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia,`
    )
      .then((res) => res.json())
      .then((data) => getMovieInfo(data))
    setTheMoviePosterImage(movieInfo.image)
  }, [params])

  function getMovieInfo(movieData) {
    setMovieInfo(movieData)
    setTheMoviePosterImage(movieData.image)
    getPosters(movieData)
  }

  function getPosters(movieData) {
    if (movieData.posters.posters) {
      for (let i = 0; i < movieData.posters.posters.length; i++) {
        moviePoster.push(movieData.posters.posters[i].link)
      }
    }
    setMoviePosterImage(moviePoster)
  }

  function getNextPosterImage() {
    console.log(count)
    if (moviePosterImage.length !== 0) {
      if (count < moviePosterImage.length - 1) {
        let newCount = count + 1
        setCount(newCount)
        let nextMoviePoster = moviePosterImage[newCount]
        setTheMoviePosterImage(nextMoviePoster)
      } else {
        setCount(0)
        setTheMoviePosterImage(moviePosterImage[0])
      }
    }
  }

  function getPrevPosterImage() {
    console.log(count)
    if (moviePosterImage.length !== 0) {
      if (count > 0) {
        let newCount = count - 1
        setCount(newCount)
        let nextMoviePoster = moviePosterImage[newCount]
        setTheMoviePosterImage(nextMoviePoster)
      } else {
        setCount(moviePosterImage.length)
        setTheMoviePosterImage(moviePosterImage[moviePosterImage.length - 1])
      }
    }
  }

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

  const arrowLeft = { color: "white", fontSize: "10vh", marginRight: -35 }
  const arrowRight = { color: "white", fontSize: "10vh", marginLeft: -35 }
  const arrowLeftbtn = { color: "white" }
  const arrowRightbtn = { color: "white" }

  return (
    <div className="movie_Container">
      <div className="movie-poster">
        <IconButton aria-label="arrow left" style={arrowLeftbtn}>
          <ArrowLeftOutlinedIcon
            style={arrowLeft}
            onClick={() => getPrevPosterImage()}
          />
        </IconButton>
        <img src={theMoviePosterImage} alt={movieInfo.title} />
        <IconButton aria-label="arrow right" style={arrowRightbtn}>
          <ArrowRightOutlinedIcon
            style={arrowRight}
            onClick={() => getNextPosterImage()}
          />
        </IconButton>
      </div>

      <div className="movie-name">
        <h3>{movieInfo.fullTitle}</h3>
      </div>
      <div className="movie-description">
        <div className="movie-plot">
          {movieInfo.plot}
          <br></br> <br></br>
          Rating (Imdb): {movieInfo.imDbRating}
          <h4>{movieInfo.contentRating}</h4>
        </div>
        <div className="movie-button-watchlist">
          <AddMovieButton
            imDbRating={movieInfo.imDbRating}
            fullTitle={movieInfo.fullTitle}
            image={movieInfo.image}
            releaseDate={movieInfo.releaseDate}
            id={movieInfo.id}
          />
        </div>
      </div>
      <div className="movie-cast">
        <h3>STARCAST:</h3>
        <div className="movie-cast_Big_Container">
          {findStarListInfo().map((star) => (
            <div className="movie-cast_Container">
              <div className="movie-cast-image">
                <img src={star.image} alt={star.name}></img>
              </div>
              <div className="movie-cast-name">
                <h4>{star.asCharacter}</h4>
                <h5>{star.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Header />
    </div>
  )
}
