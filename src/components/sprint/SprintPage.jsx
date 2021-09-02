import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PitchItem from './PitchItem';
import PitchForm from './PitchForm';
import { useAuthActions, useSession } from '../../state/SessionProvider';
import { useSprint } from '../../state/useSprint.js';
import { relocateItemInArray } from '../../utils/utils.js';
import useCommonStyles, { useSprintPageStyles } from '../../styles/useStyles';

const SprintPage = () => {
  const styles = useSprintPageStyles();
  const commonStyles = useCommonStyles();
  
  const [showPitchForm, setShowPitchForm] = React.useState(false);

  const params = useParams();
  const { session, isAdmin } = useSession();
  const { verify } = useAuthActions();
  const { loading, sprint, prefs, initializePrefs, updatePrefs, updateResult } = useSprint(params.id);

  useEffect(() => {
    if (!session) verify();
    else if (!Boolean(prefs.length) && Boolean(sprint)) initializePrefs(session.id);
  }, [session, verify, initializePrefs, prefs, sprint]);

  const handleReorder = e => {
    e.preventDefault();

    const rank = prefs.indexOf(e.target.name);

    // validate that e.target.value is a valid number
    e.target.value = Math.max(1, Number(e.target.value.trim())) || (rank + 1);
    e.target.value = Math.min(prefs.length, Number(e.target.value));

    const newIndex = Number(e.target.value) - 1;
    const newPrefs = relocateItemInArray([...prefs], rank, newIndex);

    updatePrefs(session.id, newPrefs);
  };

  console.log(sprint);

  return <>
    <div className={commonStyles.page}>
      {loading && !Boolean(sprint)
        ? <span>loading...</span>
        : <>
          <h2>{sprint.name}</h2>

          <section>
            {sprint.preferences.length === 1
              ? <span>{sprint.preferences.length} student has voted</span>
              : <span>{sprint.preferences.length} students have voted</span>
            }

            {isAdmin && <button onClick={() => updateResult(4, params.id)}>end pitches</button>}
          </section>

          <section>
            <ul className={styles.pitchList}>
              {sprint.pitches.map(pitch =>
                <PitchItem
                  key={pitch.id}
                  pitch={pitch}
                  validCohort={Boolean(session)
                    && session.cohort === sprint.cohort
                    && !isAdmin
                  }
                  rank={prefs.indexOf(pitch.id)}
                  handleReorder={handleReorder}
                />
              )}
            </ul>
          </section>

          {showPitchForm 
            ? <section className={styles.addPitchForm}>
                <PitchForm sprintId={params.id}/>
              </section>
            : <section><span 
              className={commonStyles.toggleText}
              onClick={() => setShowPitchForm(true)}
            >Add a Pitch</span></section>
          }
        </>
      }
    </div>
  </>;
};

export default SprintPage;
