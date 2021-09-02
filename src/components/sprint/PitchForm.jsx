import React from 'react';
import useAddPitch from '../../state/useAddPitch.js';
import useCommonStyles from '../../styles/useStyles.js';

const PitchForm = ({ sprintId }) => {

  const commonStyles = useCommonStyles();

  const { pitch, description, handleSubmit, handleChange } = useAddPitch();

  return (
    <form onSubmit={(e) => handleSubmit(e, sprintId)}>
      <input 
        className={commonStyles.textInputDefault}
        required
        name='pitch'
        value={pitch}
        placeholder="pitch"
        onChange={handleChange}
      />

      <textarea
        className={commonStyles.textInputDefault}
        required
        name='description'
        value={description}
        placeholder='pitch description'
        onChange={handleChange}
      />

      <button
        className={commonStyles.buttonDefault}
      >submit pitch</button>
    </form>
  );
};

export default PitchForm;