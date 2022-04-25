const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function seed() {

  const createdMovie = await prisma.movie.create({
    data: {
      fullTitle: "Dark Knight Full Title Vs2",
      title: "Dark Knight",
      year: "2008",
      imDbId: "PX1495",
      imDbRating: "9",
      image: "batman.images.com",
    },
  })

  console.log(`${createdMovie.count} movie created`, createdMovie)

  const createdUser = await prisma.user.create({
    data: {
      username: "dan12123",
      password: "ifjewbfwib",
      watchlist: {
        connect: [{
          id: createdMovie.id
        }]
      }
    },
  })

  console.log(`${createdUser.count} user created`, createdUser)

  const movieToUser = await prisma.user.findMany({
    where: {
      id: createdUser.id
    },
      include: {
        watchlist: true
      }
  })
  

  console.log(`${movieToUser.count} user created`, movieToUser)

  // Don't edit any of the code below this line
  process.exit(0)
}

seed().catch(async (error) => {
  console.error(error)
  await prisma.$disconnect()
  process.exit(1)
})
