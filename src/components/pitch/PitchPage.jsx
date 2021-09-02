import React from 'react';
import usePitch from '../../state/usePitch.js';
import useCommonStyles from '../../styles/useStyles.js';

const PitchPage = () => {

  const commonStyles = useCommonStyles();

  const { loading, pitch } = usePitch();

  return <>
    <div className={commonStyles.page}>
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
