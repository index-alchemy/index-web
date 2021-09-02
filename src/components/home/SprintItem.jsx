import React from 'react';
import { Link } from 'react-router-dom';

const oneYearAgo = new Date();
oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

const SprintItem = ({ sprint }) => {

  return <>
    <li 
      hidden={(
        !Boolean(sprint.count)
        && (new Date(sprint.createdAt) - oneYearAgo) < 0
      )}
    >
      <Link to={`/sprints/${sprint.id}`}>
        <span>{sprint.name}</span>
        <span>{sprint.count}</span>
      </Link>
    </li>
  </>;
};

export default SprintItem;
