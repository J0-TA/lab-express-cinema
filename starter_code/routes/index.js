const express = require('express');
const router  = express.Router();
const Movies = require("../models/Movie")

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movies.find().then(allMovies => {
  res.render('movies',{allMovies});
  })
});

router.get('/:movieId', (req, res, next) => {
  let movieId = req.params.movieId
  Movies.findById(movieId).then(movie => {
  res.render('moviedetails',movie);
  })
});

module.exports = router;
