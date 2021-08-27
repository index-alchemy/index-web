import React from 'react';
import { useSprint } from '../../state/useSprint';
import PitchItem from './PitchItem';

const SprintPage = () => {

  const { loading, sprint, pitches } = useSprint();

  console.log(pitches);

  return <>
    <div className="SprintPage">
      {loading 
        ? <span>loading...</span>
        : <>
            <h1>{sprint.name}</h1>
            <ul>
              {pitches.map(pitch => 
                <PitchItem key={pitch.id} pitch={pitch}/>
              )}
            </ul>
        </>
      }
    </div>
  </>;
};

export default SprintPage;
