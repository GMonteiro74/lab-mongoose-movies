
const router = require('express').Router();
const Movie = require('../models/Movie.model');
const Celebrity = require('../models/Celebrity.model');



router.get('/create-movie', async (req, res) => {
    const celebrities = await Celebrity.find();
    res.render('movies/create', {celebrities})
})

router.post('/create-movie', async (req, res) => {
    const { title, genre, plot, cast } =  req.body;
    await Movie.create({ title, genre, plot, cast });
    res.redirect('/movies')
})

router.get('/movies', async (req, res) => {
    const movies = await Movie.find();
    res.render('movies/index', { movies })
})

router.get('/movies/:id', async (req, res) => {
    const movie = await Movie.findById(req.params.id).populate('cast');
    res.render('movies/show', movie)
})

router.post('/movies/:id/delete', async (req, res) => {
    await Movie.findByIdAndRemove(req.params.id);
    res.redirect('/movies');
})

router.get('/movies/:id/edit', async (req, res) => {
    const movie = await Movie.findById(req.params.id).populate('cast');
    const celebrities = await Celebrity.find();
    res.render('movies/edit', {movie, celebrities});
})

router.post('/movies/:id', async (req, res) => {
    const { title, genre, plot, cast } = req.body;
    await Movie.findByIdAndUpdate(req.params.id, {
        title,
        genre,
        plot,
        cast
    })
    res.redirect(`/movies/${req.params.id}`)

})

module.exports = router;