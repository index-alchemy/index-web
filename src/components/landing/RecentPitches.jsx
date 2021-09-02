import React from 'react';
import PitchItem from '../sprint/PitchItem';
import { useLandingPageStyles } from '../../styles/useStyles';

const RecentPitches = ({ loading, pitches }) => {
  const styles = useLandingPageStyles();

  return <>
    <div className={styles.recentPitches}>
      <h4>Recent Pitches</h4>
      {loading 
        ? <span>Loading...</span>
        : <ul>
          {pitches.reverse().map(pitch =>
            <PitchItem key={pitch.id} pitch={pitch}/>
          )}
        </ul>
      }
    </div>
  </>;
};

export default RecentPitches;
