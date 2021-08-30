import React from 'react';
import { Link } from 'react-router-dom';
import { useSprint } from '../../state/useSprint';
import PitchItem from './PitchItem';

const SprintPage = () => {

  const { loading, sprint, pitches } = useSprint();

  

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
              <Link to={{ pathname: '/add-pitch', state: { sprintId: sprint.id } }}>Add a Pitch</Link>
            </ul>
        </>
      }
    </div>
  </>;
};

export default SprintPage;
