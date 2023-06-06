// Задача 1
function compareArrays(arr1, arr2) {
  return arr1.length !== arr2.length? 
    false : arr1.every((el, index) => el === arr2[index]);
}

// Задача 2
function getUsersNamesInAgeRange(users, gender) {
  return users.filter(el => el.gender === gender).reduce((acc, el, _, arr) => {
    return acc += el.age / arr.length;
  }, 0);
}