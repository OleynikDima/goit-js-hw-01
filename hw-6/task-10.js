'use script'


import users from './users.js'



console.log('================  task-10 ===============================');
///////////////////========    task-10  ===================================

  
const getSortedUniqueSkills = users => 
  users.reduce((acc,el)=>{
    acc.push(...el.skills);
    return acc;
  },[])
  .sort()
  .filter((el,ind,arr)=>arr.indexOf(el)===ind);
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure' 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]