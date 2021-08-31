const API = process.env.REACT_APP_API || 'https://acp-index.herokuapp.com/api/v1';

const GET = async route => {
  return await fetch(`${API}${route}`, { credentials: 'include' })
    .then(res => res.json())
    .catch(err => console.error(err))
  ;
};

const fetchSprints = async () => await GET('/sprints');

const fetchSprint = async id => await GET(`/sprints/${id}`);

const fetchPitches = async () => await GET('/pitches');

const fetchPitchesBySprint = async id => await GET(`/sprints/${id}/pitches`);

const fetchPitch = async id => await GET(`/pitches/${id}`);

const fetchCommentsByPitch = async id => await GET(`/pitches/${id}/comments`);

const addPitch = async (pitch) => {
  return await fetch(`${API}/pitches`, { 
    method: 'POST', 
    body: JSON.stringify(pitch), 
    credentials: 'include'
  })
    .then(res => res.json())
    .catch(err => console.log(err));
};

export { 
  fetchSprints, 
  fetchSprint, 
  fetchPitches,
  fetchPitchesBySprint, 
  fetchPitch, 
  fetchCommentsByPitch,
  addPitch
};
