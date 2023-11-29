const UsersData = [];

const addUser = (newUser) => {
  UsersData.length = 0;
  UsersData.push(newUser);
};

export { UsersData, addUser };
