import React from 'react';
import cohorts from '../../cohorts.json';
import { useAuthActions, useSession } from '../../state/SessionProvider';
import { createUseStyles } from 'react-jss';

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
  },
  authLogOutButton: {
    marginTop: 0,
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

const Auth = () => {
  const classes = useStyles();

  const { loading, session } = useSession();
  const { signUp, logIn, logOut } = useAuthActions();

  const [accountExists, setAccountExists] = React.useState(true);

  const handleSubmit = e => {
    e.preventDefault();

    const { email, password, name, cohort, ta } = e.target;
    
    // decide whether to sign up or log in
    const action = accountExists ? logIn : signUp;
    action({
      email: email.value,
      name: name && name.value,
      cohort: cohort && cohort.value,
      password: password.value,
      isAdmin: ta.checked
    });
  };

  const handleLogOut = e => {
    e.preventDefault();
    logOut();
  };

  return <div className={classes.authPage}>
    <h1>Index 📚</h1>
    <form
      className={classes.authForm}
      onSubmit={handleSubmit}
    >
      <input 
        name="email" 
        placeholder="email" 
        type="text" 
        defaultValue={session && session.email}
        disabled={Boolean(session)}
      />
      {!accountExists && <>
        <input 
          name="name" 
          placeholder="name" 
          type="text" 
        />
        <select defaultValue="21-03" name="cohort">
          {Object.keys(cohorts).map(cohort =>
            <option key={cohort} value={cohort}>{cohorts[cohort]}</option>)
          }
        </select>
          <label>
          Staff?
            <input type="checkbox" name="ta"/>
          </label>
      </>}
      {!Boolean(session) && <input name="password" placeholder="password" type="password"/>}

      {loading
        ? <span>...</span>
        : <>
          {Boolean(session) 
            ? <button className={classes.authLogOutButton} onClick={handleLogOut}>Log Out</button>
            : <button className={classes.authButton} type="submit">{accountExists ? 'Log In' : 'Sign Up'}</button>
          }
        </>
      }
      {!Boolean(session) && <span
        className={classes.authToggle}
        onClick={() => setAccountExists(!accountExists)}
      >{accountExists ? 'Need' : 'Already have'} an account?</span>}
    </form>

    {session && <span>Hello, {session.name}</span>}
  </div>;
};

export default Auth;
