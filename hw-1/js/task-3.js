// test -3
'use strict';
let message;

const ADMIN_PASSWORD = 'jqueryismyjam';

const input = prompt('введите пароль');

if (input === null) {
  message = 'Отменено пользователем!';
} else if (ADMIN_PASSWORD === input) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
console.log(message);