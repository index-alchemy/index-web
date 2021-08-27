import { useState, useEffect } from 'react';
import { fetchSprints } from '../services/indexAPI.js';

export const useSprints = () => {
  const [sprints, setSprints] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSprints()
      .then(sprints => {
        setSprints(sprints);
        setLoading(false)
      })
      .catch(err => console.log(err));
  }, []);

  return { sprints, loading };
}