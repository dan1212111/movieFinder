const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const addToWatchlist = async (req, res) => {
  const { fullTitle, title, year, movieId, imDbRating, image } = req.body


  const updatedWatchlist = await prisma.user.update({
    where: {
      id: req.userId,
    },
    data: {
      watchlist: {
        connectOrCreate: {
          where: {
            imDbId: movieId,
          },
          create: {
            fullTitle: fullTitle,
            title: title,
            year: year,
            imDbId: movieId,
            imDbRating: imDbRating,
            image: image,
          },
        },
      },
    },
  })
  res.json({ data: updatedWatchlist })
}

// get userId from jwt
// get user from prisma using userId
// get movieId from req
// get movie from prima using movieID
// connect movie to users watchlist

//where
//where
//update (connect)

//Delete (remove)

const deleteFromWatchlist = async (req, res) => {
  const { movieId } = req.body

  const movies = await prisma.movie.delete({
    where: {
      movieId: movieId,
      // userId: req.userId
    },
  })
  res.json({ data: movies })
}

module.exports = {
  addToWatchlist,
  deleteFromWatchlist,
}
