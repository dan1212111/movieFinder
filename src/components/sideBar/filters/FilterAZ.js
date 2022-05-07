export function FilterArrAZ(movieArray) {
  const movieList = [...movieArray]
  movieList.sort(function (a, b) {
    let movieA = a.title.toLowerCase(),
      movieB = b.title.toLowerCase()
    if (movieA < movieB) return -1
    if (movieA > movieB) return 1
    return 0
  })
  return movieList
}
