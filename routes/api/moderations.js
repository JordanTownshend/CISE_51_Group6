const express = require('express');
const router = express.Router();

// Load Submission model
const Submission = require('../../models/moderations');

// @route GET api/submissions
// @description add/save submission
// @access Public
router.post('/', (req, res) => {
    Submission.create(req.body)
      .then(Submission => res.json({ msg: 'Submission added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add submission' }));
  });