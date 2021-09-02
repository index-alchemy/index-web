import { createUseStyles } from 'react-jss';

const colors = {
  snow: '#fffafa',          // background
  quicksilver: '#a6a6a6',   // border, shadow
  ivory: '#64645e',
  charcoal: '#36454f',      // text-input
  feldgrau: '#1e2421',      // text

  bluetiful: '#00a1ff',     // links
};

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
  buttonDefault: {
    background: 'transparent',
    border: ['0.6px', 'solid', '#ABABAB'],
    borderRadius: '0.25rem',
    boxShadow: '0px 0px 2px 0.2px rgba(0, 0, 0, 0.31)',
    color: '#696969',
    fontSize: '1rem',
    cursor: 'pointer',
    padding: '0.4rem 0.8rem',
    display: 'inline-block',
    // see: https://tobiasahlin.com/blog/how-to-animate-box-shadow/
    position: 'relative',
    '&::after': {
      display: 'inline-block',
      top: '0',
      left: '0',
      content: '""',
      width: '100%',
      height: '100%',
      position: 'absolute',
      boxShadow: '0 1px 10px 0 #a6a6a6',
      opacity: '0',
      transition: 'opacity 0.2s',
    },
    '&:hover::after': {
      opacity: '1'
    }
  },
  buttonPrimary: {
    background: 'transparent',
    color: '#696969',
    border: ['0.6px', 'solid', '#ABABAB'],
    borderRadius: '0.25rem',
    boxShadow: '0px 0px 2px 0.2px rgba(0, 0, 0, 0.31)',
    fontSize: '1rem',
    cursor: 'pointer',
    padding: '0.4rem 0.8rem',
    display: 'inline-block',
    // see: https://tobiasahlin.com/blog/how-to-animate-box-shadow/
    position: 'relative',
    '&::after': {
      display: 'inline-block',
      top: '0',
      left: '0',
      content: '""',
      width: '100%',
      height: '100%',
      position: 'absolute',
      zIndex: '-1',
      boxShadow: '0 1px 10px 0 #a6a6a6',
      opacity: '0',
      transition: 'opacity 0.2s',
    },
    '&:hover::after': {
      opacity: '1'
    }
  },
  textInputDefault: {
    backgroundColor: '#fff',
    color: '#36454f',
    border: ['0.6px', 'solid', '#ABABAB'],
    outline: 'none',
    borderRadius: '0.25rem',
    padding: '0.25rem 0.5rem',
    fontSize: '1rem',
  },
  selectDefault: {
    backgroundColor: '#0001',
    color: '#64645e',
    border: '1px solid #a6a6a6',
    borderRadius: '0.25rem',
    boxShadow: '0 1px 2px 0 #a6a6a6',
    padding: '0.25rem 0.5rem',
    fontSize: '1rem',
  },
  toggleText: {
    cursor: 'pointer',
    fontSize: '1rem',
    color: '#3c69e7'
  }
});

const useLandingPageStyles = createUseStyles({
  bulbBreak: {
    width: '100%',
    margin: '3rem 0',
    border: 'none',
    borderTop: [1, 'solid', '#E5E5E5'],
    textAlign: 'center',
    overflow: 'visible',
    height: '0.5rem',
    '&::after': {
      display: 'inline-block',
      content: '"💡"',
      fontSize: '2rem',
      padding: '0 1rem',
      position: 'relative',
      backgroundColor: '#FEFEFE',
      top: '-1.5rem',
    }
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: '1000',
    textAlign: 'center',
    color: '#1f1f1fe4'
  },
  subheading: {
    fontSize: '1.5rem',
    fontWeight: '400',
    opacity: '0.6',
    textAlign: 'center',
  }
});

const useAuthPageStyles = createUseStyles({
  authForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '1rem 2rem',
    background: 'none',
    border: [0.5, 'solid', '#a6a6a6'],
    borderRadius: '0.5rem',
    boxShadow: '0 0 0.25rem #0003',
    '& > *': {
      width: '100%',
    },
    '& > button': {
      marginTop: '2rem',
      width: '100%',
    }
  },
  checkField: {
    color: '#36454f',
    padding: '0.2rem 0',
    fontSize: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
  },
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    height: '100%',
    border: [0.5, 'solid', '#a6a6a6'],
    borderRadius: '0.5rem',
    boxShadow: '0 0 0.25rem #0003',
    padding: '1rem'
  },
  cohortName: {
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
      width: '90%',
      fontWeight: '500',
      backgroundColor: '#fff',
      border: [0.5, 'solid', '#a6a6a6'],
      borderRadius: '0.25rem',
      cursor: 'pointer',
      position: 'relative',
      '&::after': {
        display: 'inline-block',
        top: '0',
        left: '0',
        content: '""',
        zIndex: '-1',
        width: '100%',
        height: '100%',
        position: 'absolute',
        boxShadow: '0 1px 10px 0 #a6a6a6',
        opacity: '0',
        transition: 'opacity 0.2s',
      },
      '&:hover::after': {
        opacity: '1'
      },
      '& > a': {
        display: 'inline-block',
        width: '100%',
        height: '100%',
        padding: '0.5rem',
        color: '#1e2421',
        textDecoration: 'none',
      },
      '& span:last-child': {
        float: 'right',
        opacity: 0.75,
        fontWeight: '100'
      }
    }
  }
});

const useSprintPageStyles = createUseStyles({
  pitchList: {
    listStyle: 'none',
    padding: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPitchForm: {
    '& > *': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      border: [0.5, 'solid', '#a6a6a6'],
      borderRadius: '0.5rem',
      boxShadow: '0 0 0.25rem #0003',
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
    gap: '0.5rem 1rem',
    justifyContent: 'left',
    '& > li': {
      // fontSize: '1rem',
      // border: '1px solid #a6a6a6',
      // borderRadius: '0.25rem',
      // boxShadow: '0 1px 2px 0 #a6a6a6',
      padding: '0.5rem',
      '& > div': {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '0.25rem',
        '& > label': {
          fontWeight: '600',
          '&:after': { content: '":"' }
        },
        '& > span': {
          maxWidth: '12rem',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          backgroundColor: '#fff',
          border: '1px solid #a6a6a6',
          borderRadius: '0.25rem',
          padding: '0.15rem 0.25rem',
          textAlign: 'center',
        }
      }
    }
  }
});

export default useCommonStyles;
export {
  useLandingPageStyles,
  useAuthPageStyles,
  useHomePageStyles,
  useSprintPageStyles
};
