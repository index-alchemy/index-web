const API = 'http://localhost:7890/api/v1';

const GET = async route => {
  return await fetch(`${API}${route}`, { credentials: 'include' })
    .then(res => res.json())
    .catch(err => console.error(err))
  ;
};

const fetchSprints = async () => await GET('/sprints');

const fetchSprint = async id => await GET(`/sprints/${id}`);

const fetchPitchesBySprint = async id => await GET(`/sprints/${id}/pitches`);

const fetchPitch = async id => await GET(`/pitches/${id}`);

const fetchCommentsByPitch = async id => await GET(`/pitches/${id}/comments`);

export { 
  fetchSprints, 
  fetchSprint, 
  fetchPitchesBySprint, 
  fetchPitch, 
  fetchCommentsByPitch 
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
