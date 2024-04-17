const myEvery = (arr, callback) => {
  for (const value of arr) {
    //you want to test if its false instead of true if you want to check the whole of something.
    if (!callback(value)) return false;
  }
  return true;
};

const sortUsersBy = (users, sortingFunction) => {
  const newArr = [...users].sort(sortingFunction);
  return newArr
};

const logEachName = (name) => {
  return name.forEach((name, index, array) => console.log(name, index, array));
};

const logEachUserBio = (users) => {
  return users.forEach((users) => console.log(users.bio));
};

module.exports = {
  myEvery,
  sortUsersBy,
  logEachName,
  logEachUserBio,
};
