import React from 'react';
import cohorts from '../../cohorts.json';
import { useAuthActions, useSession } from '../../state/SessionProvider';

const Auth = () => {

  const { loading, session } = useSession();
  const { signUp, logIn, logOut } = useAuthActions();

  const [accountExists, setAccountExists] = React.useState(true);

  const handleSubmit = e => {
    e.preventDefault();

    const { email, password, name, cohort } = e.target;

    // decide whether to sign up or log in
    const action = accountExists ? logIn : signUp;
    action({ 
      email: email.value, 
      name: name && name.value,
      cohort: cohort && cohort.value,
      password: password.value
    });
  };

  return <>
    <form 
      className="Auth"
      onSubmit={handleSubmit}
    >
      <input name="email" placeholder="email" type="text"/>
      {!accountExists && <>
        <input name="name" placeholder="name" type="text"/>
        <select defaultValue="21-03" name="cohort">
          {cohorts.map(cohort => 
            <option key={cohort.code} value={cohort.code}>{cohort.name}</option>)
          }
        </select>
      </>}
      <input name="password" placeholder="password" type="password"/>

      {loading 
        ? <span>...</span>
        : <>
          <button type="submit">{accountExists ? 'Log In!' : 'Sign Up :)'}</button>
          {Boolean(session) && <button onClick={logOut}>Log Out</button>}
        </>
      }
      <span 
        className="auth-toggle"
        onClick={() => setAccountExists(!accountExists)}
      >{accountExists ? 'Need' : 'Already have'} an account?</span>
    </form>

    {session && <span>Hello, {session.name}</span>}
  </>;
};

export default Auth;
