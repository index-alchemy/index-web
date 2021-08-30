import { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signUp as postSignUp, logIn as postLogIn } from '../services/indexAuthAPI.js';

const SessionContext = createContext();

const SessionProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState(null);

  const history = useHistory();

  /*
  useEffect(() => {

  }, []);
  */

  const signOn = async (action, data) => {
    setLoading(true);
    return await action(data)
      .then(res => setSession(res))
      .finally(() => {
        setLoading(false);
        history.push('/home');
      })
      .catch(err => console.error(err))
      ;
  }

  const signUp = async signup => signOn(postSignUp, signup);

  const logIn = async login => signOn(postLogIn, login);

  const logOut = () => setSession(null);

  return <SessionContext.Provider value={{ loading, session, signUp, logIn, logOut }}>
    {children}
  </SessionContext.Provider>;
};

const useAuthActions = () => {
  const { signUp, logIn, logOut } = useContext(SessionContext);
  return { signUp, logIn, logOut };
};

const useSession = () => {
  const { loading, session } = useContext(SessionContext);
  return { loading, session };
};

export { SessionProvider, useAuthActions, useSession };
