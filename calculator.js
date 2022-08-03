let screen  = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let operatorval='';
for (let iterator of buttons) {
    iterator.addEventListener('click',()=>{
        operator = iterator.innerText;
    //    operatorval += operator;
        if (operator == 'X') {
            operator = '*';
            operatorval += operator;
            screen.value = operator;
        }
        else if(operator == 'C')
        {
            operatorval = '';
            screen.value = operatorval;
        }
        else if(operator == '='){
            screen.value = eval(operatorval);
        }
        else{
            operatorval += operator;
            screen.value = operatorval;
        }
    });
}