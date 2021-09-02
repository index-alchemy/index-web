import React from 'react';
import Search from '../../search/Search';
import useCommonStyles, { useLandingPageStyles } from '../../styles/useStyles';

const Landing = () => {
  const commonStyles = useCommonStyles();
  const styles = useLandingPageStyles();

  return (
    <div className={commonStyles.page}>
      <section>
        <h1 className={styles.heading}>
          Project pitches and voting, simplified.
        </h1>
        <span className={styles.subheading}>
          Search past projects for inspiration, pitch project ideas, join teams, and brainstorm on implementation, all in one app.
        </span>
      </section>
      <hr className={styles.bulbBreak}/>
      <section>
        <Search/>
      </section>
    </div>
  );
};

export default Landing;
