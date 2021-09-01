import React from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { useSprint } from '../../state/useSprint.js';
import { useSession } from '../../state/SessionProvider.jsx';
import PitchItem from './PitchItem';

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

  const { loading, sprint, pitches } = useSprint();
  const { session } = useSession();

  return <>
    <div className={classes.sprintPage}>
      {loading
        ? <span>loading...</span>
        : <>
          <h1>{sprint.name}</h1>
          <ul className={classes.pitchList}>
            {pitches.map(pitch =>
              <PitchItem key={pitch.id} pitch={pitch} />
            )}
          </ul>

          <Link to={{ pathname: '/add-pitch', state: { sprintId: sprint.id } }}>Add a Pitch</Link>

          {session.isAdmin ?
            <button>end pitches</button> : null
          }
        </>
      }
    </div>

  </>;
};

export default SprintPage;
