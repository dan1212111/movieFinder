export function FilterDescendingImdbRating (movieArray) {
    const movieList = [...movieArray]
    movieList.sort(function(a, b) {
    return  Number(a.imDbRating) - Number(b.imDbRating)
  })
  return movieList
  }