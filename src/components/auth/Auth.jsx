import React from 'react';
import useAuth from '../../state/useAuth.js';

const Auth = () => {

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

  return <>
    <form 
      className="Auth"
      onSubmit={handleSubmit}
    >
      <input name="email" placeholder="email" type="text"/>
      {!accountExists && <>
        <input name="name" placeholder="name" type="text"/>
        <select defaultValue="21-03mar" name="cohort">
          <option value="21-11nov">November 2021</option>
          <option value="21-09sep">September 2021</option>
          <option value="21-08aug">August 2021</option>
          <option value="21-06jun">June 2021</option>
          <option value="21-04apr">April 2021</option>
          <option value="21-03mar">March 2021</option>
          <option value="21-01jan">January 2021</option>
        </select>
      </>}
      <input name="password" placeholder="password" type="password"/>

      {loading 
        ? <span>...</span>
        : <>
          <button type="submit">{accountExists ? 'Log In!' : 'Sign Up :)'}</button>
          {Boolean(currentUser) && <button onClick={logOut}>Log Out</button>}
        </>
      }
      <span 
        className="auth-toggle"
        onClick={() => setAccountExists(!accountExists)}
      >{accountExists ? 'Need' : 'Already have'} an account?</span>
    </form>

    {currentUser && <span>Hello, {currentUser.name}</span>}
  </>;
};

export default Auth;
