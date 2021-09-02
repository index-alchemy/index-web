import React from 'react';
import { useSprintPageStyles } from '../../styles/useStyles';

const Result = ({ result }) => {

  const styles = useSprintPageStyles();

  return <>
    <ul className={styles.result}>
      {Object.keys(result).map(pitch => <li>
        <div>
          <label>{pitch}</label>
          {result[pitch].map(user => <span>{user}</span>)}
        </div>
      </li>)}
    </ul>
  </>;
};

export default Result;
