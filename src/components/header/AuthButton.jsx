import React from 'react';
import useCommonStyles from '../../styles/useStyles';

const AuthButton = ({ loading, session, logOut, history }) => {

  const commonStyles = useCommonStyles();

  return <>
    {loading
      ? <span>...</span>
      : Boolean(session)
        ? <button
          className={commonStyles.buttonDefault}
          onClick={() => {
            logOut().then(history.push('/'));
          }}
        >logout</button>
        : <button
          className={commonStyles.buttonDefault}
          onClick={() => history.push('/auth')}
        >Log In</button>
    }
  </>;
};

export default AuthButton;
