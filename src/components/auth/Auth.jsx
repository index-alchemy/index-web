import React from 'react';
import cohorts from '../../cohorts.json';
import { useAuthActions, useSession } from '../../state/SessionProvider';
import useCommonStyles, { useAuthPageStyles } from '../../styles/useStyles';

const Auth = () => {

  const styles = useAuthPageStyles();
  const commonStyles = useCommonStyles();

  const { loading, session } = useSession();
  const { signUp, logIn, logOut } = useAuthActions();

  const [accountExists, setAccountExists] = React.useState(true);

  const handleSubmit = e => {
    e.preventDefault();

    const { email, password, name, cohort, ta } = e.target;
    
    // to sign up or log in ?
    const action = accountExists ? logIn : signUp;
    action({
      email: email.value,
      name: name && name.value,
      cohort: cohort && cohort.value,
      password: password.value,
      isAdmin: ta && ta.checked
    });
  };

  const handleLogOut = e => {
    e.preventDefault();
    logOut();
  };

  return <div className={commonStyles.page}>
    <h1>Index 📚</h1>
    <form
      className={styles.authForm}
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
        <select 
          defaultValue="21-03" 
          name="cohort"
        >
          {Object.keys(cohorts).map(cohort =>
            <option key={cohort} value={cohort}>{cohorts[cohort]}</option>)
          }
        </select>
        <label className={styles.checkField}>
          <span>Are you a staff member?</span>
          <input type="checkbox" name="ta"/>
        </label>
      </>}
      {!Boolean(session) && <input 
        name="password" 
        placeholder="password" 
        type="password"
      />}

      {loading
        ? <span>...</span>
        : <>
          {Boolean(session) 
            ? <button className={commonStyles.buttonPrimary} onClick={handleLogOut}>Log Out</button>
            : <button className={commonStyles.buttonPrimary} type="submit">{accountExists ? 'Log In' : 'Sign Up'}</button>
          }
        </>
      }
      {!Boolean(session) && <span
        className={commonStyles.toggleText}
        onClick={() => setAccountExists(!accountExists)}
      >{accountExists ? 'Need' : 'Already have'} an account?</span>}
    </form>

    {session && <span>Hello, {session.name}</span>}
  </div>;
};

export default Auth;
