import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import PitchItem from './PitchItem';
import { useAuthActions, useSession } from '../../state/SessionProvider';
import { useSprint } from '../../state/useSprint.js';
import { relocateItemInArray } from '../../utils/utils.js';

const useStyles = createUseStyles({
  sprintPage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '1rem',
  },
  pitchList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '1rem',
  }
});

const SprintPage = () => {
  const classes = useStyles();

  const params = useParams();
  const { session } = useSession();
  const { verify } = useAuthActions();
  const { loading, sprint, prefs, initializePrefs, updatePrefs } = useSprint(params.id);

  useEffect(() => {
    if (!session) verify();
    else if (!Boolean(prefs.length) && Boolean(sprint)) initializePrefs(session.id);
  }, [session, verify, initializePrefs, prefs, sprint]);

  const handleNewPrefs = prefs => {
    updatePrefs(session.id, prefs)
    console.log(sprint);
  }

  const handleReorder = e => {
    e.preventDefault();

    const rank = prefs.indexOf(e.target.name);

    // validate that e.target.value is a valid number
    e.target.value = Math.max(1, Number(e.target.value.trim())) || (rank + 1);
    e.target.value = Math.min(prefs.length, Number(e.target.value));

    const newIndex = Number(e.target.value) - 1;
    const newPrefs = relocateItemInArray([...prefs], rank, newIndex);

    console.log('prefs after reorder:', newPrefs);

    handleNewPrefs(newPrefs);
  };

  return <>
    <div className={classes.sprintPage}>
      {loading && !Boolean(sprint)
        ? <span>loading...</span>
        : <>
          <h1>{sprint.name}</h1>
          <ul className={classes.pitchList}>
            {sprint.pitches.map(pitch =>
              <PitchItem 
                key={pitch.id} 
                pitch={pitch} 
                validCohort={Boolean(session) && session.cohort === sprint.cohort}
                rank={prefs.indexOf(pitch.id)} 
                handleReorder={handleReorder}
              />
            )}
          </ul>

          <Link to={{ pathname: '/add-pitch', state: { sprintId: sprint.id } }}>Add a Pitch</Link>
        </>
      }
    </div>
  </>;
};

export default SprintPage;
