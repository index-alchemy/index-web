import React from 'react';
import useAddPitch from '../../state/useAddPitch';


const PitchForm = (props) => {

  const { pitch, description, handleSubmit, handleChange } = useAddPitch();
  const { sprintId } = props.location.state;

  return (
    <form onSubmit={(e) => handleSubmit(e, sprintId)}>
      <input 
        required
        name='pitch'
        value={pitch}
        placeholder="pitch"
        onChange={handleChange}
      />

      <textarea
        required
        name='description'
        value={description}
        placeholder='pitch description'
        onChange={handleChange}
        />

      <button>submit pitch</button>
    </form>
  );
};

export default PitchForm;