export function FilterDescendingYearRelease(movieArray) {
  const movieList = [...movieArray]
  movieList.sort(function (a, b) {
    return Number(a.year) - Number(b.year)
  })
  return movieList
}
