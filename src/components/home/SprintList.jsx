import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import SprintItem from './SprintItem';
import { useAuthActions, useSession } from '../../state/SessionProvider';
import useCohorts from '../../state/useCohorts.js';
import cohortNames from '../../cohorts.json';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  cohortSprints: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    width: '100%',
    minWidth: 'calc(400px + 2.6rem)',
    '@media (max-width: 500px)': {
      minWidth: 'calc(300px + 2.6rem)',
    },
    height: '100%',
    border: [0.5, 'solid', '#ABABAB'],
    borderRadius: '0.5rem',
    boxShadow: '0 0 0.25rem #0003',
    marginBottom: '1rem',
    padding: '0.8rem',
  },
  sprintList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    padding: '0',
    width: '100%',
    height: '100%'
  },
  cohort: {
    margin: 0,
    cursor: 'pointer'
  },
  cohortToggle: {
    display: 'none',
    '& + ul': { display: 'none' },
    '&:checked + ul': { display: 'flex' },
  }
});

const SprintList = () => {

  const classes = useStyles();

  const { cohorts } = useCohorts();
  const { session, isAdmin } = useSession();
  const { verify } = useAuthActions();

  useEffect(() => {
    if (!session) verify();
  }, [session, verify]);

  const generateCohorts = cohorts => {
    return Object.keys(cohorts).reverse().map(cohort => <>
      {Boolean(cohorts[cohort].reduce((acc, sprint) => acc + sprint.count, 0)) &&
      <div className={classes.cohortSprints} key={cohort}>
        <label htmlFor={`checkbox-${cohort}`}>
          <h3 className={classes.cohort}>{cohortNames[cohort]}</h3>
        </label>
        <input 
          id={`checkbox-${cohort}`}
          className={classes.cohortToggle} 
          type="checkbox" 
          defaultChecked={session && cohort === session.cohort}
        />
        <ul className={classes.sprintList}>
          {cohorts[cohort].map(sprint =>
            <SprintItem key={sprint.id} sprint={sprint}/>
          )}
        </ul>
      </div>}</>
    );
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.sprintPageTitle}>Sprints 🏃</h2>
      <div className={classes.cohortList}>

        {generateCohorts(cohorts)}

      </div>

      {isAdmin && <button>create new sprint</button>}
    </div>
  );
};

export default SprintList;
