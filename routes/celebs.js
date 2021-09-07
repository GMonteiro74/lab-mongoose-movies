
const router = require('express').Router();
const Celebrity = require('../models/Celebrity.model');

router.get('/celebrities', async (req, res) => {
    const celebrities = await Celebrity.find();
    res.render('celebrities/index', { celebrities })
})

router.get('/celebrities/:id', async (req, res) => {
    const celeb = await Celebrity.findById(req.params.id);
    res.render('celebrities/show', celeb)
})

router.get('/create-celeb', async (req, res) => {
    const celebrities = await Celebrity.find();
    res.render('celebrities/create', {celebrities});
})

router.post('/celebrities', async (req, res) => {
    const { name, occupation, catchPhrase} = req.body;
    await Celebrity.create({ name, occupation, catchPhrase });
    res.redirect('/celebrities');
})

router.post('/celebrities/:id/delete', async (req, res) => {
    await Celebrity.findByIdAndRemove(req.params.id);
    res.redirect('/celebrities')
})

router.get('/celebrities/:id/edit', async (req, res) => {
    const celeb = await Celebrity.findById(req.params.id);
    res.render('celebrities/edit', celeb)
})

router.post('/celebrities/:id', async (req, res) => {
    const {name, occupation, catchPhrase} = req.body;
    await Celebrity.findByIdAndUpdate(req.params.id, {
        name,
        occupation,
        catchPhrase
    });
    res.redirect(`/celebrities/${req.params.id}`)
})






module.exports = router;