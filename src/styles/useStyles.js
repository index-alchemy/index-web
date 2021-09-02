import { createUseStyles } from "react-jss";

const useCommonStyles = createUseStyles({
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '1rem'
  }
});

export default useCommonStyles;
