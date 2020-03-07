'use script'
let numbers = [];
let totalNumber = 0;
let input;

do {
     input = prompt('введите любое число' );
        if (Number.isNaN(Number(input))) {
            alert('введите число');
        }else {
        totalNumber += Number(input);
        numbers.push(Number(input));
        
        
    }
} while (input !== null){
    alert(`${totalNumber}`);
    console.log(`${totalNumber}`, numbers); 
    }