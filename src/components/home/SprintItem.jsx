import React from 'react';
import { Link } from 'react-router-dom';

export default function SprintItem ({ sprint }) {
  return (
    <li className="sprint-item">
    <Link to={`/sprints/${sprint.id}`}>{sprint.name}</Link>
    </li>
  )
}