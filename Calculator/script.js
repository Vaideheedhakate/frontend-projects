const input = document.getElementsByTagName('input')[0];
const buttons = document.querySelectorAll('button');

let str = "";
for(let i=0; i<buttons.length; i++){
    let buttonElement = buttons[i];
    buttonElement.addEventListener('click', (e)=>{
        let innerHTML = e.target.innerText;
        if(innerHTML === 'AC'){
            str = "";
        }
        else if(innerHTML === 'DEL'){
            str = str.slice(0, -1);
        }
        else if(innerHTML === '='){
            // str = eval(str);
            try{
                str = Function('"use strict";return (' + str + ')')();
            }            
            catch{
                str = "Error";
            }
        }
        else{
            str += e.target.innerText;
        }
        input.value = str;
    });
}