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
      background: 'transparent',
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

const PitchItem = ({ pitch, rank, validCohort, handleReorder }) => {
  const classes = useStyles();

  return <>
    <li className={classes.itemContainer}>
      {validCohort && <input 
        type="number" 
        inputMode="numeric" 
        name={pitch.id}
        value={rank + 1}
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
  rank: PropTypes.number.isRequired,
  validCohort: PropTypes.bool,
  handleReorder: PropTypes.func.isRequired
};

export default PitchItem;
