import { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signUp as postSignUp, logIn as postLogIn, verify as postVerify, logOut as postLogOut } from '../services/indexAuthAPI.js';
import { getPrevUser, setPrevUser } from './localstorage.js';

const SessionContext = createContext();

const SessionProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState(null);

  const history = useHistory();

  const signOn = async (action, data) => {
    setLoading(true);
    return await action(data)
      .then(res => {
        setSession(res.status >= 300 ? null : res);
        if (!(res.status >= 300)) history.push('/home');
        setPrevUser(res);
      })
      .finally(() => setLoading(false))
      .catch(err => console.error(err))
    ;
  };

  const signUp = async signup => signOn(postSignUp, signup);

  const logIn = async login => signOn(postLogIn, login);

  const logOut = async () => {
    console.log('logging out', session);
    postLogOut()
      .then(() => setSession(null))
      .catch(err => console.error(err))
    ;
  };

  const verify = async () => {
    postVerify()
      .then(ok => setSession(ok ? getPrevUser() : null))
      .catch(err => console.error(err))
    ; 
  };

  return <SessionContext.Provider value={{ loading, session, signUp, logIn, logOut, verify }}>
    {children}
  </SessionContext.Provider>;
};

const useAuthActions = () => {
  const { signUp, logIn, logOut, verify } = useContext(SessionContext);
  return { signUp, logIn, logOut, verify };
};

const useSession = () => {
  const { loading, session } = useContext(SessionContext);
  return { loading, session };
};

export { SessionProvider, useAuthActions, useSession };
