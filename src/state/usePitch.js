import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchPitch, fetchCommentsByPitch, deletePitch } from '../services/indexAPI.js';

const usePitch = () => {
  const [loading, setLoading] = useState(true);
  const [pitch, setPitch] = useState(null);
  const [comments, setComments] = useState([]);

  const params = useParams();
  const history = useHistory();

  const getPitch = async id => {
    setLoading(true);
    fetchPitch(id)
      .then(pitch => {
        if (!Boolean(pitch)) history.goBack();
        else {
          setPitch(pitch);
          setLoading(false);
        }
      })
      .catch(err => console.error(err))
    ;
  };

  const removePitch = async id => {
    setLoading(true);
    deletePitch(id)
      .then(() => history.goBack())
      .catch(err => console.error(err))
    ;
  };

  const getComments = async (id) => {
    setLoading(true);
    fetchCommentsByPitch(id)
      .then(setComments)
      .catch(err => console.error(err))
    ;
  };

  useEffect(() => {
    getPitch(params.id);
    getComments(params.id);
  }, [params.id]);

  return { loading, pitch, comments, getPitch, getComments, removePitch };
};

export default usePitch;