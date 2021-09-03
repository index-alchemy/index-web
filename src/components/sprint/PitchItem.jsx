import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { usePitchItemStyles } from '../../styles/useStyles';

const PitchItem = ({ pitch, rank, showSpinner, handleReorder }) => {
  const styles = usePitchItemStyles();

  return <>
    <li className={styles.pitchItem}>
      {showSpinner && <input 
        type="number" 
        inputMode="numeric" 
        name={pitch.id}
        value={rank + 1}
        onChange={handleReorder}
      />}
      <div>
        <Link 
          to={`/pitches/${pitch.id}`}
        >{pitch.pitch}</Link>

        <span>{pitch.description}</span>
      </div>
    </li>
  </>;
};

PitchItem.propTypes = {
  pitch: PropTypes.object.isRequired,
  showSpinner: PropTypes.bool,
  rank: PropTypes.number,
  handleReorder: PropTypes.func
};

export default PitchItem;
