import React from 'react';

const Result = ({ result }) => {
  return <>
    <ul className="Result">
      {Object.keys(result).map(pitch => <li>
        <span>{pitch}: {result[pitch].join(', ')}</span>
      </li>)}
    </ul>
  </>;
};

export default Result;
