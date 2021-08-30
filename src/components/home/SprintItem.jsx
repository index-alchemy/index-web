import React from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

export default function SprintItem({ sprint }) {
  const useStyles = createUseStyles({
    sprintItem: {
      width: '400px',
      listStyle: 'none',
      margin: '0.5rem',
      padding: '0.5rem',
      backgroundColor: '#f5f5f5',
      border: [0.5, 'solid', '#ABABAB'],
      borderRadius: '0.5rem',
      cursor: 'pointer',
      '@media (max-width: 500px)': {
        width: '300px',
      },
      '&:hover': {
        backgroundColor: '#e5e5e5',
      },
      '& a': {
        color: '#1f1f1f',
        textDecoration: 'none',
      },
    }
  });
  const classes = useStyles();
  return (
    <li className={classes.sprintItem}>
      <Link to={`/sprints/${sprint.id}`}>{sprint.name}</Link>
    </li>
  )
}