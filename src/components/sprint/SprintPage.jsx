import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { useSprint } from '../../state/useSprint.js';
import PitchItem from './PitchItem';
import { useAuthActions, useSession } from '../../state/SessionProvider.jsx';

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

const randomPreference = pitches => {
  const pref = [...pitches.map(p => p.id)];
  for (let i = pref.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = pref[j];
    pref[j] = pref[i];
    pref[i] = temp;
  }
  return pref;
};

const SprintPage = () => {
  const classes = useStyles();

  const [prefs, setPrefs] = useState([]);

  const { loading, sprint } = useSprint();
  const { verify } = useAuthActions();
  const { session } = useSession();

  useEffect(() => {
    if (!session) verify();
  }, [session, verify]);

  useEffect(() => {
    console.log(sprint);
    if (sprint) {
      if (!prefs.length) setPrefs(sprint.preferences.find(p => p.userId === session.id) || randomPreference(sprint.pitches));
    }
  }, [sprint, prefs]);

  return <>
    <div className={classes.sprintPage}>
      {loading
        ? <span>loading...</span>
        : <>
          <h1>{sprint.name}</h1>
          <ul className={classes.pitchList}>
            {sprint.pitches.map(pitch =>
              <PitchItem 
                key={pitch.id} 
                pitch={pitch} 
                session={session} 
                prefs={prefs} 
                setPrefs={setPrefs}
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
