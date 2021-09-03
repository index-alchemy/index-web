import React from 'react';
import { addSprint } from '../../services/indexAPI';

const SprintsForm = () => {

  const handleAddSprints = (e) => {
    e.preventDefault();
    const cohort = e.target.cohort.value;

    ['Foundations I', 'Foundations II', 'Career Track Mid', 'Career Track Final'].forEach(sprintName => {
      // make the sprint
      const sprint = {
        name: sprintName,
        cohort
      };
  
      // post a sprint
      addSprint(sprint);
    });
  };

  return (
    <form onSubmit={handleAddSprints}>
      <input type="month" name="cohort"/>
      <button type="submit">add a cohort</button>
    </form>
  );

};

export default SprintsForm;