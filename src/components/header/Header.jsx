import React, { useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import AuthButton from './AuthButton';
import { useAuthActions, useSession } from '../../state/SessionProvider';
import { useHeaderStyles } from '../../styles/useStyles';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  const styles = useHeaderStyles();

  const { loading, session } = useSession();
  const { logOut, verify } = useAuthActions();
  const history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!session) verify();
  }, [session, verify]);

  return (
    <header className={styles.header}>
      <h3><Link to="/">Index</Link><ThemeSwitcher/></h3>

      <nav>
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