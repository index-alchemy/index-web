
const USER = 'USER_SESSION';

const getPrevUser = () => {
  const prevUser = localStorage.getItem(USER);
  return prevUser ? JSON.parse(prevUser) : null;
};

const setPrevUser = (user) => {
  if (user) {
    localStorage.setItem(USER, JSON.stringify(user));
  } else localStorage.removeItem(USER);
};

export { getPrevUser, setPrevUser };
