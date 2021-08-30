const algoliasearch = require('algoliasearch');
const client = algoliasearch('N82H923VC5', 'cfb98a5ccb9ee9a4c9ebe8f6892ae575');
const index = client.initIndex('index_pitches')
const pitches = require('../search/pitches.json');

index
  .saveObjects(pitches, { autoGenerateObjectIDIfNotExist: true })
  .then(({ objectIDs }) => {
    console.log(objectIDs);
  })
  .catch(err => {
    console.log(err);
  });

index
  .search('S')
  .then(({ hits }) => {
    console.log(hits);
  })
  .catch(err => {
    console.log(err);
  });