import React from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

export default function Header() {
  const useStyles = createUseStyles({
    header: {
      height: '100px',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: [1, 'solid', 'lightgrey'],
      '& h3': {
        marginLeft: '1rem'
      },
    },
    headerNav: {
      display: 'flex',
      alignItems: 'center',
      '& a': {
        marginRight: '1rem',
        color: '#1f1f1f',
        fontWeight: '500'
      }
    }

  });
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <h3>Index 📚</h3>
      <div class={classes.headerNav}>
        <Link to="/home">Sprints</Link>
        <Link to="/search">Search</Link>
      </div>
    </header>
  );
};