import React from 'react';
import useAuth from '../../state/useAuth.js';

const Auth = () => {

  const { loading, currentUser, setUserLogin, setUserSignup, logOut } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    setUserSignup({ 
      email: e.target.email.value, 
      name: e.target.name.value,
      cohort: e.target.cohort.value,
      password: e.target.password.value
    });
  };

  return <>
    <form 
      className="Auth"
      onSubmit={handleSubmit}
    >
      <input name="name" placeholder="name" type="text"/>
      <input name="email" placeholder="email" type="text"/>
      <input name="password" placeholder="password" type="password"/>
      <select name="cohort">
        <option value="21-06jul">July 2021</option>
        <option value="21-06jun">June 2021</option>
        <option value="21-04apr">April 2021</option>
        <option value="21-03mar">March 2021</option>
      </select>

      {loading 
        ? <span>...</span>
        : <button type="submit">do the thing</button>
      }
    </form>

    <span>{'' + currentUser}</span>
  </>;
};

export default Auth;
