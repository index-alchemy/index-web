import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addPitch } from '../services/indexAPI';

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
  }

  const handleSubmit = async (e, sprintId) => {
    e.preventDefault();

    addPitch({ pitch, description, sprintId })
      .then((pitch) => {
        history.push(`/sprints/${pitch.sprintId}`);
      })
    ;
  }

  return { pitch, description, handleChange, handleSubmit };

}

export default useAddPitch;