import React from 'react';
import SprintItem from './SprintItem';
import { useSprints } from '../../state/useSprints';


export default function SprintList() {
  const { sprints } = useSprints();

  console.log('sprint', sprints);
  return(
    <div>
      <ul>
        {sprints.map(sprint => 
          <SprintItem key={sprint.id} sprint={sprint}/>)}
      </ul>
    </div>
  )
}