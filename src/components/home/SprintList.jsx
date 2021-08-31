import React, { useEffect } from 'react';
import SprintItem from './SprintItem';
import useCohorts from '../../state/useCohorts';
import { createUseStyles } from 'react-jss';
import cohortNames from '../../cohorts.json';
import { useAuthActions, useSession } from '../../state/SessionProvider';

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

export default function SprintList() {

  const classes = useStyles();

  const { cohorts } = useCohorts();
  const { session } = useSession();
  const { verify } = useAuthActions();

  useEffect(() => {
    if (!session) verify();
  }, [session, verify]);

  const generateCohorts = cohorts => {
    return Object.keys(cohorts).reverse().map(cohort => <div className={classes.wildDiv} key={cohort}>
      <div className={classes.cohortSprints}>
        <label htmlFor={`checkbox-${cohort}`}><h3 className={classes.cohort}>{cohortNames[cohort]}</h3></label>
        <input 
          id={`checkbox-${cohort}`}
          className={classes.cohortToggle} 
          type="checkbox" 
          defaultChecked={session && cohort === session.cohort}
        />
        <ul className={classes.sprintList}>
          {cohorts[cohort].map(sprint =>
            <SprintItem key={sprint.id} sprint={sprint}/>)
          }
        </ul>
      </div>
    </div>);
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.sprintPageTitle}>Sprints 🏃</h2>
      <div className={classes.cohortList}>

        {generateCohorts(cohorts)}

      </div>
    </div>
  );
}
