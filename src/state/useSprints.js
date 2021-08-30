import { useState, useEffect } from 'react';
import { fetchSprints } from '../services/indexAPI.js';

export const useSprints = () => {
  const [cohorts, setCohorts] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSprints()
      .then(sprints => {
        setCohorts(sprints.reduce((acc, sprint) => {
          if (acc[sprint.cohort]) acc[sprint.cohort].push(sprint);
          else acc[sprint.cohort] = [sprint];
    
          return acc;
        }, {}));
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  return { cohorts, loading };
}
