
const USER = 'USER_SESSION';

const getPrevUser = () => {
  const prevUser = localStorage.getItem(USER);
  return prevUser ? JSON.parse(prevUser) : null;
};

const setPrevUser = (user) => {
  if (user) {
    const { id, email, name, cohort } = user;
    localStorage.setItem(USER, JSON.stringify({ id, email, name, cohort }));
  } else localStorage.removeItem(USER);
};

export { getPrevUser, setPrevUser };
