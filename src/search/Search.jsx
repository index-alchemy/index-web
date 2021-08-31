/* eslint-disable max-len */
import React from 'react';
import algoliasearch from 'algoliasearch';
import { Link } from 'react-router-dom';
import { InstantSearch, SearchBox, Hits, connectHighlight, Pagination, RefinementList } from 'react-instantsearch-dom';
import './Search.css';

const searchClient = algoliasearch('N82H923VC5', 'cfb98a5ccb9ee9a4c9ebe8f6892ae575');

const CustomHighlight = connectHighlight(({ highlight, attribute, hit }) => {
  const parsedHit = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit
  });
  // console.log(parsedHit);
  return (
    <h4>
      {attribute}:<br></br>
      {parsedHit.map(
        part => (part.isHighlighted ? <mark>{part.value}</mark> : part.value)
      )}
    </h4>
  );
});

const Sidebar = () => (
  <div className="sidebar">
    <RefinementList attribute="sprint_id" />
  </div>
);

const Hit = ({ hit }) => (
  <>
    <p>
      <CustomHighlight attribute="Pitch" hit={hit} />
      <CustomHighlight attribute="Description" hit={hit} />
      <CustomHighlight attribute="Members" hit={hit} />
      <CustomHighlight attribute="GitHub" hit={hit} />
    </p>
  </>
);

const Search = () => (
  <div className="searchTool">
    <Link to="/home">Return</Link>
    <InstantSearch searchClient={searchClient} indexName="index_pitches">
      <SearchBox />
      <Sidebar />
      <Hits hitComponent={Hit} />
      <Pagination
        showFirst={true}
        showLast={true}
        showPrevious={true}
        showNext={true}
        totalPages={18}
      />

    </InstantSearch>
  </div>
);

export default Search;