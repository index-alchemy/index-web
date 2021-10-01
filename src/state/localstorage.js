/*
Save to localstorage:
  current theme
  pitch title + description
*/

const THEME_KEY = 'theme';
const PITCH_PROPOSAL_TITLE_KEY = 'pitch_title';
const PITCH_PROPOSAL_DESCRIPTION_KEY = 'pitch_description';

const getTheme = () => {
  return Number(localStorage.getItem(THEME_KEY));
};

const setTheme = theme => {
  localStorage.setItem(THEME_KEY, theme);
};

const getPitchProposal = () => {
  return {
    title: localStorage.getItem(PITCH_PROPOSAL_TITLE_KEY),
    description: localStorage.getItem(PITCH_PROPOSAL_DESCRIPTION_KEY)
  }
};

const setPitchProposal = (title, description) => {
  if (title) localStorage.setItem(PITCH_PROPOSAL_TITLE_KEY, title);
  if (description) localStorage.setItem(PITCH_PROPOSAL_DESCRIPTION_KEY, description);
};

const clearPitchProposal = () => {
  localStorage.removeItem(PITCH_PROPOSAL_TITLE_KEY);
  localStorage.removeItem(PITCH_PROPOSAL_DESCRIPTION_KEY);
};

export { getTheme, setTheme, getPitchProposal, setPitchProposal, clearPitchProposal };
