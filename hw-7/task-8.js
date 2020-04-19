'use script'

const conteiner = document.querySelector('#controls');
const inputAmount = document.querySelector('#controls > input')


console.log(inputAmount.textContent);

const btnCreate = document.querySelector('button[data-action="render"]');
const btnDelete = conteiner.querySelector('button[data-action="destroy"]');

btnCreate.addEventListener('click', Amount);
btnDelete.addEventListener('click', destroyBoxes);



///////------------/////---btnCreate----/////////-----------//////////
function Amount(){
    const massive = [];
        if(inputAmount.value != ''){
            for(let i=0;i<inputAmount.value;i++){
                massive.push(i+1)
            }
        }else{ alert('Введите кол-во')
        }

    function createBoxes(amount){
        return amount.map(el => createBox(el));
    };

    function createBox(el){
            const div = document.querySelector('#boxes');
            div.style.display = 'flex'
            const divBox = document.createElement('div');
            
            const r = Math.floor(Math.random()*256);
            const g = Math.floor(Math.random()*256);
            const b = Math.floor(Math.random()*256);
            const rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
            
            const numEl = el*10+20
           
            divBox.style.width = `${numEl}`+'px'
            divBox.style.height = `${numEl}`+'px'
            divBox.style.background = rgb
            divBox.style.marginRight = '1px'
            
    
            
            div.append(divBox)
            return div
    };
    

    return createBoxes(massive)

}



//////////---------////////--btnDelete--/////////---------/////////
function destroyBoxes(){
    const box = document.querySelector('div#boxes').querySelectorAll('div')
    for (let i=0;i<box.length;i++){
        box[i].remove()        
        }
    inputAmount.value = ''
};
