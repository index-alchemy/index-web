const API = 'http://localhost:7890/api/v1';

const fetchSprints = async () => {
  return await fetch(API + '/sprints')
    .then(res => res.json())
    .catch(err => console.log(err))
} 