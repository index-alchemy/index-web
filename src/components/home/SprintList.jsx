import React, { useEffect } from 'react';
import SprintItem from './SprintItem';
import { useAuthActions, useSession } from '../../state/SessionProvider';
import useCohorts from '../../state/useCohorts.js';
import useCommonStyles, { useHomePageStyles } from '../../styles/useStyles';
import SprintsForm from './SprintsForm';
import parseCohort from '../../utils/parseCohorts';

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
    return Object.keys(cohorts).filter(k => cohorts[k].length).map(cohort =>
      <div className={styles.cohortItem} key={cohort}>
        <label htmlFor={`checkbox-${cohort}`}>
          <h4 className={styles.cohortName}>{parseCohort(cohort)}</h4>
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
      </div>
    ).reverse();
  };

  return (
    <div className={commonStyles.page}>
      <h2>Sprints 🏃</h2>

      {isAdmin && <>
        <section className={`${styles.sprintsForm} ${commonStyles.adminArea}`}>
          <SprintsForm />
        </section>
      </>}

      <section className={styles.cohortList}>
        {generateCohorts(cohorts)}
      </section>

    </div>
  );
};

export default SprintList;
