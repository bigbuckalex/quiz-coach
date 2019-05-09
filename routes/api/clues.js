const express = require('express');
const router = express.Router();

const Clues = require('../../models/Clues');

//GET a random clue
router.get('/random', (req, res) => {
  Clues.find()
    .then(clues => {
      const randomClueNum = Math.floor(Math.random() * clues.length);
      res.json(clues[randomClueNum]);
    });
});

//GET a clue from a specific category with a specific dollar value
router.get('/', (req, res) => {
  Clues.find(
    {
      category: req.body.category,
      value: req.body.value
    })
    .then(clues => res.json(clues));
});

//DELETE all clues in final jeopardy
router.delete('/', (req, res) => {
  Clues.find({round:'Final Jeopardy!'})
    .then(clues => res.json(clues));
});

module.exports = router;