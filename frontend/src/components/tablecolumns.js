// Table columns are all in BibTeX format of articles, this includes both required and optional fields. 
// refer to https://www.bibtex.com/e/article-entry/ for more.

// Some optional fields are omitted to simplify user experience

const tablecolumns = [
    {
      Header: 'Author',
      accessor: 'author'
    }, {
      Header: 'Title',
      accessor: 'title'
    }, {
      Header: 'Journal',
      accessor: 'journal'
    }, {
      Header: 'Pub. Year',
      accessor: 'pubyear'
    },{
      Header: 'Volume No.',
      accessor: 'volume'
    },{
      Header: 'DOI',
      accessor: 'doi'
    },{
      Header: 'ISSN',
      accessor: 'issn'
    },{
      Header: 'Other',
      accessor: 'other'
    }
  ]

  module.exports = tablecolumns
