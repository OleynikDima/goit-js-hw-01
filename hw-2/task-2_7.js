// not fix ...
// 'use script'

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function(login) {
//     if ( login.length < 4 || login.length > 16){
//         return false;
//     }else {        
//         return true;
//     }
    
// };
// const isLoginUnique = function(allLogins, login){
//         for (let i = 0; i < allLogins.length; i ++ ){
//             if (login === allLogins[i]){
//                 console.log(allLogins);
                
//                 return false;
//             }else{
//         return true;
//             }
//     }

// };


// const addLogin = function(allLogins, login) {
//         if (isLoginValid(login) === true){
            
//             if(isLoginUnique(login) === true){
//                 return ('Логин успешно добавлен!');
//             }else{
//                 allLogins.push(login)
//                 return ('Такой логин уже используется!');
//             }
//         }else {
//             return('Ошибка! Логин должен быть от 4 до 16 символов');
        
//         }
// };
    

// console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'