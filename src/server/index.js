require('dotenv').config();

const express = require("express")
const morgan = require("morgan")
const cors = require('cors')
const app = express()

app.use(morgan("dev"))
app.use(cors())
app.disable('x-powered-by');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const userRouter = require('./routers/user');
app.use('/user', userRouter);

const movieRouter = require('./routers/movie');
app.use('/movie', movieRouter);

app.get('*', (req, res) => {
  res.json({ ok: true})
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`\n Server is running on http://localhost:${port}\n`)
})

