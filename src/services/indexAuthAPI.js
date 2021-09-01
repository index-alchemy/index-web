const API = process.env.REACT_APP_API || 'https://acp-index.herokuapp.com/api/v1';

const request = async (method, url, body = null) => {
  return await fetch(`${API}${url}`, {
    method,
    headers: body ? { 'Content-Type': 'application/json' } : {},
    credentials: 'include',
    body: body ? JSON.stringify(body) : null,
  })
    .then(res => {
      console.log('response', res);
      return res.json()
    })
    .catch(err => console.error(err))
  ;
};

const signUp = async credentials => 
  await request('POST', '/users/auth/signup', credentials)
;

const logIn = async credentials => 
  await request('POST', '/users/auth/login', credentials)
;

const verify = async () => 
  await fetch(`${API}/users/auth/verify`, { credentials: 'include' })
    .then(res => res.ok)
    .catch(err => console.error(err))
;

const logOut = async () => 
  await request('GET', '/users/auth/logout')
;

export { signUp, logIn, verify, logOut };
