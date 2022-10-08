const express = require('express');
const router = express.Router();

// Load moderations model
const moderations = require('../../models/moderations');

// @route GET api/moderations
// @description add/save moderations
// @access Public
router.post('/', (req, res) => {
  moderations.create(req.body)
      .then(moderations => res.json({ msg: 'Moderations done successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to proceede with moderations' }));
  });