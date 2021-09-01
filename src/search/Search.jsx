/* eslint-disable max-len */
import React from 'react';
import algoliasearch from 'algoliasearch';
import { InstantSearch, SearchBox, Hits, connectHighlight, Pagination, RefinementList } from 'react-instantsearch-dom';
import './Search.css';

const searchClient = algoliasearch('N82H923VC5', 'cfb98a5ccb9ee9a4c9ebe8f6892ae575');

const CustomHighlight = connectHighlight(({ highlight, attribute, hit }) => {
  const parsedHit = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit
  });
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
    <h1>Project pitches and voting, simplified.</h1>
    <h2>Search past projects for inspiration, pitch project ideas,</h2>
    <h2>join teams, and brainstorm on implementation, all in one app.</h2>
    <InstantSearch searchClient={searchClient} indexName="index_pitches">
      <SearchBox
        searchAsYouType={true}
        className="searchBox"
        translations={{ placeholder: 'Search' }} />
      <h1>💡</h1>
      <Hits hitComponent={Hit} />
      <Pagination
        showFirst={true}
        showLast={true}
        showPrevious={true}
        showNext={true}
        totalPages={40} />
      <Sidebar />
    </InstantSearch>
  </div>
);


export default Search;