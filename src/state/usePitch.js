import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPitch, fetchCommentsByPitch } from '../services/indexAPI.js';

const usePitch = () => {
  const [loading, setLoading] = useState(true);
  const [pitch, setPitch] = useState(null);
  const [comments, setComments] = useState([]);

  const params = useParams();

  const getPitch = async (id) => {
    setLoading(true);
    fetchPitch(id)
      .then(setPitch)
      .finally(() => setLoading(false))
      .catch(err => console.error(err))
    ;
  };

  const getComments = async (id) => {
    setLoading(true);
    fetchCommentsByPitch(id)
      .then(setComments)
      .finally(() => setLoading(false))
      .catch(err => console.error(err))
    ;
  };

  useEffect(() => {
    getPitch(params.id);
    getComments(params.id);
  }, []);

  return { loading, pitch, comments, getPitch, getComments };
};

export default usePitch;