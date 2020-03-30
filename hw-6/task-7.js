'use script'


import users from './users.js'



console.log('=====================  task-7 ===============================');
/////////////////////===========    task-7  ===================================

const calculateTotalBalance = users => 
users.reduce((total, newBalance) => total + newBalance.balance, 0)
  
console.log(calculateTotalBalance(users)); // 20916
