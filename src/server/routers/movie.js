const middleware = require("/Users/danielmccarthy/movieFinder/src/middleware/middleware.js")
const express = require('express');
const {
    addToWatchlist,
    deleteFromWatchlist,
    getAllMovies,
    // createMovie
} = require('../controllers/movie');

const router = express.Router();


// router.get('/getMovies', middleware.checkToken, getAllMovies);
router.post('/', middleware.checkToken, addToWatchlist);
router.delete('/', middleware.checkToken, deleteFromWatchlist)
router.get('/', middleware.checkToken, getAllMovies)


module.exports = router;