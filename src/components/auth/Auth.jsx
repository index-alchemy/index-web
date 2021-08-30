import React from 'react';
import useAuth from '../../state/useAuth.js';
import cohorts from '../../cohorts.json';
import { createUseStyles } from 'react-jss';

const Auth = () => {
  const useStyles = createUseStyles({
    authPage: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '90vh',
      color: '#1F1F1F'
    },
    authForm: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.25rem',
      width: '20rem',
      padding: '1rem',
      background: 'none',
      border: [0.5, 'solid', '#ABABAB'],
      borderRadius: '0.5rem',
      boxShadow: '0 0 0.25rem #0003'
    },
    authToggle: {
      cursor: 'pointer',
      color: '#46a',
      fontWeight: '400',
      fontSize: '0.8rem',
    },
    authButton: {
      marginTop: '0.7rem',
      marginBottom: '0.7rem',
      backgroundColor: '#F9F9FB',
      outline: 'none',
      border: [0.5, 'solid', '#ABABAB'],
      borderRadius: '2px',
      padding: '2px 8px',
      fontSize: '0.8rem',
      color: '#696969',
      cursor: 'pointer',
      boxShadow: '0 0 0.1rem #0003'
    }
  });
  const classes = useStyles();

  const { loading, currentUser, setUserLogin, setUserSignup, logOut } = useAuth();
  const [accountExists, setAccountExists] = React.useState(true);

  const handleSubmit = e => {
    e.preventDefault();

    const { email, password, name, cohort } = e.target;

    // decide whether to sign up or log in
    const action = accountExists ? setUserLogin : setUserSignup;
    action({
      email: email.value,
      name: name && name.value,
      cohort: cohort && cohort.value,
      password: password.value
    });
  };

  return (
    <div className={classes.authPage}>
      <h1>Index 📚</h1>
      <form
        className={classes.authForm}
        onSubmit={handleSubmit}
      >
        <input name="email" placeholder="email" type="text" />
        {!accountExists && <>
          <input name="name" placeholder="name" type="text" />
          <select defaultValue="21-03" name="cohort">
            {cohorts.map(cohort =>
              <option key={cohort.code} value={cohort.code}>{cohort.name}</option>)
            }
          </select>
        </>}
        <input name="password" placeholder="password" type="password" />

        {loading
          ? <span>...</span>
          : <>
            <button className={classes.authButton} type="submit">{accountExists ? 'Log In' : 'Sign Up'}</button>
            {Boolean(currentUser) && <button className={classes.authButton} onClick={logOut}>Log Out</button>}
          </>
        }
        <span
          className={classes.authToggle}
          onClick={() => setAccountExists(!accountExists)}
        >{accountExists ? 'Need' : 'Already have'} an account?</span>
      </form>

      {currentUser && <span>Hello, {currentUser.name}</span>}
    </div>
  );
};

export default Auth;
