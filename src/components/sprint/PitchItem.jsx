import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  itemContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '0.5rem',
    '& input': {
      width: '3rem',
    }
  },
  pitchItem: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '1rem',
    border: [0.5, 'solid', '#ABABAB'],
    borderRadius: '0.5rem',
    boxShadow: '0 0 0.25rem #0003',
    marginBottom: '1rem',
  },
  pitchTitle: {
    color: '#1f1f1f',
    textDecoration: 'none',
    fontWeight: '600'
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
}

const PitchItem = ({ pitch, prefs, session, setPrefs }) => {
  const classes = useStyles();

  const rank = prefs.indexOf(pitch.id);

  const handleReorder = e => {
    e.preventDefault();
    e.target.value = Math.max(1, Number(e.target.value.trim())) || (rank + 1);
    e.target.value = Math.min(prefs.length + 1, Number(e.target.value));
    const newIndex = Number(e.target.value) - 1;
    // validate that e.target.value is a valid number
    const newPrefs = relocateItemInArray([...prefs], rank, newIndex);
    console.log(newPrefs);
  };

  return <>
    <li className={classes.itemContainer}>
      {Boolean(session) && <input 
        type="text" 
        inputMode="numeric" 
        name={pitch.id}
        defaultValue={rank + 1}
        onChange={handleReorder}
      />}
      <div className={classes.pitchItem}>
        <Link className={classes.pitchTitle} to={`/pitches/${pitch.id}`}>{pitch.pitch}</Link>
        <span className={classes.pitchDescription}>{pitch.description}</span>
      </div>
    </li>
  </>;
};

PitchItem.propTypes = {
  pitch: PropTypes.object.isRequired,
  prefs: PropTypes.array.isRequired,
  setPrefs: PropTypes.func.isRequired,
  session: PropTypes.object.isRequired,
};

export default PitchItem;
