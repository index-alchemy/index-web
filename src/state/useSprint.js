import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSprint, fetchPitchesBySprint } from '../services/indexAPI.js';

export const useSprint = () => {
  const [loading, setLoading] = useState(true);
  const [sprint, setSprint] = useState(null);
  const [pitches, setPitches] = useState([]);

  const params = useParams();

  useEffect(() => {
    fetchSprint(params.id)
      .then(setSprint)
      .finally(() => setLoading(false))
      .catch(err => console.error(err))
    ;

    fetchPitchesBySprint(params.id)
      .then(setPitches)
      .catch(err => console.error(err))
    ;
  }, [params.id]);

  return { loading, sprint, pitches };
}
