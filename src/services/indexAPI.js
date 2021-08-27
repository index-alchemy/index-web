const API = 'http://localhost:7890/api/v1';

export const fetchSprints = async () => {
  return await fetch(API + '/sprints', { 
    credentials: 'include'
  })
    .then(res => res.json())
    .catch(err => console.log(err))
} 