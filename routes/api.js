const fs = require('fs');
const router = require('express').Router();
const notes = require('../db/db.json');
const path = require('path');
const uniqid = require('uniqid');

// console.log to check errors
// route is not here--check my front end and back end for a match
router.get('/api/notes', (req, res) => {
    console.log("ping");
    const results = notes;
    console.log(notes);
    res.json(results);
    console.log(results);
});

router.post('/api/notes', (req, res) => {
    console.log(JSON.stringify(req.body));
    const results = notes;
    const newNote = { title: req.body.title, text: req.body.text, id: uniqid() };

    results.push(newNote);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(results, null, 2));
    });

module.exports = router;