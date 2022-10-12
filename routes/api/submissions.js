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
    Submission.create(req.body)
      .then(submission => res.json({ msg: 'Submission added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add submission'}));
  });

  // @route GET api/submissions
// @description Get all submissions
// @access Public
router.get('/', (req, res) => {
  Submission.find()
    .then(submissions => res.json(submissions))
    .catch(err => res.status(404).json({ nosubmissionsfound: 'No submissions found' }));
});
router.post('/search_Submission', (req, res) => {
  Submission.find({'title':req.body.title})
    .then(submissions => res.json(submissions))
    .catch(err => res.status(404).json({ nosubmissionsfound: 'No Submission found' }));
});


// @route GET api/submissions/:id
// @description Get single article by id
// @access Public
router.get('/:id', (req, res) => {
  Submission.findById(req.params.id)
    .then(submission => res.json(submission))
    .catch(err => res.status(404).json({ noarticlefound: 'No article found' }));
});

// @route GET api/submissions/:id
// @description Update article
// @access Public
router.put('/:id', (req, res) => {
  Submission.findByIdAndUpdate(req.params.id, req.body)
    .then(submission => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/submissions/:id
// @description Delete article by id
// @access Public
router.delete('/:id', (req, res) => {
  Submission.findByIdAndRemove(req.params.id, req.body)
    .then(submission => res.json({ mgs: 'article entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a article' }));
});


  module.exports = router;