const API = 'http://localhost:7890/api/v1';

export const fetchSprints = async () => {
  return await fetch(API + '/sprints', { 
    credentials: 'include'
  })
    .then(res => res.json())
    .catch(err => console.log(err))
};

export const fetchSprint = async id => {
  return await fetch(`${API}/sprints/${id}`, { credentials: 'include' })
    .then(res => res.json())
    .catch(err => console.log(err))
  ;
};

export const fetchPitchesBySprint = async sprintId => {
  return await fetch(`${API}/sprints/${sprintId}/pitches`, { credentials: 'include' })
    .then(res => res.json())
    .catch(err => console.log(err))
  ;
};

export const fetchPitch = async id => {
  return await fetch(`${API}/pitches/${id}`, { credentials: 'include' })
    .then(res => res.json())
    .catch(err => console.log(err))
  ;
};

export const fetchCommentsByPitch = async pitchId => {
  return await fetch(`${API}/pitches/${pitchId}/comments`, { credentials: 'include' })
    .then(res => res.json())
    .catch(err => console.log(err))
  ;
};

export const addPitch = (pitch) => {
  return fetch(`${API}/pitches`, { 
    method: 'POST', 
    body: JSON.stringify(pitch), 
    credentials: 'include'
  })
  .then(res => res.json())
  .catch(err => console.log(err));
}
