'use script'



let span = document.querySelector('#value');

let counterValue = 0;

// const increment = document.querySelector('button[data-action="increment"]');
// increment.addEventListener('click', () => {
//     counterValue += 1;
//     span.textContent = counterValue;
//     console.log(span)
// });
  

// const decrement = document.querySelector('button[data-action="decrement"]');
// decrement.addEventListener('click', () => {
//     counterValue -= 1;
//     span.textContent = counterValue;
//     console.log(span)
// });


const increment = document.querySelector('button[data-action="increment"]').addEventListener('click', handlerIncrement);
const decrement = document.querySelector('button[data-action="decrement"]').addEventListener('click', handlerDecrement);

function handlerIncrement(event){
    counterValue += 1;
    span.textContent = counterValue;    
}

function handlerDecrement(event){
    counterValue -= 1;
    span.textContent = counterValue;
}




