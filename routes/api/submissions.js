const express = require('express');
const router = express.Router();

// Load Submission model
const Submission = require('../../models/Submission');

// @route GET api/submissions/test
// @description tests submissions route
// @access Public
router.get('/', (req, res) => res.send('route testing!'));

// @route GET api/submissions
// @description add/save submission
// @access Public
router.post('/', (req, res) => {
  console.log(req.body);
    Submission.create(req.body)
      .then(submission => res.json({ msg: 'Submission added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add submission'}));
  });

  module.exports = router;