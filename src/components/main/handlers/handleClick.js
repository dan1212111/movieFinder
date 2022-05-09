function handleClick(event, movie) {
  console.log(event)

    if (event.target.checked === true) {
      addToWatchlist(movie)
    }
    if (event.target.checked === false) {
      deleteFromWatchList(movie)
    }

    console.log(event.target.checked, movie)
  }

  function addToWatchlist(movie) {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        fullTitle: movie.fullTitle,
        title: movie.title,
        year: movie.year,
        movieId: movie.id,
        imDbRating: movie.imDbRating,
        image: movie.image,
      }),
    }

    fetch("http://localhost:4000/movie", options)
      .then((res) => {
        res.json().then((json) => {
          if (res.ok) {
            console.log(json.data)
          } else {
            console.log("Invalid response code:", res.status)
            console.log("Invalid response data:", json)
          }
        })
      })
      .catch((e) => {
        console.log("Unable to contact server:", e)
      })
  }

  function deleteFromWatchList(movie) {
    const options = {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        movieId: movie.id,
      }),
    }

    fetch("http://localhost:4000/movie", options)
      .then((res) => {
        res.json().then((json) => {
          if (res.ok) {
            console.log(json.data)
          } else {
            console.log("Invalid response code:", res.status)
            console.log("Invalid response data:", json)
          }
        })
      })
      .catch((e) => {
        console.log("Unable to contact server:", e)
      })
  }

  module.exports = {handleClick}