import { useState, useEffect } from 'react';
import { fetchSprint, updatePreference, addPreference, fetchSprintWithResult } from '../services/indexAPI.js';
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
    const pitchIds = sprint.pitches.map(pitch => pitch.id);
    const match = sprint.preferences.find(p => p.userId === userId);

    let newPrefs = match 
      ? match.preference
      : shuffleArray(sprint.pitches.map(p => p.id))
    ;
    newPrefs = newPrefs.concat(pitchIds.filter(id => !newPrefs.includes(id)));

    setPrefs(newPrefs);
  };

  const updateResult = (teams, id) => {
    setLoading(true);
    fetchSprintWithResult(id, teams)
      .then(setSprint)
      .finally(() => setLoading(false))
      .catch(err => console.error(err))
    ;
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

  return { loading, sprint, prefs, initializePrefs, updatePrefs, updateResult };
}
