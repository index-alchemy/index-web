import React from 'react';

const Result = ({ result }) => {
  return <>
    <div className="Result">
      {Object.keys(result).map(pitch => `
        ${pitch}: ${result[pitch].join(', ')}
      `)}
    </div>
  </>;
};

export default Result;
