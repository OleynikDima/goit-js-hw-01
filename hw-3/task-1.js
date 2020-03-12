const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };
  
  user.mood = 'happy';
  user.hobby = 'skydiving';
  user.premium = false;
  
  console.log(user);
  
  const newUser = Object.keys(user);
  for (const key of newUser){

      console.log(key);
}
 