import React from 'react';
import usePitch from '../../state/usePitch.js';

const PitchPage = () => {

  const { loading, pitch, comments } = usePitch();

  return <>
    <div className="PitchPage">
      {loading
        ? <div>Loading...</div>
        : <>
          <h1>{pitch.pitch}</h1>
          <span>{pitch.description}</span>
        </>}
    </div>
  </>;
};

export default PitchPage;
