import React from 'react';
import { useSession } from '../../state/SessionProvider';
import usePitch from '../../state/usePitch.js';
import useCommonStyles from '../../styles/useStyles.js';

const PitchPage = () => {

  const commonStyles = useCommonStyles();

  const { loading, pitch, removePitch } = usePitch();
  const { session, isAdmin } = useSession();

  return <>
    <div className={commonStyles.page}>
      {loading
        ? <div>Loading...</div>
        : <>
          <h2>{pitch.pitch}</h2>

          <section>
            <span>{pitch.description}</span>
          </section>

          {(isAdmin || session?.id === pitch.userId) && <section className={commonStyles.adminArea}>
            <button onClick={e => removePitch(pitch.id)}>Delete Pitch</button>
          </section>}
        </>}
    </div>
  </>;
};

export default PitchPage;
