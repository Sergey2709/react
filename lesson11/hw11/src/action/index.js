export const addNewUser = (passport, name, age) => ({
  type: 'ADD_USER',
  passport,
  name,
  age,
});

export const ShowUsers = {
  SHOW_ALL: 'SHOW_ALL',
};
