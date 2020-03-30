'use script'


import users from './users.js'


console.log('=====================  task-6 ===============================');
/////////////////////===========    task-6  ===================================

const getUsersWithAge = (users, min, max) => 
users.filter(user => min < user.age && user.age < max)
.map(user => user.name);
  
console.log(getUsersWithAge(users, 20, 30)); 
// [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
  