import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PitchItem = ({ pitch }) => {
  return <>
    <li className="PitchItem">
      <Link to={`/pitches/${pitch.id}`}>{pitch.pitch}</Link>
      <span>{pitch.description}</span>
    </li>
  </>;
};

PitchItem.propTypes = {
  pitch: PropTypes.object.isRequired
};

export default PitchItem;
