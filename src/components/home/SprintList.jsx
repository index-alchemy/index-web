import React, { useEffect } from 'react';
import SprintItem from './SprintItem';
import { useAuthActions, useSession } from '../../state/SessionProvider';
import useCohorts from '../../state/useCohorts.js';
import cohortNames from '../../cohorts.json';
import useCommonStyles, { useHomePageStyles } from '../../styles/useStyles';

const SprintList = () => {

  const commonStyles = useCommonStyles();
  const styles = useHomePageStyles();

  const { cohorts } = useCohorts();
  const { session, isAdmin } = useSession();
  const { verify } = useAuthActions();

  useEffect(() => {
    if (!session) verify();
  }, [session, verify]);

  const generateCohorts = cohorts => {
    return Object.keys(cohorts).reverse().map(cohort => <>
      {Boolean(cohorts[cohort].reduce((acc, sprint) => acc + sprint.count, 0)) &&
      <div className={styles.cohortItem} key={cohort}>
        <label htmlFor={`checkbox-${cohort}`}>
          <h4 className={styles.cohortName}>{cohortNames[cohort]}</h4>
        </label>
        <input 
          id={`checkbox-${cohort}`}
          className={styles.sprintListToggle} 
          type="checkbox" 
          defaultChecked={session && cohort === session.cohort}
        />
        <ul className={styles.sprintList}>
          {cohorts[cohort].map(sprint =>
            <SprintItem 
              key={sprint.id} 
              sprint={sprint}
              className={styles.sprintItem}
            />
          )}
        </ul>
      </div>}</>
    );
  };

  return (
    <div className={commonStyles.page}>
      <h2>Sprints 🏃</h2>

      <section className={styles.cohortList}>
        {generateCohorts(cohorts)}
      </section>

      {isAdmin && <>
        <hr/>
        <section>
          <button 
            className={commonStyles.buttonDefault}
          >create new sprint</button>
        </section>
      </>}
    </div>
  );
};

export default SprintList;
