import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import AuthButton from './AuthButton';
import { useAuthActions, useSession } from '../../state/SessionProvider';

const useStyles = createUseStyles({
  header: {
    height: '6rem',
    backgroundColor: '#fff',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: [1, 'solid', 'lightgrey'],
    '& h3': {
      marginLeft: '1rem'
    },
    '& a': {
      textDecoration: 'none',
      color: '#1f1f1fe4'
    }
  },
  headerNav: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    '& > *': {
      color: '#696969',
      fontWeight: '500'
    }
  }
});

export default function Header() {
  const classes = useStyles();

  const { loading, session } = useSession();
  const { logOut } = useAuthActions();
  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <header className={classes.header}>
      <h3><Link to="/">Index 📚</Link></h3>

      <nav className={classes.headerNav}>
        {Boolean(session) && pathname !== '/home'
          && <Link to="/home">Home</Link>
        }
        {pathname !== '/auth' && <AuthButton
          loading={loading}
          session={session}
          logOut={logOut}
          history={history}
        />}
      </nav>
    </header>
  );
};