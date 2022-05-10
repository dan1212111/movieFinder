import React from 'react'
import { useState } from "react"
import "../../styles/addMovieButton.css"

export default function AddMovieButton(props) {
    const [check, setCheck] = useState(true);
    const [buttonText, setButtonText] = useState("ADD TO MY MOVIES");
    const [movieId, setMovieId] = useState(null)

function handleClick(event) {
    setCheck((prevCheck) => !prevCheck)
    if(check === false) {
        setButtonText("ADD TO WATCHLIST")
        deleteMovie()
    } if(check === true){
        setButtonText("REMOVE FROM WATCHLIST")
        addMovie()
    }
}
console.log(check)
function addMovie() {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            id: props.id,
            imDbRating: props.imDbRating,
            fullTitle: props.fullTitle,
            image: props.image,
            releaseDate: props.releaseDate
        })
    }
    fetch("http://localhost:4000/movies", options)
    .then(function(response) {
      return response.json()
    }).then(function(json) {
        setMovieId(json.id)
        console.log("Movie created")
        console.log(movieId)
    })
}
function deleteMovie() {
    const options = {
        method: "DELETE",
    }
    fetch(`http://localhost:4000/movies/${movieId}`, options)  
    .then(function(response) {
        return response.json()
      }).then(function(json) {
        console.log("Person deleted", json)
    })
}


  return (
    <button className="btn-primary" onClick={handleClick} check={check}>
    <h3>{buttonText}</h3>
  </button>
  )
}
