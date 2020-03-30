'use script'


import users from './users.js'



console.log('=====================  task-4 ===============================');
////////////=====================   task-4    ============================

const getInactiveUsers = users => users.filter(user => !user.isActive)
.map(user => user.name)
console.log(getInactiveUsers(users)); 
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
  