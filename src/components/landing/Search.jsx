import React from 'react';
import algoliasearch from 'algoliasearch';
import PitchItem from '../sprint/PitchItem';

const searchClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_APP_ID || 'N82H923VC5', 
  process.env.REACT_APP_ALGOLIA_SEARCH_API_KEY || 'cfb98a5ccb9ee9a4c9ebe8f6892ae575'
);
const searchIndex = searchClient.initIndex('pitches');

const Search = ({ query, setQuery }) => {

  const [pitches, setPitches] = React.useState([]);

  const handleChange = async e => {
    e.preventDefault();
    setQuery(e.target.value);

    await searchIndex.search(e.target.value)
      .then(res => res.hits)
      .then(setPitches)
    ;
  }

  return <>
    <div className="Search">
      <input 
        type="search"
        placeholder="Search"
        onChange={handleChange}
      />

      {query && <>
        <ul>
          {pitches.map(pitch => 
            <PitchItem key={pitch.objectID} pitch={pitch}/>
          )}
        </ul>
      </>}
    </div>
  </>;
};

export default Search;
