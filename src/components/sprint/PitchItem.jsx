import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
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

const PitchItem = ({ pitch }) => {
  const classes = useStyles();

  return <>
    <li className={classes.pitchItem}>
      <Link className={classes.pitchTitle} to={`/pitches/${pitch.id}`}>{pitch.pitch}</Link>
      <span className={classes.pitchDescription}>{pitch.description}</span>
    </li>
  </>;
};

PitchItem.propTypes = {
  pitch: PropTypes.object.isRequired
};

export default PitchItem;
