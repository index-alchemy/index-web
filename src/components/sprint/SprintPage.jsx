import React from 'react';
import { useSprint } from '../../state/useSprint';
import PitchItem from './PitchItem';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const SprintPage = () => {
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
  const classes = useStyles();

  const { loading, sprint, pitches } = useSprint();



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
        </>
      }
    </div>

  </>;
};

export default SprintPage;
