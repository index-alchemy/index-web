import React, { useEffect } from 'react';
import Search from '../../search/Search';
import { fetchPitches } from '../../services/indexAPI';
import useCommonStyles, { useLandingPageStyles } from '../../styles/useStyles';
import RecentPitches from './RecentPitches';
import svg from './designers-choice.svg';

const Landing = () => {
  const commonStyles = useCommonStyles();
  const styles = useLandingPageStyles();

  const [query, setQuery] = React.useState('');
  const [loadingRecent, setLoadingRecent] = React.useState(true);
  const [recentPitches, setRecentPitches] = React.useState([]);

  useEffect(() => {
    setLoadingRecent(true);
    fetchPitches()
      .then(pitches => pitches.slice(0, 12))
      .then(setRecentPitches)
      .catch(console.error)
      .finally(() => setLoadingRecent(false));
    ;
  }, []);

  return (
    <div className={commonStyles.page + ' ' + styles.easter}>
      <section>
        <h1 className={styles.heading}>
          Project pitches and voting, simplified.
        </h1>
        <span className={styles.subheading}>
          Search past projects for inspiration, pitch project ideas, join teams, and brainstorm on implementation, all in one app.
        </span>
      </section>
      <img src={svg} alt="Designers Choice" className={styles.designersChoice} />

      <hr className={styles.bulbBreak} />

      <section>
        <Search setQuery={setQuery} query={query} />
        {!Boolean(query) && <RecentPitches 
          loading={loadingRecent}
          pitches={recentPitches}
        />}
      </section>
    </div>
  );
};

export default Landing;
