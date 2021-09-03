import React from 'react';

const AuthButton = ({ loading, session, logOut, history }) => {

  return <>
    {loading
      ? <span>...</span>
      : Boolean(session)
        ? <button
          onClick={() => {
            logOut().then(history.push('/'));
          }}
        >Log Out</button>
        : <button
          onClick={() => history.push('/auth')}
        >Log In</button>
    }
  </>;
};

export default AuthButton;
