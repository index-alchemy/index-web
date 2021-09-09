const API = process.env.REACT_APP_API || 'https://acp-index.herokuapp.com/api/v1';

const GET = async route => {
  return await fetch(`${API}${route}`, { credentials: 'include' })
    .then(res => {
      if (process.env.REACT_APP_LOUD) console.log('response from', route, res);
      return res.ok ? res.json() : null;
    })
    .catch(err => console.error(err))
  ;
};

const fetchSprints = async () => await GET('/sprints');

const fetchSprint = async id => await GET(`/sprints/${id}`);

const fetchSprintWithResult = async (id, teams) => await GET(`/sprints/${id}/result?teams=${teams}`);

const fetchPitches = async () => await GET('/pitches');

const fetchPitchesLatest = async (days) => await GET(`/pitches?days=${days}`);

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

const addSprint = async sprint => await POST('/sprints', sprint);

const updatePreference = async pref => {
  return await fetch(`${API}/preferences/${pref.id}`, {
    method: 'PUT',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pref),
  })
    .then(res => res.json())
    .catch(err => console.error(err))
  ;
};

const deletePitch = async id => {
  return await fetch(`${API}/pitches/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  })
    .then(res => res.json())
    .catch(err => console.error(err))
  ;
};

export { 
  fetchSprints, 
  fetchSprint, 
  fetchSprintWithResult,
  fetchPitches,
  fetchPitchesLatest,
  fetchPitchesBySprint, 
  fetchPitch, 
  fetchCommentsByPitch,
  addPitch,
  addPreference,
  addSprint,
  updatePreference,
  deletePitch
};
