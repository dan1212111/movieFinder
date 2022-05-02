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

const deleteFromWatchlist = async (req, res) => {
  const { movieId } = req.body
  const movies = await prisma.user.update({
    where: {
      id: req.userId,
    },
    data: {
      watchlist: {
        disconnect: {
          imDbId: movieId,
        },
      }
    },
  })
  res.json({ data: movies })
}

const getAllMovies = async (req, res) => {
  const movies = await prisma.user.findUnique({
    where: {
      id: req.userId,
    },
    include: {
      watchlist: true,
    },
  })
  res.json({ data: movies })
}

module.exports = {
  addToWatchlist,
  deleteFromWatchlist,
  getAllMovies,
}
