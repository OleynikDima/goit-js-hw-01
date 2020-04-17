'use script'


const inputValid = document.getElementById('validation-input');
inputValid.style.border = '3px solid #bdbdbd'
const inputLength = inputValid.dataset.length;

inputValid.addEventListener('focusout', (event) => 
    event.target.value.length != 0 ?
            (event.target.value.length > inputLength 
            ? inputValid.style.border = '3px solid #f44336'
            :inputValid.style.border = '3px solid #4caf50')
    : inputValid.style.border = '3px solid #bdbdbd'
);
