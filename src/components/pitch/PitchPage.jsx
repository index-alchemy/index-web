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
          <h2>{pitch.pitch}</h2>
          <section>
            <span>{pitch.description}</span>
          </section>
        </>}
    </div>
  </>;
};

export default PitchPage;
