const express = require('express');
const router = express.Router();

const Clues = require('../../models/Clues');

//GET all clues from all categories sort by date
router.get('/', (req, res) => {
  console.log('get /api/clues');
  Clues.find()
    .then(clues => res.json(clues));
});

module.exports = router;