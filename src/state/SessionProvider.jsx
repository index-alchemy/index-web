import { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { verify as postVerify, logOut as postLogOut } from '../services/indexAuthAPI.js';

const LOUD = process.env.REACT_APP_LOUD === 'true';

const SessionContext = createContext();

const SessionProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (LOUD) console.log('Session change:', session);
    if (session) setIsAdmin(!Boolean(session?.cohort) || session?.isAdmin);
  }, [session]);

  const logOut = async () => {
    if (LOUD) console.log('Logging out.', session);
    setLoading(true);
    postLogOut()
      .then(() => setSession(null))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
    ;
  };

  const verify = async () => {
    setLoading(true);
    postVerify()
      .then(user => {
        if (user?.id) setSession(user);
        else history.push('/');
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
    ; 
  };

  return <SessionContext.Provider value={{ loading, session, isAdmin, logOut, verify }}>
    {children}
  </SessionContext.Provider>;
};

const useAuthActions = () => {
  const { logOut, verify } = useContext(SessionContext);
  return { logOut, verify };
};

const useSession = () => {
  const { loading, session, isAdmin } = useContext(SessionContext);
  return { loading, session, isAdmin };
};

export { SessionProvider, useAuthActions, useSession };
