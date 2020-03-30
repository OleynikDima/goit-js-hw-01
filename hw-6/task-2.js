'use script'


import users from './users.js'

console.log('=====================  task-2 ===============================');
/////////========================   task-2  ================================

const getUsersWithEyeColor = (users, color) => 
users.filter(user => user.eyeColor === color);
  
console.log(getUsersWithEyeColor(users, 'blue')); 
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
