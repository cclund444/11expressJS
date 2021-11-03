const fs = require('fs');
const router = require('express').Router();
const notes = require('../db/db.json');
const path = require('path');
const uniqid = require('uniqid');

router.get('/notes', (req, res) => {
    const results = notes;
    res.json(results);
    console.log(results);
});

router.post('/notes', (req, res) => {
    console.log(JSON.stringify(req.body));
    const results = notes;
    const newNote = { title: req.body.title, text: req.body.text, id: uniqid() };

    results.push(newNote);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(results, null, 2));
    });

module.exports = router;