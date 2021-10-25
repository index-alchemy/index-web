import { createUseStyles } from 'react-jss';

const useCommonStyles = createUseStyles({
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '1rem',
    paddingBottom: '2rem',
    gap: '1rem',
    '& > *': {
      width: '50%',
      minWidth: '300px',
      maxWidth: '600px',
    },
    '& > section': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '& > h2': {
      textAlign: 'center',
    }
  },
  buttonPrimary: {},
  toggleText: {
    cursor: 'pointer',
    fontSize: '1rem',
    color: 'var(--color-text-secondary)'
  },
  adminArea: {
    border: '0.15rem dotted var(--color-bg-button)',
    borderRadius: 'var(--radius-big)',
    padding: '1rem',
    opacity: '0.5',
    '&:hover': {
      opacity: '1'
    }
  }
});

const useHeaderStyles = createUseStyles({
  header: {
    background: 'var(--color-bg-header)',
    borderBottom: '1px solid var(--color-border)',
    color: 'var(--color-text)',
    fontWeight: '500',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '6rem',
    padding: '1rem 2rem',
    '& h3 button': {
      bottom: '2px',
      border: 'none',
      boxShadow: 'none',
      background: 'none',
      '&:hover::after': { opacity: 0 }
    },
    '& a': {
      color: 'inherit',
      textDecoration: 'none'
    },
    '& nav': {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },
    '& nav button': {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      minWidth: 'calc(100% + 1rem)',
      '& svg': {
        maxHeight: '1rem'
      }
    },
  }
});

const useLandingPageStyles = createUseStyles({
  easter: {
    '& > section:first-of-type': {
      display: 'var(--not-easter)'
    },
    '& > img:first-of-type': {
      display: 'var(--easter-egg)'
    }
  },
  bulbBreak: {
    borderTop: 'var(--break)',
    width: '100%',
    margin: '3rem 0',
    border: 'none',
    textAlign: 'center',
    overflow: 'visible',
    height: '0.5rem',
    '&::after': {
      display: 'inline-block',
      content: '"💡"',
      fontSize: '2rem',
      padding: '0 1rem',
      position: 'relative',
      backgroundColor: 'var(--color-bg)',
      top: '-1.5rem',
    }
  },
  heading: {
    color: 'var(--color-text-title)',
    fontSize: '2.5rem',
    fontWeight: '1000',
    textAlign: 'center',
  },
  subheading: {
    fontSize: '1.5rem',
    fontWeight: '250',
    textAlign: 'center'
  },
  searchSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& ul': {
      gap: '1rem',
      display: 'flex',
      flexDirection: 'column'
    },
    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  },
  recentPitches: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > h4': {
      fontSize: '1.15rem',
      fontWeight: '600',
      margin: 0,
      marginTop: '1rem'
    }
  }
});

const useHomePageStyles = createUseStyles({
  cohortList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    gap: '1rem'
  },
  cohortItem: {
    background: 'var(--color-fg)',
    border: 'var(--border)',
    borderRadius: 'var(--radius-big)',
    boxShadow: 'var(--box-shadow-big)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    height: '100%',
    padding: '1rem'
  },
  cohortName: {
    color: 'var(--color-text-title-item)',
    fontSize: '1.15rem',
    cursor: 'pointer',
    margin: 0
  },
  sprintListToggle: {
    display: 'none',
    '& + ul': { display: 'none' },
    '&:checked + ul': { display: 'flex' },
  },
  sprintList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    padding: '0',
    width: '100%',
    height: '100%',
    gap: '0.5rem',
    '& > li': {
      background: 'var(--color-bg-input)',
      border: 'var(--border)',
      borderRadius: 'var(--radius)',
      width: '90%',
      fontWeight: '500',
      cursor: 'pointer',
      position: 'relative',
      '&::after': {
        boxShadow: 'var(--box-shadow-hover)',
        display: 'inline-block',
        top: '0',
        left: '0',
        content: '""',
        width: '100%',
        height: '100%',
        position: 'absolute',
        opacity: '0',
        transition: 'opacity 0.2s',
        zIndex: '-1'
      },
      '&:hover::after': {
        opacity: '1'
      },
      '& > a': {
        color: 'var(--color-text-input)',
        display: 'inline-block',
        width: '100%',
        height: '100%',
        padding: '0.5rem',
        textDecoration: 'none'
      },
      '& span:last-child': {
        float: 'right',
        fontWeight: '100'
      }
    }
  },
  sprintsForm: {
    '& form': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem'
    }
  }
});

const useSprintPageStyles = createUseStyles({
  pitchList: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem'
  },
  addPitchForm: {
    '& > *': {
      border: 'var(--border)',
      borderRadius: 'var(--radius-big)',
      boxShadow: 'var(--box-shadow-big)',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      padding: '1rem',
      '& > *': {
        width: '100%',
      },
      '& button': {
        marginTop: '2rem'
      }
    }
  },
  result: {
    width: '100%',
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    gap: '1rem',
    justifyContent: 'left',
    '& > li': {
      fontSize: '1rem',
      '& > div': {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '0.25rem',
        '& > label': {
          color: 'var(--color-text-input)',
          fontWeight: '600',
          '&:after': { content: '":"' }
        },
        '& > span': {
          background: 'var(--color-fg)',
          border: 'var(--border)',
          borderRadius: 'var(--radius)',
          padding: '0.15rem 0.25rem',
          maxWidth: '12rem',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textAlign: 'center',
        }
      }
    }
  },
  adminArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    '& > form': {
      color: 'var(--color-text-input)',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }
  }
});

const usePitchItemStyles = createUseStyles({
  pitchItem: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
    '& input': {
      width: '3rem'
    },
    '& > div': {
      background: 'var(--color-fg)',
      border: 'var(--border)',
      borderRadius: 'var(--radius-big)',
      boxShadow: 'var(--box-shadow)',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      gap: '0.5rem',
      textAlign: 'center',
      '& > a': {
        color: 'var(--color-text-title-item)',
        fontSize: '1.15rem',
        textDecoration: 'none',
        fontWeight: '600'
      },
      '& > *:nth-child(2)': {
        color: 'var(--color-text-input)',
        width: '100%',
        fontWeight: '420',
        opacity: 0.9,
        display: '-webkit-box',
        '-webkit-line-clamp': 3,
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden'
      }
    }
  }
});

export default useCommonStyles;
export {
  useHeaderStyles,
  useLandingPageStyles,
  useHomePageStyles,
  useSprintPageStyles,
  usePitchItemStyles
};
