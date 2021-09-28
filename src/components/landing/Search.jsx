import React from 'react';
import algoliasearch from 'algoliasearch';
import PitchItem from '../sprint/PitchItem';

const searchClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_APP_ID || 'XZLXQC8NHZ', 
  process.env.REACT_APP_ALGOLIA_SEARCH_API_KEY || 'cc77f77706dbc256c8b1fb4b2c118ab8'
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
