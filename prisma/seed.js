const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function seed() {
  const createdUser = await prisma.user.create({
    data: {
      username: "dan12123",
      password: "ifjewbfwib"
    }
  })

  console.log(`${createdUser.count} user created`, createdUser)

  const createdMovie = await prisma.movie.create({
    data: {
      fullTitle: "Dark Knight Full Title Vs2",
      title: "Dark Knight",
      year: "2008",
      movieId: "0145px",
      imDbRating: '9',
      image: "batman.images.com",
      userId: createdUser.id
    }
  })

  console.log(`${createdMovie.count} movie created`, createdMovie)

 
  // Don't edit any of the code below this line
  process.exit(0)
}

seed().catch(async (error) => {
  console.error(error)
  await prisma.$disconnect()
  process.exit(1)
})
