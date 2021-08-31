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

const relocateItemInArray = (arr, oldIndex, newIndex) => {
  let i, tmp;
  oldIndex = parseInt(oldIndex, 10);
  newIndex = parseInt(newIndex, 10);

  if (oldIndex !== newIndex && 0 <= oldIndex && oldIndex <= arr.length && 0 <= newIndex && newIndex <= arr.length) {
    tmp = arr[oldIndex];
    if (oldIndex < newIndex) {
      for (i = oldIndex; i < newIndex; i++) {
        arr[i] = arr[i + 1];
      }
    }
    else {
      for (i = oldIndex; i > newIndex; i--) {
        arr[i] = arr[i - 1];
      }
    }
    arr[newIndex] = tmp;
  }

  return arr;
};

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

  const handleReorder = e => {
    e.preventDefault();

    const rank = prefs.indexOf(e.target.name);

    // validate that e.target.value is a valid number
    e.target.value = Math.max(1, Number(e.target.value.trim())) || (rank + 1);
    e.target.value = Math.min(prefs.length, Number(e.target.value));

    const newIndex = Number(e.target.value) - 1;
    const newPrefs = relocateItemInArray([...prefs], rank, newIndex);

    setPrefs(newPrefs);
  };

  useEffect(() => {
    if (!session) verify();
  }, [session, verify]);

  useEffect(() => {
    if (sprint) {
      if (!prefs.length) setPrefs(sprint.preferences.find(p => p.userId === session.id) || randomPreference(sprint.pitches));
    }
  }, [sprint, prefs, session]);

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
