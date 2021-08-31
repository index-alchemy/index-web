import { useState, useEffect } from 'react';
import { fetchSprints, fetchPitches } from '../services/indexAPI.js';

const useCohorts = () => {
  const [cohorts, setCohorts] = useState([]);
  const [sprints, setSprints] = useState([]);
  const [pitches, setPitches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPitches()
      .then(res => res.status >= 300 ? [] : res)
      .then(res => setPitches(res))
      .catch(err => console.error(err))
    ;
  }, []);

  useEffect(() => {
    fetchSprints()
      .then(res => res.status >= 300 ? [] : res)
      .then(sprints => {
        setSprints(sprints);
        setCohorts(sprints.reduce((acc, sprint) => {
          sprint.count = pitches.filter(pitch => pitch.sprintId === sprint.id).length;

          if (acc[sprint.cohort]) acc[sprint.cohort].push(sprint);
          else acc[sprint.cohort] = [sprint];
    
          return acc;
        }, {}));
      })
      .then(() => setLoading(false))
      .catch(err => console.log(err));
  }, [pitches]);

  return { loading, cohorts, sprints, pitches };
};

export default useCohorts;
