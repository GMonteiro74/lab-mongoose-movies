
require("../db"); 

const Celebrity = require('../models/Celebrity.model')

const celebrities = [
    {
        name: 'Angelina Jolie',
        occupation: 'actor',
        catchPhrase: 'Show me the money',
    },
    {
        name: 'Robert deNiro',
        occupation: 'actor',
        catchPhrase: 'Are you talking to me?',
    },
    {
        name: 'Carl Sagan',
        occupation: 'scientist',
        catchPhrase: 'The universe is big'
    }
]


Celebrity.insertMany(celebrities).then((celebsFromDb) => {
    console.log(`celebs created ${celebsFromDb.length}`);
})