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
    // check localstorage to get the user_id of the last logged in user
    // if it exists, check the cookies to make sure it's valid
    // if that's valid, then set the current user
  }, []);

  useEffect(() => {
    // when a new currentUser is set, save their user id to localstorage
  }, [currentUser]);

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
    }
  }, [userSignup]);

  return { loading, currentUser, setUserLogin, setUserSignup, logOut };
};

export default useAuth;
