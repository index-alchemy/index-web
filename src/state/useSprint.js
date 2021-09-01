import { useState, useEffect } from 'react';
import { fetchSprint, updatePreference, addPreference } from '../services/indexAPI.js';
import { shuffleArray } from '../utils/utils.js';

export const useSprint = id => {
  const [loading, setLoading] = useState(true);
  const [sprint, setSprint] = useState(null);
  const [prefs, setPrefs] = useState([]);

  useEffect(() => {
    fetchSprint(id)
      .then(setSprint)
      .then(() => setLoading(false))
      .catch(err => console.error(err))
    ;
  }, []);

  const initializePrefs = userId => {
    // initialize prefs
    const match = sprint.preferences.find(p => p.userId === userId);
    setPrefs(match 
      ? match.preference
      : shuffleArray(sprint.pitches.map(p => p.id))
    );
  };

  const updatePrefs = (userId, preference) => {
    setPrefs(preference);

    const match = sprint.preferences.find(p => p.userId === userId);
    if (match) {
      match.preference = preference;
      updatePreference(match)
        .then(res => setPrefs(res.preference))
        .then(() => {
          const newListOfPrefs = [...sprint.preferences.map(
            p => p.id === match.id ? match : p)
          ];
          setSprint({ ...sprint, preferences: newListOfPrefs });
        })
        .catch(err => console.error(err))
      ;
    } else {
      addPreference({
        sprintId: sprint.id,
        userId,
        preference
      })
        .then(res => {
          setPrefs(res.preference);
          setSprint({ ...sprint, preferences: [...sprint.preferences, res] });
        })
        .catch(err => console.error(err))
      ;
    }
  };

  return { loading, sprint, prefs, initializePrefs, updatePrefs };
}
