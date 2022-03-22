export function FilterAscendingImdbRating (movieArray) {
    const movieList = [...movieArray]
    movieList.sort(function(a, b) {
    return  Number(b.imDbRating) - Number(a.imDbRating)
  })
  return movieList
  }