import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addPitch } from '../services/indexAPI.js';
import { 
  getPitchProposal as getLSPitchProposal,
  setPitchProposal as setLSPitchProposal,
  clearPitchProposal as clearLSPitchProposal
} from './localstorage.js';

const useAddPitch = () => {

  const pitchProposal = getLSPitchProposal();

  const [pitch, setPitch] = useState(pitchProposal.title || '');
  const [description, setDescription] = useState(pitchProposal.description || '');
  const history = useHistory();

  const handleChange = ({ target }) => {
    switch (target.name) {
      case 'pitch':
        setPitch(target.value);
        setLSPitchProposal(null, target.value);
        break;
      case 'description':
        setDescription(target.value);
        setLSPitchProposal(target.value, null);
        break;
    }
  };

  const handleSubmit = async (e, sprintId, userId) => {
    e.preventDefault();

    addPitch({ pitch, description, sprintId, userId })
      .then((pitch) => {
        if (pitch.id) {
          history.push(`/pitches/${pitch.id}`);
          clearLSPitchProposal();
        }
      })
    ;
  };

  return { pitch, description, handleChange, handleSubmit };

}

export default useAddPitch;