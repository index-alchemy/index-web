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

const POST = async (route, body) => {
  return await fetch(`${API}${route}`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => console.error(err))
  ;
};

const addPitch = async pitch => await POST('/pitches', pitch);

const addPreference = async pref => await POST('/preferences', pref);

export { 
  fetchSprints, 
  fetchSprint, 
  fetchPitches,
  fetchPitchesBySprint, 
  fetchPitch, 
  fetchCommentsByPitch,
  addPitch,
  addPreference
};
