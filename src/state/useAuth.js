import { useState, useEffect } from 'react';
import { signUp, logIn } from '../services/indexAPI.js';

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [userLogin, setUserLogin] = useState();
  const [userSignup, setUserSignup] = useState();

  const logOut = () => {
    setCurrentUser(null);
  };

  useEffect(() => {
    // check localstorage to see if user is signed in already
  }, []);

  useEffect(() => {
    if (userLogin) {
      setLoading(true);
      logIn(userLogin)
        .then(setCurrentUser)
        .finally(() => setLoading(false))
        .catch(err => console.log(err))
      ;
    }
  }, [userLogin]);

  useEffect(() => {
    if (userSignup) {
      setLoading(true);
      signUp(userSignup)
        .then(setCurrentUser)
        .finally(() => setLoading(false))
        .catch(err => console.log(err))
      ;
      console.log(currentUser);
    }
  }, [userSignup]);

  return { loading, currentUser, setUserLogin, setUserSignup, logOut };
};

export default useAuth;
