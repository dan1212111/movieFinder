const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const addToWatchlist = async (req, res) => {
    const { fullTitle, title, year, movieId, imDbRating, image } = req.body

    const addedMovie = await prisma.movie.create({
        data: {
            fullTitle: fullTitle,
            title: title,
            year: year,
            movieId: movieId,
            imDbRating: imDbRating,
            image: image,
            userId: req.userId
        }
    })

    res.json({ data: addedMovie })
}

const deleteFromWatchlist = async (req, res) => {
    const { movieId } = req.body

    const movies = await prisma.movie.delete({
        where: {
            movieId: movieId
        }
    })
    res.json({ data: movies })
}







module.exports = {
    addToWatchlist,
    deleteFromWatchlist
  }