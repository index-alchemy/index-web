import React from 'react';
import useCommonStyles from '../../styles/useStyles';
import Auth from '../auth/Auth';

const Landing = () => {

  const commonStyles = useCommonStyles();

  return (
    <div className={commonStyles.page}>
      <Auth />
    </div>
  );
};

export default Landing;
