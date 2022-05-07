export function FilterAscendingYearRelease(movieArray) {
  const movieList = [...movieArray]
  movieList.sort(function (a, b) {
    return Number(b.year) - Number(a.year)
  })
  return movieList
}
