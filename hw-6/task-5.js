'use script'


import users from './users.js'




console.log('=====================  task-5 ===============================');
/////////////////////===========    task-5  ===================================
const getUserWithEmail = (users, email) => 
users.find(user => user.email === email);
  
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

