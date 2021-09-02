/* eslint-disable max-len */
import React from 'react';
import algoliasearch from 'algoliasearch';
import { InstantSearch, SearchBox, Hits, connectHighlight, Pagination, RefinementList } from 'react-instantsearch-dom';
import './Search.css';

const searchClient = algoliasearch('N82H923VC5', 'cfb98a5ccb9ee9a4c9ebe8f6892ae575');

const CustomHighlight = connectHighlight(({ highlight, attribute, hit, isLink }) => {
  const parsedHit = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit
  });
  
  return (
    <p>
      {attribute}:<br></br>
      {isLink
        ? <a href={hit[attribute]}>
          {parsedHit.map(
            part => (part.isHighlighted ? <mark>{part.value}</mark> : part.value)
          )}
        </a>
        : parsedHit.map(
          part => (part.isHighlighted ? <mark>{part.value}</mark> : part.value)
        )
      }
    </p>
  );
});

const Sidebar = () => (
  <div className="sidebar">
    <RefinementList attribute="Sprint" />
  </div>
);

const Hit = ({ hit }) => {

  return <>
    <div>
      <CustomHighlight attribute="Pitch" hit={hit} />
      <CustomHighlight attribute="Description" hit={hit} />
      <CustomHighlight attribute="Members" hit={hit} />
      <CustomHighlight attribute="GitHub" hit={hit} isLink={true}/>
      <CustomHighlight attribute="Sprint" hit={hit} />
    </div>
  </>;
};

const Search = ({ query, setQuery }) => (
  <div className="searchTool">
    <InstantSearch searchClient={searchClient} indexName="index_pitches">
      <SearchBox
        searchAsYouType={true}
        className="searchBox"
        translations={{ placeholder: 'Search' }} 
        onChange={e => setQuery(e.target.value)}
      />

      {query && <>
        <Hits hitComponent={Hit} />

        <Pagination
          showFirst={true}
          showLast={true}
          showPrevious={true}
          showNext={true}
          totalPages={40} 
        />

        <Sidebar />
      </>}
    </InstantSearch>
  </div>
);

export default Search;
