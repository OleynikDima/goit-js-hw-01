'use script'


import users from './users.js'



console.log('=====================  task-8 ===============================');
/////////////////////===========    task-8  ===================================

const getUsersWithFriend = (users, friendName) => {
  return users.filter(
    user => user.friends.indexOf(friendName) !== -1)
    .map(user => user.name); 
}
    

console.log(getUsersWithFriend(users, 'Briana Decker')); 
// [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry'));
 // [ 'Elma Head', 'Sheree Anthony' ]
  