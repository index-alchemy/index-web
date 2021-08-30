const API = 'http://localhost:7890/api/v1';

const signUp = async credentials => {
  return await fetch(`${API}/users/auth/signup`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(credentials)
  })
    .then(resp => resp.json())
    .catch(err => console.log(err))
  ;
};

const logIn = async credentials => {
  return await fetch(`${API}/users/auth/login`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(credentials)
  })
    .then(resp => resp.json())
    .catch(err => console.log(err))
  ;
}

export { signUp, logIn };
