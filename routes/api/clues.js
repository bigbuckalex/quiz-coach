const express = require('express');
const router = express.Router();

const Clues = require('../../models/Clues');

//GET a clue from a specific category with a specific dollar value
router.get('/', (req, res) => {
  console.log(req.body);
  Clues.find(
    {
      category: req.body.category,
      value: req.body.value
    })
    .then(clues => res.json(clues));
});

module.exports = router;