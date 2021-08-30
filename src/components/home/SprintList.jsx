import React from 'react';
import SprintItem from './SprintItem';
import { useSprints } from '../../state/useSprints';
import { createUseStyles } from 'react-jss';
import { findByLabelText } from '@testing-library/react';

export default function SprintList() {
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
      height: '100%',
      border: [0.5, 'solid', '#ABABAB'],
      borderRadius: '0.5rem',
      boxShadow: '0 0 0.25rem #0003',
      marginBottom: '1rem'
    },
    sprintList: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      padding: '0.5rem'
    },
    cohort: {
      margin: 0,
      marginTop: '0.8rem',
    }
  });
  const classes = useStyles();

  const { cohorts } = useSprints();

  const generateCohorts = cohorts => {
    return Object.keys(cohorts).reverse().map(cohort => <div className={classes.wildDiv} key={cohort}>
      <div className={classes.cohortSprints}>
        <h3 className={classes.cohort}>{cohort}</h3>
        <ul className={classes.sprintList}>
          {cohorts[cohort].map(sprint =>
            <SprintItem key={sprint.id} sprint={sprint} />)
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
  )
}