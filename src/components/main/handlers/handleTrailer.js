export function handleTrailer(movieId) {
    fetch(`https://imdb-api.com/en/API/YouTubeTrailer/k_x9gxptob/${movieId}`)
      .then((res) => res.json())
      .then((data) => window.open(data.videoUrl))


 }