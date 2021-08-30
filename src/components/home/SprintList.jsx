import React from 'react';
import SprintItem from './SprintItem';
import { useSprints } from '../../state/useSprints';


export default function SprintList() {

  const { cohorts } = useSprints();

  const generateCohorts = cohorts => {
    return Object.keys(cohorts).map(cohort => <div key={cohort}>
      <h3>{cohort}</h3>
      <ul>
        {cohorts[cohort].map(sprint =>
          <SprintItem key={sprint.id} sprint={sprint} />)
        }
      </ul>
    </div>);
  };

  return (
    <div>

      {generateCohorts(cohorts)}

    </div>
  )
}