// Submissions are all in BibTeX format of articles, this includes both required and optional fields. 
// refer to https://www.bibtex.com/e/article-entry/ for more.

// Some optional fields are omitted to simplify user experience

const mongoose = require('mongoose');


const ModerationSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  journal: {
    type: String,
    required: true
  },
  pubyear: {
    type: Date,
    required: true
  },
  volume: {
    type: String
  },
  doi: {
    type: String
  },
  issn: {
    type: String
  },
  other: {
    type: String
  },
  status: {
    type: String
  }
});

module.exports = Moderation = mongoose.model('moderation', ModerationSchema);