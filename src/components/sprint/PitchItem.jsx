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
          to={`/pitches/${pitch.id || pitch.objectID}`}
        >{pitch.pitch || pitch.title}</Link>

        <span>{pitch.description}</span>

        {pitch.objectID && <>
          {pitch.suggestedBy && <span>
            Suggested by {pitch.suggestedBy} on {pitch.suggestedOn}
          </span>}

          {pitch.projectURL 
            ? <>
              <span>
                Made by {pitch.team.join(', ')} of the {pitch.cohort} cohort.
              </span>
              <span>
                Project URL: <a href={pitch.projectURL}>{pitch.projectURL}</a>
              </span>
            </>
            : <span>Suggested for the {pitch.cohort} cohort</span>
          }
        </>}
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
