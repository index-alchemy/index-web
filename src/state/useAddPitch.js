import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addPitch } from '../services/indexAPI.js';

const useAddPitch = () => {

  const [pitch, setPitch] = useState('');
  const [description, setDescription] = useState('');
  const history = useHistory();

  const handleChange = ({ target }) => {
    switch (target.name) {
      case 'pitch':
        setPitch(target.value);
        break;
      case 'description':
        setDescription(target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e, sprintId, userId) => {
    e.preventDefault();

    addPitch({ pitch, description, sprintId, userId })
      .then((pitch) => {
        if (pitch.id) history.push(`/pitches/${pitch.id}`);
      })
    ;
  };

  return { pitch, description, handleChange, handleSubmit };

}

export default useAddPitch;