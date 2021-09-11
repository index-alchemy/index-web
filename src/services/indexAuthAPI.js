
const { REACT_APP_API_URL: API_URL, REACT_APP_LOUD: LOUD } = process.env;

const API = API_URL || 'https://acp-index.herokuapp.com/api/v1';

const request = async (method, url, body = null) => {
  return await fetch(`${API}${url}`, {
    method,
    headers: body ? { 'Content-Type': 'application/json' } : {},
    credentials: 'include',
    body: body ? JSON.stringify(body) : null,
  })
    .then(res => {
      if (LOUD) console.log('response', res);
      return res.json()
    })
    .catch(err => console.error(err))
  ;
};

const verify = async () => 
  await fetch(`${API}/auth/verify`, { credentials: 'include' })
    .then(res => res.ok)
    .catch(err => console.error(err))
;

const logOut = async () => 
  await request('GET', '/auth/logout')
;

export { signUp, logIn, verify, logOut };
