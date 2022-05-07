const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const JWT_SECRET = process.env.JWT_SECRET

const register = async (req, res) => {
  const { username, password } = req.body

  if (!username) {
    return res.status(400).json({ error: "Missing username." })
  }

  if (!password) {
    return res.status(400).json({ error: "Missing password." })
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    const createdUser = await prisma.user.create({
      data: {
        username: username,
        password: hashedPassword,
      },
    })
    return res.json({ data: createdUser })
  } catch (e) {
    return res.status(400).json({ error: "Username already in use." })
  }
}

const login = async (req, res) => {
  const { username, password } = req.body

  if (!username) {
    return res.status(400).json({ error: "Username field is required." })
  }

  if (!password) {
    return res.status(400).json({ error: "Password field is required." })
  }

  const foundUser = await prisma.user.findFirst({
    where: {
      username,
    },
  })

  if (!foundUser) {
    return res.status(400).json({ error: "Invalid username." })
  }

  const passwordsMatch = await bcrypt.compare(password, foundUser.password)

  if (!passwordsMatch) {
    return res.status(400).json({ error: "Invalid password." })
  }

  const payload = {
    username: username,
    password: password,
    userId: foundUser.id,
  }

  const token = jwt.sign(payload, JWT_SECRET)
  res.json({ data: token })
}

module.exports = {
  register,
  login,
}
