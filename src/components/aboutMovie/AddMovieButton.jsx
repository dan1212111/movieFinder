import React from 'react'
import { useState } from "react"
import "../../styles/addMovieButton.css"
const API_URL = process.env.REACT_APP_API_URL


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
    fetch(`${API_URL}/movies`, options)
    .then(function(response) {
      return response.json()
    }).then(function(json) {
        setMovieId(json.id)
    })
}
function deleteMovie() {
    const options = {
        method: "DELETE",
    }
    fetch(`${API_URL}/movies/${movieId}`, options)  
    .then(function(response) {
        return response.json()
      }).then(function(json) {
    })
}


  return (
    <button className="btn-primary" onClick={handleClick} check={check}>
    <h3>{buttonText}</h3>
  </button>
  )
}
